package com.example.DucksNStuff.controllers;

import com.example.DucksNStuff.data.StripePaymentResponse;
import com.google.gson.Gson;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.param.PaymentIntentCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin
@RestController
@RequestMapping(value ="/api/payment", produces = "application/json")
public class StripePaymentController {


    @Value("${stripe.SecretKey}")
    private String stripeKey;

    @CrossOrigin
    @PostMapping("/create-payment-intent")
    public String createPaymentIntent(){
        Gson gson = new Gson();
        Stripe.apiKey = stripeKey;
        PaymentIntentCreateParams params = PaymentIntentCreateParams.builder()
                .setAutomaticPaymentMethods(
                        PaymentIntentCreateParams.AutomaticPaymentMethods.builder()
                                .setEnabled(true)
                                .build()
                )

                .setCurrency("USD")
                .setAmount(9999L)
                .build();
        try {
            // Create a PaymentIntent with the order amount and currency
            PaymentIntent intent = PaymentIntent.create(params);

            // Send PaymentIntent details to client
//            return gson.toJson(new StripePaymentResponse(intent.getClientSecret()));
            return "PAYMENT SUCCESSFUL";


        } catch(StripeException e) {
            System.out.println(e.getMessage());
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        } catch(Exception e) {
            System.out.println(e.getMessage());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
}
