import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Cars() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings();
  }, []);

  async function fetchListings() {
    try {
      const response = await axios.get("http://localhost:8080/post");
      setListings(response.data);
    } catch (err) {
      console.log(err.response);
    }
  }

  const handlePost = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const imageURL = event.target.imageURL.value;
    const description = event.target.description;

    const newListing = { title, imageURL, description };
    setListings([...listings, newListing]);

    event.target.title.value = "";
    event.target.imageURL.value = "";
    event.target.description.value = "";
  };
  const renderListings = () => {
    const rows = [];
    let row = [];

    listings.forEach((listing, index) => {
      row.push(
        <div className="col-md-4 mb-4" key={index}>
          <Link to={`/adDescription/${listing.id}`}>
            <div
              className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3"
              key={index}
            >
              <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <Link to={`/adDescription/${listing.id}`}>
                  <div className="my-3 p-3">
                    <h2 className="display-5">{listing.title}</h2>
                    <p className="lead"></p>
                  </div>
                  <div
                    className="bg-body shadow-sm mx-auto sellBox"
                    style={{ backgroundImage: `url(${listing.imageURL})` }}
                  ></div>
                </Link>
              </div>
            </div>
          </Link>
        </div>
      );

      // Verifică dacă a fost adăugat un număr maxim de chenare pe rând
      if ((index + 1) % 3 === 0) {
        rows.push(
          <div className="row" key={index}>
            {row}
          </div>
        );
        row = [];
      }
    });

    // Adaugă rândul final dacă este necesar
    if (row.length > 0) {
      rows.push(
        <div className="row" key={listings.length}>
          {row}
        </div>
      );
    }

    return rows;
  };

  return (
    <React.Fragment>
      <section id="title">
        <div class="container-fluid">
          {/* <!-- Navigation Bar --> */}

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand">
                <Link to="/">ADX Cars</Link>
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page">
                      <Link to="/">Home</Link>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link">
                      <Link to="/cars">Cars</Link>
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Account
                    </a>
                    <ul class="dropdown-menu">
                      <li></li>
                      <li>
                        <a class="dropdown-item">
                          <Link to="/login">Log In</Link>
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item">
                          <Link to="/">Log Out</Link>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>

      {/* <!-- Car collection --> */}

      <section id="collection">
        <div className="text-adaugare-anunt">
          Feel free to post your advertisment here :{" "}
          <Link to="/ad">
            <button type="button" class="btn btn-outline-light">
              + Sell Now
            </button>
          </Link>
        </div>

        {renderListings()}
      </section>
    </React.Fragment>
  );
}

export default Cars;
