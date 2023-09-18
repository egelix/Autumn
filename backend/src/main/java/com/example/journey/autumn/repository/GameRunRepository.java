package com.example.journey.autumn.repository;

import com.example.journey.autumn.model.GameRun;
import org.springframework.data.jpa.repository.JpaRepository;


public interface GameRunRepository extends JpaRepository<GameRun, Long> {
}
