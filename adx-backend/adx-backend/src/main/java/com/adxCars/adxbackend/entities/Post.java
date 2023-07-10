package com.adxCars.adxbackend.entities;

import com.adxCars.adxbackend.model.UsersModel;

import javax.persistence.*;
import javax.transaction.Transactional;
import java.io.Serializable;

@Entity

@Table(name = "posts")
public class Post implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;


    @Column(name = "title", nullable = false, length=10000000)
    private String title;


    @Column(name = "description", nullable = false)
    private String description;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "users_model.id")
    private UsersModel user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "cars.id")
    private Car cars;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public UsersModel getUser() {
        return user;
    }

    public void setUser(UsersModel user) {
        this.user = user;
    }

    public Car getCars() {
        return cars;
    }

    public void setCars(Car cars) {
        this.cars = cars;
    }

    public Post(Integer id, String title, String description, UsersModel user, Car cars) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.user = user;
        this.cars = cars;
    }
    public Post(){}
}
