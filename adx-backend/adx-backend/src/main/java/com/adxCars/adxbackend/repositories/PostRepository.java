package com.adxCars.adxbackend.repositories;

import com.adxCars.adxbackend.entities.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Integer> {
}
