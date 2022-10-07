package com.example.DucksNStuff.controllers;

import com.example.DucksNStuff.data.Products;
import com.example.DucksNStuff.data.Users;
import com.example.DucksNStuff.repositories.ProductsRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping("/products")
public class ProductsController {
    //Repository Injection
    ProductsRepository productsRepository;

    //TODO: Get all products by StoreID?

    //DONE:Get a product by ID
    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Products> fetchProductById(@PathVariable long id){
        return productsRepository.findById(id);
    }

    //TODO:Get products by category. Should this be here or CategoryController?

    //DONE:Create a new product
    @CrossOrigin
    @PostMapping("/{id}")
    public ResponseEntity createUser(@RequestBody Products newProduct) throws URISyntaxException {
        Products createdProduct = productsRepository.save(newProduct);
        //return 201
        return ResponseEntity.created(new URI("/products/" + createdProduct.getId())).body(createdProduct);
    }

    //TODO:Update new Product
    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity updateUser(@RequestBody Products updatedProduct, @PathVariable long id){
        //Get product by id
        Optional<Products> originalProductOptional = productsRepository.findById(id);
        //unwrap
        Products originalProduct = originalProductOptional.get();
        //BeanUtils copy
        BeanUtils.copyProperties(updatedProduct, originalProduct);
        //Save
        productsRepository.save(originalProduct);
        //200 response
        return ResponseEntity.ok(originalProduct);
    }

    //TODO:Delete a product
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable long id){
        productsRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
