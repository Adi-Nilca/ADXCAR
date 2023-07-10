import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function login(event) {
    event.preventDefault();

    try {
      await axios
        .post("http://localhost:8080/users/login", {
          email: email,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);
            if (res.data.message === "Email does not exist") {
              alert("Email does not exist");
            } else if (res.data.message === "Login Success") {
              navigate("/");
            } else {
              alert("Incorrect Email and Password");
            }
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (err) {
      alert(err);
    }

    setEmail("");
    setPassword("");
  }

  return (
    <React.Fragment>
      <div
        className="text-center log"
        data-new-gr-c-s-check-loaded="14.1107.0"
        data-gr-ext-installed=""
      >
        <main class="form-signin w-100 m-auto">
          <form>
            <Link to="/">
              <img
                class="mb-4"
                src="/assets/poze/RR.jpg"
                alt=""
                width="72"
                height="57"
              />
            </Link>

            <h1 class="h3 mb-3 fw-normal">Please log in</h1>

            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="name@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div>
              <Link to="/register">Don't have an account? Register here</Link>
            </div>

            <button
              class="w-100 btn btn-lg btn-secondary"
              type="submit"
              onClick={login}
            >
              Log in
            </button>
            <p class="mt-5 mb-3 text-body-secondary">
              © All rights reserved 2022-2023
            </p>
          </form>
        </main>
      </div>
    </React.Fragment>
  );
}

export default Login;
