package com.adxCars.adxbackend.dtos;

public class CarDTO {

    private Integer id;
    private String imagine;
    private String brand_masina;
    private Integer an_fabricare;

    private Long kilometraj;

    private String combustibil;

    private double pret;

    private String isNew;


    public CarDTO(Integer id, String imagine ,String brand_masina,Integer an_fabricare, Long kilometraj, String combustibil, double pret, String isNew) {
        this.id = id;
        this.imagine = imagine;
        this.brand_masina = brand_masina;
        this.an_fabricare = an_fabricare;
        this.kilometraj = kilometraj;
        this.combustibil = combustibil;
        this.pret = pret;
        this.isNew = isNew;
    }
    public CarDTO(){

    }

    public CarDTO(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
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
