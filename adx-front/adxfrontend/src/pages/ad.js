import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Ad() {
  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");
  const [isNew, setIsNew] = useState("");
  const [brand_masina, setBrand_masina] = useState("");
  const [an_fabricare, setAn_fabricare] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuel, setFuel] = useState("");
  const [pret, setPret] = useState("");

  async function postad(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/post/create", {
        title: title,
        description: description,
        isNew: isNew,
        brand_masina: brand_masina,
        an_fabricare: an_fabricare,
        mileage: mileage,
        fuel: fuel,
        pret: pret,
      });
      alert("Your ad has been posted!");
    } catch (err) {
      console.log(err.response);
      alert("An error occurred while posting the ad. Please try again later.");
    }

    console.log("Title:", title);
    console.log("Description", description);
    console.log("New/Used:", isNew);
    console.log("Car brand:", brand_masina);
    console.log("Year made:", an_fabricare);
    console.log("Mileage:", mileage);
    console.log("Fuel:", fuel);
    console.log("Pret:", pret);

    setTitle("");
    setDesciption("");
    setIsNew("");
    setBrand_masina("");
    setAn_fabricare("");
    setMileage("");
    setFuel("");
    setPret("");
  }

  return (
    <React.Fragment>
      <section className="vh-100 register ad">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Post your ad here:
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={postad}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa-solid fa-t"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="adtitle"
                              className="form-control"
                              value={title}
                              onChange={(event) => setTitle(event.target.value)}
                            />
                            <label className="form-label" htmlFor="adtitle">
                              Title
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i class="fa-solid fa-audio-description"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="adDescription"
                              className="form-control"
                              value={description}
                              onChange={(event) =>
                                setDesciption(event.target.value)
                              }
                            />
                            <label className="form-label" htmlFor="description">
                              Description
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-handshake"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="isNewUsed"
                              className="form-control"
                              value={isNew}
                              onChange={(event) => setIsNew(event.target.value)}
                            />
                            <label className="form-label" htmlFor="isNew">
                              New/Used
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-car"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="carBrand"
                              className="form-control"
                              value={brand_masina}
                              onChange={(event) =>
                                setBrand_masina(event.target.value)
                              }
                            />
                            <label className="form-label" htmlFor="carBrand">
                              Car brand
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-calendar-days"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="yearMade"
                              className="form-control"
                              value={an_fabricare}
                              onChange={(event) =>
                                setAn_fabricare(event.target.value)
                              }
                            />
                            <label className="form-label" htmlFor="yearMade">
                              Year made
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-gauge-high"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="mileage"
                              className="form-control"
                              value={mileage}
                              onChange={(event) =>
                                setMileage(event.target.value)
                              }
                            />
                            <label className="form-label" htmlFor="mileage">
                              Mileage
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-gas-pump"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="fuel"
                              className="form-control"
                              value={fuel}
                              onChange={(event) => setFuel(event.target.value)}
                            />
                            <label className="form-label" htmlFor="fuel">
                              Fuel
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-money-bill"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="price"
                              className="form-control"
                              value={pret}
                              onChange={(event) => setPret(event.target.value)}
                            />
                            <label className="form-label" htmlFor="price">
                              Price $
                            </label>
                          </div>
                        </div>

                        <div class="mb-3">
                          <label for="formFileMultiple" class="form-label">
                            Upload photos of your car here:
                          </label>
                          <input
                            class="form-control"
                            type="file"
                            id="formFileMultiple"
                            multiple
                          />
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-secondary btn-lg"
                          >
                            Post
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <Link to="/cars">
                        <img src="/assets/poze/adphoto.jpg" alt="" />
                      </Link>
                    </div>
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

export default Ad;
