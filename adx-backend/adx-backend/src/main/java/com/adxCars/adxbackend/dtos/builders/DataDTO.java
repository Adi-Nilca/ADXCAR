package com.adxCars.adxbackend.dtos.builders;

public class DataDTO {

   private String title;
    private  String description;
    private String isNew;
    private String brand_masina;
    private Integer an_fabricare;
   private Long mileage;
    private String fuel;

    private Double pret;

    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
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

    public String getIsNew() {
        return isNew;
    }

    public void setIsNew(String aNew) {
        isNew = aNew;
    }

    public String getCarBrand() {
        return brand_masina;
    }

    public void setBrand_masina(String carbrand_masina) {
        this.brand_masina = carbrand_masina;
    }

    public Integer getAn_fabricare() {
        return an_fabricare;
    }

    public void setAn_fabricare(Integer an_fabricare) {
        this.an_fabricare = an_fabricare;
    }

    public Long getMileage() {
        return mileage;
    }

    public void setMileage(Long mileage) {
        this.mileage = mileage;
    }

    public String getFuel() {
        return fuel;
    }

    public void setFuel(String fuel) {
        this.fuel = fuel;
    }

    public Double getPret() {
        return pret;
    }

    public void setPret(Double pret) {
        this.pret = pret;
    }

    public DataDTO(String title, String description, String isNew, String brand_masina, Integer an_fabricare, Long mileage, String fuel, Double pret) {
        this.title = title;
        this.description = description;
        this.isNew = isNew;
        this.brand_masina = brand_masina;
        this.an_fabricare = an_fabricare;
        this.mileage = mileage;
        this.fuel = fuel;
        this.pret = pret;
    }

    public DataDTO() {
    }

}
