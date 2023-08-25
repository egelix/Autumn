package com.example.journey.autumn.model

import jakarta.persistence.*

@Entity
@Table(name = "_user")
data class User(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null,
    @Column(unique = true)
    var username: String,
    var password: String,
    @ElementCollection(fetch = FetchType.EAGER)
    var authorities: Set<String>

){
    // Add a default constructor
    constructor() : this(null, "", "", emptySet())
}