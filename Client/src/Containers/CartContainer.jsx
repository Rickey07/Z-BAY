import {
  Box,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  FormGroup,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../Components/Cart/CartItem";
import JourneyStepper from "../Components/Stepper/JourneyStepper";
import CartInformationBox from "../Components/Cart/CartInformationBox";
import AddressesInfo from "../Components/Address/AddressesInfo";

const CartContainer = () => {
  //Variables
  const stepsData = ["Cart", "Details", "Place Order"];

  // Redux Imports

  const { cart} = useSelector((state) => state.cart);

  // States
  const [activeComponent, setActiveComponent] = useState("Cart");

  // Methods
  const getActiveStep = (activeStep) => {
    setActiveComponent(activeStep);
  };

  return (
    <div>
      <JourneyStepper getActiveStep={getActiveStep} steps={stepsData} />
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          {activeComponent === "Cart" ? (
           cart && cart?.map((cartItem) => {
              return (
                <CartItem
                  key={cartItem?.id}
                  cartDetails={cartItem}
                  sideBar={false}
                />
              );
            })
          ) : (
            <AddressesInfo/>
          )}
        </Grid>
        <Grid item md={4} xs={12}>
          <CartInformationBox />
        </Grid>
      </Grid>
    </div>
  );
};

export default CartContainer;
