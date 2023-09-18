package com.example.journey.autumn.repository;

import com.example.journey.autumn.model.GameRun;
import com.example.journey.autumn.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GameRunRepository extends JpaRepository<GameRun, Long> {
    List<GameRun> findAllByUser(User user);
}
