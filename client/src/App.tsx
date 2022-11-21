import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Allproducts from "./Components/Allproducts";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Product from "./Components/Product";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/allproducts" element={<Allproducts />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
