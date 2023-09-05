package com.example.journey.autumn.runner

import com.example.journey.autumn.model.User
import com.example.journey.autumn.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component


@Component
class StartupRunner : CommandLineRunner {

    @Autowired
    lateinit var userRepository: UserRepository
    @Autowired
    lateinit var passwordEncoder: PasswordEncoder

    @Throws(Exception::class)
    override fun run(vararg args: String) {
        userRepository.deleteAll()

        val user1 = User()
        user1.username = "martin";
        user1.password = passwordEncoder.encode("12345");
        user1.authorities = setOf("USER", "ADMIN")
        userRepository.save(user1);

        val user2 = User()
        user2.username = "seb";
        user2.password = passwordEncoder.encode("12345");
        user2.authorities = setOf("USER")
        userRepository.save(user2);

        val user3 = User()
        user3.username = "kris";
        user3.password = passwordEncoder.encode("12345");
        user3.authorities = setOf("ADMIN")
        userRepository.save(user3);

        println("users created")
    }
}