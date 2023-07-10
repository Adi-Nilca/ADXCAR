package com.adxCars.adxbackend.controllers;

import com.adxCars.adxbackend.dtos.CarDTO;
import com.adxCars.adxbackend.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/cars")
public class CarController {

    private final CarService carService;

    @Autowired
    public CarController(CarService carService){
        this.carService = carService;
    }

    @GetMapping()
    public ResponseEntity<List<CarDTO>> getCars() {
        List<CarDTO> dtos = carService.findCars();
        return new ResponseEntity<>(dtos, HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Integer> insertCar(@RequestBody CarDTO carDTO) {
        Integer carId= carService.insertCar(carDTO);
        return new ResponseEntity<>(carId, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Integer id){
        carService.deleteCar(id);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<CarDTO> getCarById(@PathVariable("id") Integer id) {
        CarDTO dto = carService.findCarById(id);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Integer> updateCar(@PathVariable("id") Integer carId, @RequestBody CarDTO carDTO) {
        Integer carID = carService.updateCar(carId, carDTO);
        return new ResponseEntity<>(carID, HttpStatus.OK);
    }
}
