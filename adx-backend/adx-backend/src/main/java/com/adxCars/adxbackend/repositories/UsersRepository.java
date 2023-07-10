package com.adxCars.adxbackend.repositories;

import com.adxCars.adxbackend.model.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository

public interface UsersRepository extends JpaRepository<UsersModel, Long> {

    UsersModel findByUsername(String username);
    Optional<UsersModel> findOneByEmailAndPassword(String email, String password);
    UsersModel findByEmail(String email);

}
