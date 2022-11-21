import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./style.css";

interface Isignin {
  email: string;
  password: string;
}

function SignIn() {
  const [signinDetails, setSigninDetails] = useState<Isignin>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const GotoHome = () => {
    navigate("/home");
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetch("http://localhost:3001/user/login", {
      method: "Post",
      body: JSON.stringify(signinDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        localStorage.setItem("authorization", data.authToken);
        GotoHome();
      })
      .catch((err) => {
        console.log(err);
      });

    event.preventDefault();
  };
  return (
    <>
      <div className="middle height-100">
        <div className="innersignin-box">
          <h1>Sign In</h1>
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <input
              type="email"
              className="text-input"
              name="email"
              id="email"
              placeholder="Enter Your Registered Email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSigninDetails({
                  ...signinDetails,
                  email: event.target.value,
                });
              }}
            />
            <br></br>
            <input
              type="password"
              className="text-input"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSigninDetails({
                  ...signinDetails,
                  password: event.target.value,
                });
              }}
            />
            <br />
            <input type="submit" className="text-input btn" value="Submit" />
          </form>
          <h4>
            New User? <Link to="/signup"> Register with us</Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default SignIn;
