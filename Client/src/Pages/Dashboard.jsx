import {
  LocationCity,
  People,
  ShoppingBag,
  MenuOpen,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import View from "../Components/Profile/View";
import OrderWrapper from "../Components/Orders/OrderWrapper";
import { useState } from "react";
import AddressList from "../Components/Address/AddressList";
import { useAuthUser } from "react-auth-kit";
import getUserDetails from "../helpers/APICalls/getUserDetails";
import MainLoader from "../Components/Loaders/MainLoader";
import OrderSummary from "../Components/Orders/OrderSummary";

const Dashboard = () => {
 

  // Router Import
  const location = useLocation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

   // Default Configurations
   const Links = [
    { text: "Orders", icon: <ShoppingBag sx={{color:theme.palette.secondary.dark}}/>, url: "orders" },
    { text: "Profile Info", icon: <People sx={{color:theme.palette.secondary.dark}}/>, url: "profile" },
    { text: "Addresses", icon: <LocationCity sx={{color:theme.palette.secondary.dark}}/>, url: "address" },
  ];

  const sectionHeading = location.pathname.includes("orders")
    ? "My Orders"
    : location.pathname.includes("profile")
    ? "My Profile"
    : "My Addresses";

  // Redux Imports
  const refreshUser = useSelector((state) => state.global.refereshUserDetails);

  // States
  const [isVisible, setIsVisible] = useState(false);
  const [newAddressChange, setNewAddressChange] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const [userDetailsData, setUserDetailsData] = useState({
    purchases: "",
    firstname: "",
    lastname: "",
    email: "",
    addresses: "",
  });
  const { purchases, firstname, lastname, email } = userDetailsData;
  const userInfo = { orders: purchases.length, firstname, lastname, email };
  const auth = useAuthUser();
  const { _id } = auth();

  // Methods

  const handleOpenModal = () => {
    setIsVisible(true);
    if (sectionHeading.includes("Addresses")) {
      setNewAddressChange(!newAddressChange);
    }
  };

  const openMobileDrawer = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenuDrawer = () => {
    setMobileMenuOpen(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const getUserData = async () => {
    try {
      setLoader(true);
      const result = await getUserDetails(_id);
      if (result?.statusCode === 200) {
        setUserDetailsData(result?.user);
      } else {
        toast.error("Some unknown Error Occured");
      }
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, [refreshUser]);

  return (
    <div>
      <MainLoader visible={loader} />
      {mobile && mobileMenuOpen && (
        <Drawer
          anchor="left"
          open={mobileMenuOpen}
          onClose={closeMobileMenuDrawer}
        >
          <Box component={"div"} sx={{ pl: 4, marginTop: 10, pr: 4 }}>
            <Paper component={"div"} elevation={0}>
              <Typography component={"span"} variant={"span"}>
                Dashboard
              </Typography>
              <Box component={"div"}>
                {Links?.map((linkInstance) => {
                  return (
                    <Link
                      to={"/dashboard/" + linkInstance.url}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        textDecoration: "none",
                        gap: "10px",
                        marginTop: "15px",
                      }}
                      key={linkInstance.url}
                      color={
                        location.pathname === "/dashboard/" + linkInstance.url
                          ? "primary"
                          : "#101010"
                      }
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                          justifyContent: "center",
                        }}
                        color={
                          location.pathname === "/dashboard/" + linkInstance.url
                            ? `${theme.palette.primary.main}`
                            : "#101010"
                        }
                      >
                        {linkInstance.icon}
                        <Typography component={"span"}>
                          {linkInstance.text}
                        </Typography>
                      </Box>
                    </Link>
                  );
                })}
              </Box>
            </Paper>
          </Box>
        </Drawer> 
      )}
      <Grid container spacing={5}>
        {!mobile && (
          <Grid item md={2}>
            <Box component={"div"}>
              <Paper component={"div"} sx={{ p: 3 }} elevation={1}>
                <Typography component={"span"} variant={"span"} sx={{color:theme?.palette?.secondary?.contrastText}}>
                  Dashboard
                </Typography>
                <Box component={"div"}>
                  {Links?.map((linkInstance) => {
                    return (
                      <Link
                        to={"/dashboard/" + linkInstance.url}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          textDecoration: "none",
                          marginTop: "15px",
                        }}
                        key={linkInstance.url}
                        color={
                          location.pathname === "/dashboard/" + linkInstance.url
                            ? "primary"
                            : "#101010"
                        }
                      >
                        <Box
                          sx={{
                            display: "flex",
                            gap: "5px",
                            justifyContent: "center",
                          }}
                          color={
                            location.pathname ===
                            "/dashboard/" + linkInstance.url
                              ? `${theme.palette.primary.main}`
                              : "#101010"
                          }
                        >
                          {linkInstance.icon}
                          <Typography component={"span"}>
                            {linkInstance.text}
                          </Typography>
                        </Box>
                      </Link>
                    );
                  })}
                </Box>
              </Paper>
            </Box>
          </Grid>
        )}

        <Grid item md={9} xs={12}>
          <Box
            component={"div"}
            display={"flex"}
            justifyContent={"space-between"}
            flexDirection={mobile ? "column" : "row"}
            marginBottom={"16px"}
            position={"relative"}
          >
            <Typography component={"h4"} variant={"h4"}>
              {sectionHeading}
            </Typography>
            {mobile && (
              <MenuOpen
                onClick={openMobileDrawer}
                sx={{ position: "absolute", right: "0px", top: "5px" }}
              />
            )}
            {sectionHeading === "My Profile" ? (
              <PrimaryButton
                text={"Edit Profile"}
                handleClick={handleOpenModal}
              />
            ) : sectionHeading === "My Addresses" ? (
              <PrimaryButton
                text={"New Address"}
                handleClick={handleOpenModal}
              />
            ) : (
              ""
            )}
          </Box>
          <Routes>
            <Route
              path="/orders"
              element={<OrderWrapper purchases={purchases} />}
            >
              <Route
                path=":orderId"
                element={<OrderSummary purchases={purchases} />}
              />
            </Route>
            <Route
              path="/profile"
              element={
                <View
                  isVisible={isVisible}
                  handleClose={handleClose}
                  {...userInfo}
                />
              }
            />
            <Route
              path="/address"
              element={
                <AddressList
                  isVisible={isVisible}
                  handleClose={handleClose}
                  setIsVisible={setIsVisible}
                  newAddressChange={newAddressChange}
                />
              }
            />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
