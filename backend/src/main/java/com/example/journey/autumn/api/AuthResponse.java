package com.example.journey.autumn.api;

import com.example.journey.autumn.model.User;
import com.example.journey.autumn.security.UserPrincipal;

public class AuthResponse {
    private String name;
    private String accessToken;
    private int id;
    public AuthResponse() {};
    public AuthResponse(String name, String accessToken, int id) {
        this.name = name;
        this.accessToken = accessToken;
        this.id = id;
    }
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
