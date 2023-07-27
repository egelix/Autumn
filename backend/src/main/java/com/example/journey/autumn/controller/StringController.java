package com.example.journey.autumn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StringController {

    @PostMapping("/reverse")
    @ResponseBody
    public String reverseString(@RequestBody String string) {
        String result = "";
        for (int i = 0; i < string.length(); i++) {
            result = string.charAt(i) + result;
        }
        return result;
    }
}
