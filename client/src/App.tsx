import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Components/Home/Home";
import Allproducts from "./Components/Products/Allproducts";
import SignIn from "./Components/User/SignIn";
import SignUp from "./Components/User/SignUp";
import Product from "./Components/Products/Product";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
