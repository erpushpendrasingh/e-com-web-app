import { Badge, Box, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Navbar = ({ cart }) => {
 const navigate = useNavigate();
 return (
  <Box
   sx={{
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    backgroundColor: "orange",
    position: "sticky",
    top: 0,
    zIndex: 1000,
   }}
  >
   <img
    src="/logo.png"
    alt="Logo"
    style={{
     height: "100%",
     objectFit: "contain",
     cursor: "pointer",
    }}
    onClick={() => navigate("/")}
   />
   <Box
    display={"flex"}
    alignItems={"center"}
    justifyContent={"center"}
    gap={"40px"}
   >
    <Typography sx={{ cursor: "pointer" }} onClick={() => navigate("/")}>
     Home
    </Typography>
    <Typography sx={{ cursor: "pointer" }} onClick={() => navigate("/cart")}>
     Cart
    </Typography>
    <Typography sx={{ cursor: "pointer" }} onClick={() => navigate("/about")}>
     About
    </Typography>
   </Box>
   <Box sx={{ display: "flex", alignItems: "center" }}>
    <Badge
     badgeContent={cart ? cart.length : 0}
     color="primary"
     sx={{ marginRight: "20px" }}
     onClick={() => navigate("/cart")}
    >
     <ShoppingCartIcon sx={{ fontSize: "40px" }} />
    </Badge>
    <AccountCircleIcon sx={{ fontSize: "40px" }} />
   </Box>
  </Box>
 );
};

export default Navbar;
