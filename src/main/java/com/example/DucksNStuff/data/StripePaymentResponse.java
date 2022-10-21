package com.example.DucksNStuff.data;


import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class StripePaymentResponse {
    private String clientSecret;

}