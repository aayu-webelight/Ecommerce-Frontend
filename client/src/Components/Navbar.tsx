import React, { useEffect, useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";

interface IUser {
  name: string;
  email: string;
  phonenumber: string;
  password: string;
  address: string;
}

function Navbar() {
  const [loggedin, setloggedin] = useState("");
  

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authorization");
    if (token) {
      fetch("http://localhost:3001/user/find", {
        method: "GET",
        headers: {
          authorization: token as string,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result as IUser) {
            // window.location.reload();
            setloggedin(result.name);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
  const handlelogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/signin");
    localStorage.removeItem("authorization");
  };



  return (
    <>
      <div className="height-3 d-flex p-1">
        <div className="full-width">
          <h1>Shopping App</h1>
        </div>
        <div>
          <input
            className="text-input-search"
            type="search"
            placeholder="Search"
           
          />
        </div>
        <div className="full-width">
          <ul className="navbar-list">
            <Link to="/home">
              {" "}
              <li className="navbar-list-li m-1 mt-half">Home</li>
            </Link>
            <Link to="/allproducts">
              {" "}
              <li className="navbar-list-li m-1 mt-half"> All Products</li>
            </Link>

            {loggedin.length ? (
              <>
                <Link to="/SignIn">
                  {
                    <>
                      <button
                        className="m-1 navbar-btn mt-half"
                        onClick={(event) => handlelogout(event)}
                      >
                        Log Out {loggedin}
                      </button>
                    </>
                  }
                </Link>
              </>
            ) : (
              <>
                <Link to="/SignIn">
                  {
                    <>
                      <button className="m-1 navbar-btn mt-half">SignIn</button>
                    </>
                  }
                </Link>
                <Link to="/signup">
                  {
                    <>
                      <button className="m-1 navbar-btn mt-half">SignUp</button>
                    </>
                  }
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
