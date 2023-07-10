import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
import { getByTitle } from "@testing-library/react";
function AdDescription() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings();
  }, []);
  let { id } = useParams();
  async function fetchListings() {
    try {
      const response = await axios.get(`http://localhost:8080/post/${id}`);
      setListings(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.response);
    }
  }
  const handlePost = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const imageURL = event.target.imageURL.value;
    const description = event.target.description;
    const brand_masina = event.target.brand_masina;
    const an_fabricare = event.target.an_fabricare;
    const mileage = event.target.mileage;
    const fuel = event.target.fuel;
    const pret = event.target.pret;

    const newListing = {
      title,
      imageURL,
      description,
      brand_masina,
      an_fabricare,
      mileage,
      fuel,
      pret,
    };
    setListings([...listings, newListing]);

    event.target.title.value = "";
    event.target.imageURL.value = "";
    event.target.description.value = "";
    event.target.brand_masina.value = "";
    event.target.an_fabricarel.value = "";
    event.target.mileage.value = "";
    event.target.fuel.value = "";
    event.target.pret.value = "";
  };
  return (
    <React.Fragment>
      <section className="adDescript">
        <div className="container py-5">
          <div className="row justify-content-center expand">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card text-black">
                <img
                  src="https://images.wallpaperscraft.com/image/single/car_gray_wet_147750_3840x2160.jpg"
                  className="card-img-top"
                  alt="Car phoyo"
                />
                <div className="card-body">
                  <div className="text-center">
                    <h5 className="card-title">{listings.title}</h5>
                    <p className="text-muted mb-4">{listings.description}</p>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between">
                      <span>Brand</span>
                      <span>{listings.carBrand}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Year Made</span>
                      <span>{listings.an_fabricare}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Milleage</span>
                      <span>{listings.mileage}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Fuel</span>
                      <span>{listings.fuel}</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Price$</span>
                      <span>{listings.pret}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <Link to="/cars">
                      <button type="button" class="btn btn-secondary">
                        Back to Cars
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default AdDescription;
