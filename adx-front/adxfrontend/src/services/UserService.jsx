import axios from "axios";

const API_URL = "http://localhost:8080/users";

const getUser = () => {
  return axios.get(API_URL);
};

const register = (username, name, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    name,
    email,
    password,
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const UserService = {
  getUser,
  register,
  logout,
  getCurrentUser,
};

export default UserService;
