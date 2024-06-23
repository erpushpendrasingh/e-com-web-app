import React, { useEffect, useState } from "react";
import Mainroutes from "./page/Mainroutes";

const App = () => {
 const [cart, setCart] = useState(() => {
  const localData = localStorage.getItem("cart");
  return localData ? JSON.parse(localData) : [];
 });
 useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
 }, [cart]);
 const addToCart = (item, quantity) => {
  const existing = cart.find((cartItem) => cartItem.id === item.id);
  if (existing) {
   setCart(
    cart.map((cartItem) =>
     cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity + quantity }
      : cartItem
    )
   );
  } else {
   setCart([...cart, { ...item, quantity }]);
  }
 };

 const updateCart = (id, quantity) => {
  const newCart = cart
   .map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + quantity } : item
   )
   .filter((item) => item.quantity > 0);
  setCart(newCart);
 };

 console.log("cart:", cart);
 const removeItem = (id) => {
  const newCart = cart.filter((item) => item.id !== id);
  setCart(newCart);
 };
 return (
  <React.Fragment>
   <Mainroutes
    cart={cart}
    addToCart={addToCart}
    updateCart={updateCart}
    removeItem={removeItem}
   />
  </React.Fragment>
 );
};

export default App;
