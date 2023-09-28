package com.example.journey.autumn.controller;

import com.example.journey.autumn.model.Achievement;
import com.example.journey.autumn.model.GameRun;
import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.AchievementRepository;
import com.example.journey.autumn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/achievements")
public class AchievementController {
    @Autowired
    AchievementRepository achievementRepository;
    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/user/{id}", produces = "application/json")
    public List<Achievement> getAchievementsByUser(@PathVariable("id") Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.isPresent() ? achievementRepository.findAllByUser(user.get()) : null;
    }

}
