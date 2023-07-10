import axios from "axios";

const API_URL = "http://localhost:8080/cars";

const getCar = () => {
  return axios.get(API_URL);
};

const deleteCar = (carID) => {
  return axios.delete(API_URL + "/" + carID);
};

const createCar = (car) => {
  return axios.post(API_URL, car);
};

const updateCar = (car, carID) => {
  return axios.put(API_URL + "/" + carID, car);
};

const getCarById = (carID) => {
  return axios.get(API_URL + "/" + carID);
};

const CarService = {
  getCar,
  getCarById,
  deleteCar,
  createCar,
  updateCar,
};

export default CarService;
