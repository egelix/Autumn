package com.example.journey.autumn.repository

import com.example.journey.autumn.model.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User?, Int?>