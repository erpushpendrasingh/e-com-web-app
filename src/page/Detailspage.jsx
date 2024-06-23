import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Rating from "@mui/material/Rating";

const Detailspage = ({ addToCart }) => {
 const { id } = useParams();
 const [product, setProduct] = useState({});
 const [quantity, setQuantity] = useState(1);

 useEffect(() => {
  const fetchProduct = async () => {
   try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProduct(response.data);
   } catch (error) {
    console.error("Error fetching product:", error);
   }
  };

  fetchProduct();
 }, [id]);

 const handleQuantityChange = (amount) => {
  setQuantity((prevQuantity) => Math.max(prevQuantity + amount, 1));
 };

 const handleAddToCart = () => {
  addToCart(product, quantity);
  setQuantity(1);
 };

 const { image, title, price, description, rating } = product;

 return (
  <Box>
   <Box sx={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>
    <Box sx={{ display: "flex" }}>
     <Box sx={{ flex: "1" }}>
      <img
       src={image}
       alt={title}
       style={{ width: "100%", maxWidth: "400px" }}
      />
     </Box>
     <Box sx={{ flex: "1", paddingLeft: "40px" }}>
      <Typography variant="h4" gutterBottom>
       {title}
      </Typography>
      <Typography variant="h6" gutterBottom>
       <CurrencyRupeeIcon /> {price}
      </Typography>
      <Typography variant="body1" paragraph>
       {description}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
       <Rating name="read-only" value={rating?.rate} readOnly />
       <Typography sx={{ marginLeft: "10px" }}>
        {rating?.count} reviews
       </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
       <IconButton onClick={() => handleQuantityChange(-1)}>
        <RemoveIcon />
       </IconButton>
       <Typography>{quantity}</Typography>
       <IconButton onClick={() => handleQuantityChange(1)}>
        <AddIcon />
       </IconButton>
       <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ marginLeft: "20px" }}
        onClick={handleAddToCart}
       >
        Add to Cart
       </Button>
      </Box>
     </Box>
    </Box>
   </Box>
  </Box>
 );
};

export default Detailspage;
