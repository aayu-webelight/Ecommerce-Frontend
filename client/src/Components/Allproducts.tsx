import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./style.css";

interface Irating {
  rate: number;
  count: number;
}

interface Iproduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Irating;
  title: string;
}

function Allproducts() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        localStorage.setItem("allproducts",JSON.stringify(json))
        setproducts(json)
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(products);

  return (
    <>
      <Navbar />
      {/* <input type="search" className="text-input-search" /> */}
      <div className="d-grid">
         {products.map((product: Iproduct, key: number) => {
          return (
            <>
              <div className="border" key={product.id.toString()}>
                <img
                  src={product.image}
                  alt={product.title}
                  height="250px"
                  width="200px"
                />
                <div>
                  <h5>{product.title}</h5>
                  <p>&#x20b9; {product.price}</p>
                  <Link to={`/products/${product.id}`}>
                    <button className="text-input btn">View Details</button>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
    // <Navbar/>
  );
}

export default Allproducts;
