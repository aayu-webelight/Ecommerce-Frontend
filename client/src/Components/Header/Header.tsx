import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./style.css";
import { HeaderFunction } from "./HeaderFunction";

function Header() {
  const [loggedin, setloggedin] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("authorization") as string;

  useEffect(() => {
    const getName = async (token: string) => {
      const user = await HeaderFunction(token);
      setloggedin(user.name as string);
      console.log(user.name);
    };
    getName(token);
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
            <Link to="/">
              {" "}
              <li className="navbar-list-li m-1 mt-half">Home</li>
            </Link>
            <Link to="/allproducts">
              {" "}
              <li className="navbar-list-li m-1 mt-half"> All Products</li>
            </Link>

            {loggedin ? (
              <>
                <Link to="/SignIn">
                  {
                    <button
                      className="m-1 navbar-btn mt-half"
                      onClick={(event) => handlelogout(event)}
                    >
                      Log Out {loggedin}
                    </button>
                  }
                </Link>
              </>
            ) : (
              <>
                <Link to="/SignIn">
                  {<button className="m-1 navbar-btn mt-half">SignIn</button>}
                </Link>
                <Link to="/signup">
                  {<button className="m-1 navbar-btn mt-half">SignUp</button>}
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
