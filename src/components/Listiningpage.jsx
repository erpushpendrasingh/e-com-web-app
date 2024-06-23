import React, { useEffect, useState } from "react";
import ProductCard from "./Card";
import axios from "axios";

import { Box, Grid } from "@mui/material";
const Listiningpage = () => {
 const [products, setProducts] = useState([]);

 const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const data = await response.data;
  setProducts(data);
 };
 useEffect(() => {
  if (products?.length <= 0) {
   getProducts();
  }
 }, [products?.length]);
 console.log("products:", products);
 return (
  <Box sx={{ margin: "50px" }}>
   <Grid container spacing={3}>
    {products?.map((item, index) => (
     <Grid item xs={12} sm={6} md={4} key={index}>
      <ProductCard items={item} />
     </Grid>
    ))}
   </Grid>
  </Box>
 );
};

export default Listiningpage;
