package com.example.journey.autumn.controller;

import com.example.journey.autumn.model.GameRun;
import com.example.journey.autumn.model.User;
import com.example.journey.autumn.repository.GameRunRepository;
import com.example.journey.autumn.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/game-runs")
public class GameRunController {
    @Autowired
    GameRunRepository runRepository;
    @Autowired
    UserRepository userRepository;
    @GetMapping(produces = "application/json")
    public List<GameRun> getAllRuns() {
        return runRepository.findAll();
    }
    @PostMapping(produces = "application/json")
    public HttpStatus createUser(@RequestBody Map<String, String> requestBody) {
        long userId = Long.parseLong(requestBody.get("userId"));
        Optional<User> user = userRepository.findById(userId);
        if(user.isEmpty()) {
            return HttpStatus.NOT_FOUND;
        }
        runRepository.save(new GameRun(Integer.parseInt(requestBody.get("score")), requestBody.get("character"), user.get()));
        return HttpStatus.OK;
    }
    @DeleteMapping(value = "/{id}")
    public HttpStatus deleteRunById(@PathVariable("id") Long id) {
        runRepository.deleteById(id);
        return HttpStatus.OK;
    }
    @GetMapping(value = "/{id}", produces = "application/json")
    public ResponseEntity<GameRun> getRunById(@PathVariable("id") Long id) {
        Optional<GameRun> run = runRepository.findById(id);
        return run.isPresent()? new ResponseEntity<>(run.get(), HttpStatus.OK): new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
    @GetMapping(value = "/user/{id}", produces = "application/json")
    public ResponseEntity<List<GameRun>> getRunByUserId(@PathVariable("id") Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.isPresent()? new ResponseEntity<>(runRepository.findAllByUser(user.get()), HttpStatus.OK): new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}
