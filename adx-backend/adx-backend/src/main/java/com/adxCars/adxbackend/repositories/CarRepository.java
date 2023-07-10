package com.adxCars.adxbackend.repositories;

import com.adxCars.adxbackend.entities.Car;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CarRepository extends JpaRepository<Car, Integer> {


}
