import React from "react";

export async function GetProducts() {
  const products = await fetch("https://fakestoreapi.com/products");
  return products.json();
}

export const oneProduct = async (id: string) => {
  const product = await fetch(`https://fakestoreapi.com/products/${id}`);
  return product.json();
};
