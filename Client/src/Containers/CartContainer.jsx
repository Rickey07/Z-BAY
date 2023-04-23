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
import { useSelector } from "react-redux";
import { useAuthUser } from "react-auth-kit";
import CartItem from "../Components/Cart/CartItem";
import AddressCard from "../Components/Address/AddressCard";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import JourneyStepper from "../Components/Stepper/JourneyStepper";
import NewAddressForm from "../Components/Address/NewAddressForm";
import getAllAddress from "../helpers/APICalls/getAllAddress";
const CartContainer = () => {
  //Variables
  const stepsData = ["Cart", "Details", "Place Order"];

  // Redux Imports

  const { cart, total } = useSelector((state) => state.cart);
  // States
  const [activeComponent, setActiveComponent] = useState("Cart");
  const [isNewAddressFormVisible, setIsNewAddressFormVisible] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const [currentAddressFields, setCurrentAddressFields] = useState({
    fullName: "",
    email: "",
    addressType: "",
    addressLine1: "",
    contactNo: "",
    addressLine2: "",
    country: "",
    city: "",
    zipcode: "",
    landmark: "",
  });
  const auth = useAuthUser();
  const { _id } = auth();

  // Effects

  useEffect(() => {
    getAddresses();
  }, []);

  // Methods
  const getActiveStep = (activeStep) => {
    setActiveComponent(activeStep);
  };

  const disableAddressForm = () => {
    setIsNewAddressFormVisible(false);
  };

  const enableAddressForm = () => {
    setIsNewAddressFormVisible(true);
  };

  const changeSelectedId = (id) => {
    setSelectedId(id);
  };

  const handleAddressEdit = (id) => {
    if (!isNewAddressFormVisible) {
      setIsNewAddressFormVisible(true);
    }
    const clickedAddress = addresses.find((address) => address?._id === id);
    setCurrentAddressFields({ ...clickedAddress });
  };

  async function getAddresses() {
    try {
      const result = await getAllAddress(_id);
      if (result?.success) {
        setAddresses(result?.result);
      } else {
        alert("Some Error Occured");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <JourneyStepper steps={stepsData} />
      <Grid container spacing={2}>
        <Grid item md={8}>
          {/* {cart.map((cartItem) => {
            return <CartItem key={cartItem?.id} cartDetails={cartItem} sideBar={false}/>
          })} */}
          <Paper component={"div"} elevation={2} sx={{ p: 3 }}>
            <Box
              component={"div"}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography component={"span"} variant={"span"}>
                Shipping Address
              </Typography>
              <PrimaryButton
                variant={"outlined"}
                handleClick={enableAddressForm}
                text={"Add New Address"}
              />
            </Box>
            <Box component={"div"}>
              <Typography component={"span"} variant={"span"}>
                Select From Below Addresses or Add a new Address
              </Typography>
              <Box component={"div"} sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  {addresses &&
                    addresses?.map((address) => {
                      return (
                        <Grid key={address._id} item>
                          <AddressCard
                            key={address._id}
                            {...address}
                            selected={selectedId}
                            handleSelect={changeSelectedId}
                            handleEdit={handleAddressEdit}
                          />
                        </Grid>
                      );
                    })}
                </Grid>
              </Box>
            </Box>
            {/* <Box display={"flex"} gap={"20px"} marginTop={"10px"}>
              <PrimaryButton variant={"outlined"} color={"primary"} fullWidth={true} text={"Back To Cart"}/>
              <PrimaryButton variant={"contained"} color={"primary"} fullWidth={true} text={"Proceed To Payment"}/>
              </Box> */}

            {isNewAddressFormVisible && (
              // Providing Key so that component will mount everytime the selected Id will change and it will be populated with newFormValues
              <NewAddressForm
                key={selectedId}
                handleCancel={disableAddressForm}
                handleEdit={handleAddressEdit}
                formValues={currentAddressFields}
              />
            )}
          </Paper>
        </Grid>
        <Grid item md={4}>
          <Paper component={"div"} elevation={2} sx={{ p: 3 }}>
            <Box
              component={"div"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography component={"span"}>SubTotal</Typography>
              <Typography component={"span"}>₹{total}</Typography>
            </Box>
            <Box
              component={"div"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography component={"span"}>Shipping</Typography>
              <Typography component={"span"}>₹0</Typography>
            </Box>
            <Box
              component={"div"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography component={"span"}>Tax</Typography>
              <Typography component={"span"}>₹0</Typography>
            </Box>
            <Box
              component={"div"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography component={"span"}>Discount</Typography>
              <Typography component={"span"}>₹0</Typography>
            </Box>
            <Divider />
            <Typography variant="p" component={"p"} textAlign={"right"}>
              {total}
            </Typography>
            <Box>
              <TextField
                variant="outlined"
                label={"Voucher"}
                sx={{ mt: 4, mb: 2 }}
                size="small"
                fullWidth
              />
              <PrimaryButton
                variant={"outlined"}
                color={"primary"}
                fullWidth={true}
                text={"Apply Voucher"}
              />
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
