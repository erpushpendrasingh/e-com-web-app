import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const Cartpage = ({ cart, updateCart, removeItem }) => {
 const getTotalPrice = () => {
  return cart
   .reduce((total, item) => total + item.price * item.quantity, 0)
   .toFixed(2);
 };

 return (
  <Box sx={{ padding: "20px" }}>
   <Typography variant="h4" gutterBottom>
    Cart
   </Typography>
   {cart.length === 0 ? (
    <Typography>Your cart is empty</Typography>
   ) : (
    cart.map((item) => (
     <Box
      key={item.id}
      sx={{
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
       marginBottom: "10px",
      }}
     >
      <Box sx={{ display: "flex", alignItems: "center" }}>
       <img
        src={item.image}
        alt={item.title}
        style={{ width: "100px", marginRight: "20px" }}
       />
       <Typography>{item.title}</Typography>
      </Box>
      <Typography>₹{item.price}</Typography>
      <Box>
       <Button
        onClick={() => updateCart(item.id, -1)}
        disabled={item.quantity === 1}
       >
        -
       </Button>
       <Typography component="span" sx={{ margin: "0 10px" }}>
        {item.quantity}
       </Typography>
       <Button onClick={() => updateCart(item.id, 1)}>+</Button>
      </Box>
      <IconButton onClick={() => removeItem(item.id)}>
       <DeleteIcon />
      </IconButton>
     </Box>
    ))
   )}
   {cart.length > 0 && (
    <Typography variant="h5" sx={{ marginTop: "20px" }}>
     Total: ₹{getTotalPrice()}
    </Typography>
   )}
  </Box>
 );
};

export default Cartpage;
