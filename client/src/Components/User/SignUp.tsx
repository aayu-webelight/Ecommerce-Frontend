import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";

interface Isignup {
  name: string;
  email: string;
  phonenumber: string;
  password: string;
  address: string;
}

function SignUp() {
  const [signupDetails, setSignupDetails] = useState<Isignup>({
    name: "",
    email: "",
    phonenumber: "",
    password: "",
    address: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    fetch("http://localhost:3001/user/add", {
      method: "Post",
      body: JSON.stringify(signupDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(signupDetails);
    event.preventDefault();
  };

  return (
    <>
      <div className="middle height-100">
        <div className="innersignin-box">
          <h1>Sign Up</h1>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              type="text"
              className="text-input"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSignupDetails({
                  ...signupDetails,
                  name: event.target.value,
                });
              }}
              required
            />
            <br />
            <input
              type="email"
              className="text-input"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSignupDetails({
                  ...signupDetails,
                  email: event.target.value,
                });
              }}
              required
            />
            <br></br>
            <input
              type="text"
              className="text-input"
              name="phonenumber"
              id="phonenumber"
              placeholder="Enter Your Phone Number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSignupDetails({
                  ...signupDetails,
                  phonenumber: event.target.value,
                });
              }}
              required
              maxLength={10}
              minLength={10}
            />
            <br />
            <input
              type="password"
              className="text-input"
              name="password"
              id="password"
              placeholder="Enter Your Password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSignupDetails({
                  ...signupDetails,
                  password: event.target.value,
                });
              }}
              required
            />
            <br />
            <input
              type="text"
              className="text-input"
              name="address"
              id="address"
              placeholder="Enter Your Address"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSignupDetails({
                  ...signupDetails,
                  address: event.target.value,
                });
              }}
              required
            />
            <br />
            <input type="submit" className="text-input btn" value="Submit" />
          </form>
          <h3>
            Already A User <Link to="/signin">Login</Link>{" "}
          </h3>
        </div>
      </div>
    </>
  );
}

export default SignUp;
