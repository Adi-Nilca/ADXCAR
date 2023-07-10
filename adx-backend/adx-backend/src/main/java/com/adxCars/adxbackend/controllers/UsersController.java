package com.adxCars.adxbackend.controllers;

import com.adxCars.adxbackend.dtos.LoginDTO;
import com.adxCars.adxbackend.impl.UserIMPL;
import com.adxCars.adxbackend.model.UsersModel;
import com.adxCars.adxbackend.repositories.UsersRepository;
import com.adxCars.adxbackend.response.LoginResponse;
import com.adxCars.adxbackend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/users")
public class UsersController {
    @Autowired
    private UsersRepository usersRepository;

    @Autowired
    private UserIMPL userIMPL;

    @Autowired
    private PasswordEncoder passwordEncoder;
    @PostMapping("/signup")
    UsersModel newUserModel(@RequestBody UsersModel newUsersModel){

        newUsersModel.setPassword(passwordEncoder.encode(newUsersModel.getPassword()));
        return usersRepository.save(newUsersModel);
    }

    @GetMapping()
    List<UsersModel> getAllUsers(){
        return usersRepository.findAll();

    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDTO loginDTO){
        LoginResponse loginResponse = userIMPL.loginUser(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }



}