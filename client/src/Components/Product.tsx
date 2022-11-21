import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./style.css";
import StarRatings from "react-star-ratings";

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

function Product() {
  const [product, setProduct] = useState<Iproduct>({
    category: "",
    description: "",
    id: 0,
    image: "",
    price: 0,
    rating: {
      rate: 0,
      count: 0,
    },
    title: "",
  });
  const param = useParams();
  const id = param.id;
  console.log(id);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        setProduct(product);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="d-flex p-5 m-5">
        <div>
          <img
            src={product.image}
            width="500px"
            height="500px"
            alt={product.title}
          />
        </div>
        <div className="m-5">
          <div>
            <h1 className="mb-2">{product.title}</h1>
          </div>
          <div className="mb-2">{product.description}</div>
          <div className="mb-2">
            <h2>&#x20b9; {product.price}</h2>
          </div>
          <div>
            Rating {product.rating.rate} ({product.rating.count})
          </div>
          <br></br>
          <div>
            {" "}
            <StarRatings
              rating={product.rating.rate}
              starDimension="30px"
              starSpacing="5px"
            />
          </div>
          <div className="text-center">
            <button className="text-input btn">Add To Cart</button>
            <button className="text-input btn ml-3">Go To Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
