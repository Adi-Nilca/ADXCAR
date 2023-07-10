package com.adxCars.adxbackend.services;

import com.adxCars.adxbackend.dtos.CarDTO;
import com.adxCars.adxbackend.dtos.builders.CarBuilder;
import com.adxCars.adxbackend.entities.Car;
import com.adxCars.adxbackend.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Service
public class CarService {
    private final CarRepository carRepository;

    @Autowired
    public CarService(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    public List<CarDTO> findCars() {
        List<Car> carsList = carRepository.findAll();
        return carsList.stream()
                .map(CarBuilder::toDTO)
                .collect(Collectors.toList());
    }

    public Integer insertCar(CarDTO carDTO) {
        Car car = CarBuilder.toEntity(carDTO);
        carRepository.save(car);
        return car.getId();
    }

    public void deleteCar(Integer id) {
        Car car = carRepository.findById(id).orElseThrow();
        carRepository.delete(car);
    }

    public CarDTO findCarById(Integer id) {
        Optional<Car> opt = carRepository.findById(id);
        if (!opt.isPresent()) {
            throw new Error("eroare");
        }
        return CarBuilder.toDTO(opt.get());
    }

    public Integer updateCar(Integer id, CarDTO carDTO) {
        Optional<Car> opt = carRepository.findById(id);
        if (!opt.isPresent()) {
            throw new Error("eroare");
        }
        Car car = opt.get();
        car.setBrand_masina(carDTO.getBrand_masina());
        car.setAn_fabricare(carDTO.getAn_fabricare());
        car.setKilometraj(carDTO.getKilometraj());
        car.setCombustibil(car.getCombustibil());
        car.setPret(carDTO.getPret());
        car.setNew(car.isNew());

        carRepository.save(car);

        return car.getId();

    }
}
