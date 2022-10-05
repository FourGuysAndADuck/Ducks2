package com.example.DucksNStuff.controllers;

import com.example.DucksNStuff.data.Users;
import com.example.DucksNStuff.repositories.UsersRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@RestController
@RequestMapping(value = "api/users", produces = "application/json")
public class UsersController {

    private final UsersRepository usersRepository;

    @CrossOrigin
    @GetMapping("")
    public List<Users> fetchAllUsers(){
       return usersRepository.findAll();
    }

    //Get user by ID
    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Users> fetchUserByID(@PathVariable long id){
       return usersRepository.findById(id);
    }

    //Add new user
    @CrossOrigin
    @PostMapping
    public ResponseEntity createUser(@RequestBody Users newUser) throws URISyntaxException {
        Users createdUser = usersRepository.save(newUser);
        //return 201
        return ResponseEntity.created(new URI("/clients/" + createdUser.getId())).body(createdUser);
    }

    //Delete user account
    @CrossOrigin
    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable long id){
        usersRepository.deleteById(id);
        //return 200
        return ResponseEntity.ok().build();
    }

    //Update user info
    @CrossOrigin
    @PutMapping("{id}")
    public ResponseEntity updateUser(@PathVariable long id, @RequestBody Users updatedUser){

        //Use our usersRepository to get the user by ID
        Optional<Users> originalUserOptional = usersRepository.findById(id);

        //Unwrap original user from optional
        Users originalUser = originalUserOptional.get();

        //Using BeanUtils, copying any changed information from the request body into the original user;
        BeanUtils.copyProperties(updatedUser, originalUser);
        //save updated user info
        usersRepository.save(originalUser);
        //Return 200, ok.
        return ResponseEntity.ok(originalUser);
    }


}
