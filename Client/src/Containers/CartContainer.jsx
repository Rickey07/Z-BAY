import { Box, Divider, Grid, Paper, TextField, Typography ,FormGroup, FormControl,Input,InputLabel} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/Cart/CartItem";
import PrimaryButton from '../Components/Buttons/PrimaryButton'
import JourneyStepper from "../Components/Stepper/JourneyStepper";
const CartContainer = () => {

  //Variables
  const stepsData = ["Cart", "Details", "Place Order"];

  // Redux Imports

  const {cart,total} = useSelector((state) => state.cart)

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
          {/* {cart.map((cartItem) => {
            return <CartItem key={cartItem?.id} cartDetails={cartItem} sideBar={false}/>
          })} */}
          <Paper component={"div"} elevation={2} sx={{p:3}}>
              <Box component={"div"}>
                <Typography component={"span"} variant={"span"}>Shipping Address</Typography>
                <Box component={"div"} display={"flex"} marginTop={"15px"} flexDirection={"column"} gap={"15px"}>
                  <Box component={"div"} display={"flex"} gap={"20px"}>
                  <TextField variant="outlined" label={"FullName"}  size="small" fullWidth/>
                  <TextField variant="outlined" label={"Email Address"}  size="small" fullWidth/>
                  </Box>
                  <Box component={"div"} display={"flex"} gap={"20px"}>
                  <TextField variant="outlined" label={"Phone Number"}  size="small" fullWidth/>
                  <TextField variant="outlined" label={"Company"} size="small" fullWidth/>
                  </Box>
                  <Box component={"div"} display={"flex"} gap={"20px"}>
                  <TextField variant="outlined" label={"Zip Code"}  size="small" fullWidth/>
                  <TextField variant="outlined" label={"Country"}  size="small" fullWidth/>
                  </Box>
                  <Box component={"div"} display={"flex"} gap={"20px"}>
                  <TextField variant="outlined" label={"Address 1"}  size="small" fullWidth/>
                  <TextField variant="outlined" label={"Address 2"}  size="small" fullWidth/>
                  </Box>
                </Box>
              </Box>
              <Box display={"flex"} gap={"20px"} marginTop={"10px"}>
              <PrimaryButton variant={"outlined"} color={"primary"} fullWidth={true} text={"Back To Cart"}/>
              <PrimaryButton variant={"contained"} color={"primary"} fullWidth={true} text={"Proceed To Payment"}/>
              </Box>
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper component={"div"} elevation={2} sx={{p:3}}>
          <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
                <Typography component={"span"}>SubTotal</Typography>
                <Typography component={"span"}>₹{total}</Typography>
              </Box>
              <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
                <Typography component={"span"}>Shipping</Typography>
                <Typography component={"span"}>₹0</Typography>
              </Box>
              <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
                <Typography component={"span"}>Tax</Typography>
                <Typography component={"span"}>₹0</Typography>
              </Box>
              <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
                <Typography component={"span"}>Discount</Typography>
                <Typography component={"span"}>₹0</Typography>
              </Box>
              <Divider/>
              <Typography variant="p" component={"p"} textAlign={"right"}>{total}</Typography>
              <Box>
              <TextField variant="outlined" label={"Voucher"} sx={{mt:4,mb:2}} size="small" fullWidth/>
              <PrimaryButton variant={"outlined"} color={"primary"} fullWidth={true} text={"Apply Voucher"} />
              </Box>
              {/* <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
                <Typography component={"span"}>Total</Typography>
                <Typography component={"span"}>₹{total}</Typography>
              </Box>
              <Divider sx={{mt:2}}/>
              <TextField variant="outlined" label={"Voucher"} sx={{mt:4,mb:2}} size="small" fullWidth/>
              <PrimaryButton variant={"outlined"} color={"primary"} fullWidth={true} text={"Apply Voucher"} /> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartContainer;
