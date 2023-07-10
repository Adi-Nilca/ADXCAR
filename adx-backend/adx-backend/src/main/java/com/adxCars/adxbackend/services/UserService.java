package com.adxCars.adxbackend.services;

import com.adxCars.adxbackend.dtos.LoginDTO;
import com.adxCars.adxbackend.response.LoginResponse;



public interface UserService {

    LoginResponse loginUser(LoginDTO loginDTO);
}
