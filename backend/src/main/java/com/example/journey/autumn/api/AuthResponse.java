package com.example.journey.autumn.api;

public class AuthResponse {
    private String name;
    private String accessToken;
    public AuthResponse() {};
    public AuthResponse(String name, String accessToken) {
        this.name = name;
        this.accessToken = accessToken;
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
}
