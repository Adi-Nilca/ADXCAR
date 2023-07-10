package com.adxCars.adxbackend.entities;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="cars")

public class Car implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    private Integer id;


    @Column(name = "imagine", nullable = true, length=10000000)
    private String imagine;


    @Column(name = "brand_masina", nullable = false)
    private String brand_masina;


    @Column(name = "an_fabricare", nullable = false)
    private Integer an_fabricare;


    @Column(name = "kilometraj", nullable = false)
    private Long kilometraj;


    @Column(name = "combustibil", nullable = false)
    private String combustibil;


    @Column(name = "pret", nullable = false)
    private double pret;

    @Column(name = "isNew", nullable = false)
    private String isNew;


    public Car(){

    }

    public Car(String imagine, String brand_masina, Integer an_fabricare, Long kilometraj, String combustibil, double pret, String isNew) {
        this.imagine = imagine;
        this.brand_masina = brand_masina;
        this.an_fabricare = an_fabricare;
        this.kilometraj = kilometraj;
        this.combustibil = combustibil;
        this.pret = pret;
        this.isNew = isNew;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImagine() {
        return imagine;
    }

    public void setImagine(String imagine) {
        this.imagine = imagine;
    }

    public String getBrand_masina() {
        return brand_masina;
    }

    public void setBrand_masina(String brand_masina) {
        this.brand_masina = brand_masina;
    }

    public Integer getAn_fabricare() {
        return an_fabricare;
    }

    public void setAn_fabricare(Integer an_fabricare) {
        this.an_fabricare = an_fabricare;
    }

    public Long getKilometraj() {
        return kilometraj;
    }

    public void setKilometraj(Long kilometraj) {
        this.kilometraj = kilometraj;
    }

    public String getCombustibil() {
        return combustibil;
    }

    public void setCombustibil(String combustibil) {
        this.combustibil = combustibil;
    }

    public double getPret() {
        return pret;
    }

    public void setPret(double pret) {
        this.pret = pret;
    }

    public String isNew() {
        return isNew;
    }

    public void setNew(String aNew) {
        isNew = aNew;
    }
}
