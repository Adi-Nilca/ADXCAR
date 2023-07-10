import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      <section id="title">
        <div class="container-fluid">
          {/* <!-- Navigation Bar --> */}

          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand">
                <Link to="/"> ADX Cars</Link>
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

          {/* <!-- Title -->
        <!-- ... --> */}
        </div>
      </section>

      <section id="testimonials">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="assets/poze/rsz_porsche_taycan.jpg"
                class="testimonial-image"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Welcome to ADX Cars!</h5>
                <p class="carousel-text">
                  Here we want to help you buy the best car that suits your
                  personallity.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="assets/poze/bmw_4_series.jpg"
                class="testimonial-image"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Discover the power of driving!</h5>
                <p class="carousel-text">
                  We offer various car brands, both new and second-hand.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="assets/poze/GLE.jpg"
                class="testimonial-image"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Here you can both buy and sell, cars!</h5>
                <p class="carousel-text">Become a member and start dealing.</p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* <!-- Exemplare --> */}
      <section id="explore">
        <h1 class="explore-head">Find your match</h1>
        <p class="explore-paragraph">
          Choosing a car that suits your style and preferences can be an
          exciting and daunting task. When it comes to picking a car that's
          right for me, I always go for something that's sleek, sporty and
          efficient. I'm a big fan of European cars and I love the design of
          cars from Germany and Italy. I also prioritize safety features and
          fuel economy, so I tend to lean towards hybrid or electric cars. A
          spacious interior with a comfortable ride is also a must for me since
          I often travel long distances. In the end, it all comes down to
          personal taste and practicality, but I'm confident that I'll find the
          perfect car that fits my needs and my style. We understand how
          exciting it is to find the car you've been dreaming of at a great
          price. At ADX Cars, we strive to provide you with just that. While our
          platform currently offers a limited range of options, we are
          continuously expanding and improving. We genuinely appreciate your
          support and use of our website. Rest assured, we are committed to
          creating a comprehensive car marketplace to help you find your desired
          vehicle at a competitive price.
        </p>
      </section>

      {/* <!-- Features --> */}
      <section id="features">
        <div class="row">
          <div class="feature-box col-lg-4">
            <i class="icon icon-check fa-sharp fa-solid fa-circle-check fa-3x"></i>
            <h3>Easy to use.</h3>
            <p>So easy to use, just follow some steps.</p>
          </div>

          <div class="feature-box col-lg-4">
            <i class="icon icon-ban fa-solid fa-ban fa-3x"></i>
            <h3>No scamms allowed.</h3>
            <p>All the cars from our website are verified by our admins.</p>
          </div>

          <div class="feature-box col-lg-4">
            <i class="icon icon-feedb fa-solid fa-comments fa-3x"></i>
            <h3>Give us a feedback.</h3>
            <p>Soon there will be a feedback section.</p>
          </div>
        </div>
      </section>

      <section id="footer">
        <p class="mt-5 mb-3 text-body-secondary project-year">
          © All rights reserved 2022-2023
        </p>
      </section>
    </React.Fragment>
  );
}

export default Home;
