import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ items }) => {
 const { image, title, price, description, rating, id } = items;

 return (
  <Card sx={{ maxWidth: 345, margin: "auto" }}>
   <Link
    to={`/details/${id}`}
    style={{ textDecoration: "none", color: "inherit" }}
   >
    <CardMedia
     component="img"
     alt={title}
     image={image}
     sx={{ width: "100%", height: 200, objectFit: "contain" }}
    />
    <CardContent>
     <Typography variant="h6" gutterBottom>
      {title.length > 25 ? `${title.substring(0, 25)}...` : title}
     </Typography>
     <Typography variant="body2" color="text.secondary" noWrap>
      {description.length > 80
       ? `${description.substring(0, 80)}...`
       : description}
     </Typography>
    </CardContent>
    <CardActions>
     <Button size="small" sx={{ textTransform: "none" }}>
      <CurrencyRupeeIcon />
      {price.toFixed(2)}
     </Button>
     <Button size="small" sx={{ textTransform: "none" }}>
      <Rating name="read-only" value={rating?.rate} readOnly />
     </Button>
    </CardActions>
   </Link>
  </Card>
 );
};

export default ProductCard;
