import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "../components/Navbar";
import Detailspage from "./Detailspage";
import Cartpage from "./Cartpage";
import { Box } from "@mui/material";

const Mainroutes = ({ cart, addToCart, updateCart, removeItem }) => {
 return (
  <Box>
   <Navbar cart={cart} />
   <Routes>
    <Route path="/" element={<Homepage />} />
    <Route
     path="/details/:id"
     element={<Detailspage addToCart={addToCart} />}
    />
    <Route
     path="/cart"
     element={
      <Cartpage cart={cart} updateCart={updateCart} removeItem={removeItem} />
     }
    />
   </Routes>
  </Box>
 );
};

export default Mainroutes;
