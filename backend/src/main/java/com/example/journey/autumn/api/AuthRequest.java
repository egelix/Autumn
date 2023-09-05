package com.example.journey.autumn.api;

import jakarta.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Length;

public class AuthRequest {
    @NotNull @Length(min = 5, max = 50)
    private String name;
    @NotNull @Length(min = 5, max = 10)
    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
