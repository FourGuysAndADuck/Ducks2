package com.example.DucksNStuff.controllers;

import com.example.DucksNStuff.data.Stores;
import com.example.DucksNStuff.data.Users;
import com.example.DucksNStuff.repositories.StoresRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping("/store")
public class StoresController {
    //Injection
    StoresRepository storesRepository;

    //TODO:Get Store info
    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Stores> fetchStoreById(@PathVariable long id){
       return storesRepository.findById(id);
    }


    //TODO:Create New Store
    @CrossOrigin
    @GetMapping("/create")
    public ResponseEntity createStore(@RequestBody Stores newStore) throws URISyntaxException {
        Stores createdStore = storesRepository.save(newStore);
        //return 201
        return ResponseEntity.created(new URI("/store/" + createdStore.getId())).body(createdStore);
    }
    //TODO:Update Store
    @CrossOrigin
    @PutMapping("/{id}")
    public ResponseEntity updateStore(@PathVariable long id, @RequestBody Stores updatedStore){
        //Getting store by ID
        Optional<Stores> originalStoreOptional = storesRepository.findById(id);
        //Unwrapping from Optional
        Stores originalStore = originalStoreOptional.get();

        //BeanUtils to update only fields that have changed to the original
            BeanUtils.copyProperties(updatedStore, originalStore);
        //Saving changes to database
        storesRepository.save(originalStore);
        //Returning 200
        return ResponseEntity.ok(originalStore);
        }

    //TODO:Delete Store
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteStore(@PathVariable long id){
        storesRepository.deleteById(id);
        //200
        return ResponseEntity.ok().build();
    }

}
