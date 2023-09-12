package com.example.journey.autumn.api;

import com.example.journey.autumn.model.User;
import com.example.journey.autumn.security.UserPrincipal;

public class AuthResponse {
    private String name;
    private String accessToken;
    private UserPrincipal user;
    public AuthResponse() {};
    public AuthResponse(String name, String accessToken, UserPrincipal user) {
        this.name = name;
        this.accessToken = accessToken;
        this.user = user;
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

    public UserPrincipal getUser() {
        return user;
    }

    public void setUser(UserPrincipal user) {
        this.user = user;
    }
}
