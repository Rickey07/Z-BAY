import React from "react";
import { Paper, Typography, Box, Grid } from "@mui/material";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useState, useEffect } from "react";
import deleteAddress from "../../helpers/APICalls/deleteAddress";
import getAllAddress from "../../helpers/APICalls/getAllAddress";
import AddressCard from "./AddressCard";
import NewAddressForm from "./NewAddressForm";
import { useAuthUser } from "react-auth-kit";
import { useSelector } from "react-redux";

const AddressesInfo = ({ getActiveStep }) => {
  // Redux Imports
  const { cart } = useSelector((state) => state.cart);
  // States
  const [isNewAddressFormVisible, setIsNewAddressFormVisible] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  const initialFormValues = {
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
  };
  const [currentAddressFields, setCurrentAddressFields] =
    useState(initialFormValues);
  const [addressUpdated, setAddressUpdated] = useState(false);
  const auth = useAuthUser();
  const { _id } = auth();

  // Variables
  const proceedToPayemntButtonDisable = cart.length === 0;

  // Effects
  useEffect(() => {
    getAddresses();
  }, [addressUpdated]);

  // Methods
  const disableAddressForm = () => {
    setIsNewAddressFormVisible(false);
  };

  const enableAddressForm = () => {
    setIsNewAddressFormVisible(true);
    setCurrentAddressFields({ ...currentAddressFields, ...initialFormValues });
  };

  const changeSelectedId = (id) => {
    setSelectedId(id);
  };

  const fireAPIonAddressActions = () => {
    setAddressUpdated(!addressUpdated);
  };

  const handleAddressEdit = (id) => {
    if (!isNewAddressFormVisible) {
      setIsNewAddressFormVisible(true);
    }
    const clickedAddress = addresses.find((address) => address?._id === id);
    setCurrentAddressFields({ ...clickedAddress });
  };

  const handleAddressDelete = async (id) => {
    try {
      const result = await deleteAddress({ id: id });
      if (result?.success) {
        fireAPIonAddressActions();
      }
    } catch (error) {
      alert(error);
    }
  };

  const handlePayment = () => {
    getActiveStep("Place Order");
  };

  // API Calls

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
                      handleDelete={handleAddressDelete}
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Box>
      {!isNewAddressFormVisible && (
        <Box display={"flex"} gap={"20px"} marginTop={"10px"}>
          <PrimaryButton
            variant={"outlined"}
            color={"primary"}
            fullWidth={true}
            text={"Back To Cart"}
          />
          <PrimaryButton
            variant={"contained"}
            color={"primary"}
            fullWidth={true}
            disabled={proceedToPayemntButtonDisable || selectedId === ""}
            text={"Proceed To Payment"}
            handleClick={handlePayment}
          />
        </Box>
      )}

      {isNewAddressFormVisible && (
        // Providing Key so that component will mount everytime the selected Id will change and it will be populated with newFormValues
        <NewAddressForm
          key={currentAddressFields?.addressType}
          handleCancel={disableAddressForm}
          handleEdit={handleAddressEdit}
          forUpdate={currentAddressFields?.addressType === "" ? false : true}
          formValues={currentAddressFields}
          currentSelectedAddress={selectedId}
          fireAPIonAddressActions={fireAPIonAddressActions}
        />
      )}
    </Paper>
  );
};

export default AddressesInfo;
