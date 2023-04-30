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
import CheckoutForm from "../Components/CheckoutForm/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import {stripePromise} from '../Services/stripeInstance'
import createPayment from "../helpers/APICalls/createPaymentIntent";

const CartContainer = () => {
  //Variables
  const stepsData = ["Cart", "Details", "Place Order"];

  // Redux Imports

  const { cart , total } = useSelector((state) => state.cart);

  // States
  const [activeComponent, setActiveComponent] = useState("Cart");

  // Methods
  const getActiveStep = (activeStep) => {
    setActiveComponent(activeStep);
  };

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
   if(total!==0 && cart.length!==0) {
    createPaymentIntent();
   }
  }, []);

  async function createPaymentIntent () {
    const result = await createPayment({total})
    setClientSecret(result?.clientSecret)
  }

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <JourneyStepper getActiveStep={getActiveStep} steps={stepsData} />
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          {activeComponent === "Cart" ? (
            cart.length !== 0 ? (
              cart?.map((cartItem) => {
                return (
                  <CartItem
                    key={cartItem?.id}
                    cartDetails={cartItem}
                    sideBar={false}
                  />
                );
              })
            ) : (
              <Typography variant="h3" textAlign={"center"}>
                Your Cart is Empty
              </Typography>
            )
          ) : activeComponent === "Place Order" ? (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          ) : (
            <AddressesInfo getActiveStep={getActiveStep} />
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
