import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/Cart/CartItem";
import JourneyStepper from "../Components/Stepper/JourneyStepper";
const CartContainer = () => {

  //Variables
  const stepsData = ["Cart", "Details", "Place Order"];

  // Redux Imports

  const {cart} = useSelector((state) => state.cart)

  // States
  const [activeComponent, setActiveComponent] = useState("Cart");

  // Methods
  const getActiveStep = (activeStep) => {
    setActiveComponent(activeStep);
  };

  return (
    <div>
      <JourneyStepper steps={stepsData} />
      <Grid container spacing={2}>
        <Grid item md={8}>
          {cart.map((cartItem) => {
            return <CartItem key={cartItem?.id} cartDetails={cartItem} sideBar={false}/>
          })}
        </Grid>
        <Grid item md={4}>
          <p>Hello</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartContainer;
