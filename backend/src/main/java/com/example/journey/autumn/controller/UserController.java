package com.example.journey.autumn.controller;

import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserRepository userRepository;
    @GetMapping(value = "/all", produces = "application/json")
    public List<User> getAllUsers() {
        List<User> allUsers = userRepository.findAll();
        System.out.println(allUsers);
        return allUsers;
    }
    @PostMapping(value = "/create", produces = "application/json")
    public HttpStatus createUser(@RequestBody Map<String, String> requestBody) {
        userRepository.save(new User(null, requestBody.get("username"), requestBody.get("password")));
        return HttpStatus.OK;
    }


}
