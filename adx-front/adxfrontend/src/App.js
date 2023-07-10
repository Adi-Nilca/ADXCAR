import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";
import Cars from "./pages/cars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Register from "./pages/register";
import Ad from "./pages/ad";
import ListCarsComponent from "./components/ListCarsComponent";
import AdDescription from "./pages/adDescription";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/ad" element={<Ad />} />
          <Route path="/adDescription/:id" element={<AdDescription />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
