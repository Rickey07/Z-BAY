import {
  LocationCity,
  People,
  ShoppingBag,
  ThreeDRotation,
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
import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import View from "../Components/Profile/View";
import OrderWrapper from "../Components/Orders/OrderWrapper";
import { useState } from "react";
import AddressList from "../Components/Address/AddressList";
import { useCallback } from "react";

const Dashboard = () => {
  // Default Configurations
  const Links = [
    { text: "Orders", icon: <ShoppingBag />, url: "orders" },
    { text: "Profile Info", icon: <People />, url: "profile" },
    { text: "Addresses", icon: <LocationCity />, url: "address" },
  ];

  // Router Import
  const location = useLocation();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const sectionHeading = location.pathname.includes("orders")
    ? "My Orders"
    : location.pathname.includes("profile")
    ? "My Profile"
    : "My Addresses";

  // States
  const [isVisible, setIsVisible] = useState(false);
  const [newAddressChange, setNewAddressChange] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false)
  }

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {mobile && mobileMenuOpen && (
        <Drawer anchor="left" open={mobileMenuOpen} onClose={closeMobileMenuDrawer}>
          <Box component={"div"} sx={{pl:4,marginTop:10,pr:4}}>
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
                        gap:"10px",
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
                      <Typography>5</Typography>
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
                        <Typography>5</Typography>
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
            <Route path="/orders" element={<OrderWrapper />} />
            <Route
              path="/profile"
              element={<View isVisible={isVisible} handleClose={handleClose} />}
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
