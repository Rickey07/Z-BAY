import React from "react";
import { Badge, Box, useTheme } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import {
  HomeOutlined,
  Inventory,
  Person,
  ShoppingBag,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const BottomBar = () => {
  const theme = useTheme();
  const {cart} = useSelector((state) => state.cart)
  const locationPath = useLocation().pathname;
  const links = [
    { path: "/", text: "Home", icon: <HomeOutlined /> },
    { path: "/Products", text: "Products", icon: <Inventory /> },
    { path: "/Cart", text: "Cart", icon: <Badge color="primary" badgeContent={cart.length}> <ShoppingBag /> </Badge>},
    { path: "/dashboard/profile", text: "Profile", icon: <Person /> },
  ];

  const linksToBeShown = links.map((link) => {  
    return (
      <Link
        to={link.path}
        key={link.path}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          color: locationPath === link.path ? theme.palette.primary.main : theme.palette.secondary.dark,
        }}
      >
        {link.icon}
        {link.text}
      </Link>
    );
  });

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#fff",
          justifyContent: "space-around",
          zIndex: 1300,
          height: "64px",
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          boxShadow: "0px 1px 4px 3px rgba(0, 0, 0, 0.1)",
        }}
      >
        {linksToBeShown}
      </Box>
    </div>
  );
};

export default BottomBar;
