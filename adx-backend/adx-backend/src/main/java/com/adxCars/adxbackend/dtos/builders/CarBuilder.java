package com.adxCars.adxbackend.dtos.builders;


import com.adxCars.adxbackend.dtos.CarDTO;
import com.adxCars.adxbackend.entities.Car;

public class CarBuilder {

    public CarBuilder(){

    }

    public static CarDTO toDTO(Car car){
        return new CarDTO(car.getId(), car.getImagine(), car.getBrand_masina(), car.getAn_fabricare(), car.getKilometraj() ,car.getCombustibil(), car.getPret(), car.isNew());
    }

    public static Car toEntity(CarDTO carDTO){
        return new Car(carDTO.getImagine(), carDTO.getBrand_masina(), carDTO.getAn_fabricare(), carDTO.getKilometraj(),carDTO.getCombustibil(), carDTO.getPret(), carDTO.isNew() );
    }

}

