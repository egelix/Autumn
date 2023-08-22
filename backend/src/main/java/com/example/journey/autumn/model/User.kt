package com.example.journey.autumn.model

import jakarta.persistence.*

@Entity
@Table(name = "users")
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = null,
    val username: String,
    val password: String
){
    // Add a default constructor
    constructor() : this(null, "", "")
}