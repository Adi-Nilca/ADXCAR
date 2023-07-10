package com.adxCars.adxbackend.controllers;

import com.adxCars.adxbackend.dtos.CarDTO;
import com.adxCars.adxbackend.dtos.builders.DataDTO;
import com.adxCars.adxbackend.entities.Car;
import com.adxCars.adxbackend.entities.Post;

import com.adxCars.adxbackend.repositories.CarRepository;
import com.adxCars.adxbackend.repositories.PostRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(value = "/post")
public class PostController {
    @Autowired
    private PostRepository postRepository;

    @PostMapping("/create")
    Post newPost(@RequestBody DataDTO newPost) {
        Post newDataPost = new Post();
        newDataPost.setTitle(newPost.getTitle());
        newDataPost.setDescription(newPost.getDescription());
        Car newCar = new Car();
        newCar.setBrand_masina(newPost.getCarBrand());
        newCar.setPret(newPost.getPret());
        newCar.setNew(newPost.getIsNew());
        newCar.setCombustibil(newPost.getFuel());
        newCar.setKilometraj(newPost.getMileage());
        newCar.setAn_fabricare(newPost.getAn_fabricare());


        Car car = carRepository.save(newCar);
        newDataPost.setCars(car);
        return postRepository.save(newDataPost);

    }

    @Autowired
    private CarRepository carRepository;


    @GetMapping()
    List<Post> getPost() {
        return postRepository.findAll();


    }

    @GetMapping(value = "/{id}")
    @ResponseBody
    public ResponseEntity<DataDTO> getPostById(@PathVariable("id") Integer id) {
        Post post = postRepository.findById(id).get();
        DataDTO dataDTO = new DataDTO();
        dataDTO.setAn_fabricare(post.getCars().getAn_fabricare());
        dataDTO.setDescription(post.getDescription());
        dataDTO.setFuel(post.getCars().getCombustibil());
        dataDTO.setPret(post.getCars().getPret());
        dataDTO.setMileage(post.getCars().getKilometraj());
        dataDTO.setBrand_masina(post.getCars().getBrand_masina());
        dataDTO.setIsNew(post.getCars().isNew());
        dataDTO.setTitle(post.getTitle());

        return new ResponseEntity<>(dataDTO, HttpStatus.OK);


    }
}