import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { GetProducts } from "./ProductFunction";
import Header from "../Header/Header";

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
    const productsfn = async () => {
      const products = await GetProducts();

      setproducts(products);
    };
    productsfn();
  }, []);

  return (
    <>
      {/* <input type="search" className="text-input-search" /> */}
      <Header />
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
