package com.example.journey.autumn.controller;

import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.*;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @Autowired
    PasswordEncoder passwordEncoder;
    @GetMapping(produces = "application/json")
    public List<User> getAllUsers() {
        List<User> allUsers = userRepository.findAll();
        System.out.println(allUsers);
        return allUsers;
    }
    @PostMapping(produces = "application/json")
    public HttpStatus createUser(@RequestBody Map<String, String> requestBody) {
        String password = passwordEncoder.encode(requestBody.get("password"));
        userRepository.save(new User(requestBody.get("username"), password));
        return HttpStatus.OK;
    }
    @DeleteMapping(value = "/{id}")
    public HttpStatus deleteUserById(@PathVariable("id") Long id) {
        userRepository.deleteById(id);
        return HttpStatus.OK;
    }
    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<User> getUserById(@PathVariable("id") int id) {
        Optional<User> requestedUser = userRepository.findById((long)id);

        return requestedUser.isPresent() ? new ResponseEntity<>(requestedUser.get(), HttpStatus.OK) : new ResponseEntity<>(null, NOT_FOUND);
    }
}
