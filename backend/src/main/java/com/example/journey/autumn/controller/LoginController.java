package com.example.journey.autumn.controller;

import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;


    @RequestMapping("/user")
    public User getUserDetailsAfterLogin(Authentication authentication) {
        Optional<User> user = userRepository.findByUsername(authentication.getName());
        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }
}
