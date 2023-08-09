package com.example.journey.autumn.runner

import com.example.journey.autumn.model.User
import com.example.journey.autumn.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component


@Component
class StartupRunner : CommandLineRunner {

    @Autowired
    lateinit var userRepository: UserRepository

    @Throws(Exception::class)
    override fun run(vararg args: String) {
        userRepository.deleteAll()
        userRepository.save(User(null, "test1", "pass1"))
        userRepository.save(User(null, "test2", "12345"))
        println("users created")
    }
}