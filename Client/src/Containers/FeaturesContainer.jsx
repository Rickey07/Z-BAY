import { Typography, Grid, Box, Card, Paper } from "@mui/material";
import React from "react";
import payment from "../assets/Images/payment.jpg";
import delivery from "../assets/Images/delivery.jpg";
import wishlist from "../assets/Images/wishlist.jpg";
import { LocalShippingOutlined } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const FeaturesContainer = () => {
  const theme = useTheme();
  const featureData = [
    {
      featureName: "Add Favourites To WishList",
      image: wishlist,
    },
    {
      featureName: "Hassle Free Payment",
      image: payment,
    },
    {
      featureName: "Instant Delivery",
      image: delivery,
    },
  ];


  return (
    <>
      <Typography
        component={"h3"}
        variant={"h4"}
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          color: `${theme.mainTheme.primaryColor}`,
        }}
      >
        What Z-BAY Offers
      </Typography>
      <Paper elevation={5} sx={{p:4,display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"30px"}}>
        <Box sx={{display:"flex",gap:"16px",alignItems:"center",borderRight:"1px solid black"}}>
          <LocalShippingOutlined/>
          <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography component={"p"} variant={"p"}>Fast Delivery</Typography>
            <Typography component={"small"} variant={"small"}>Start From $10</Typography>
          </Box>
        </Box>
        <Box sx={{display:"flex",gap:"16px",alignItems:"center",borderRight:"1px solid black"}}>
          <LocalShippingOutlined/>
          <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography component={"p"} variant={"p"}>Fast Delivery</Typography>
            <Typography component={"small"} variant={"small"}>Start From $10</Typography>
          </Box>
        </Box>
        <Box sx={{display:"flex",gap:"16px",alignItems:"center",borderRight:"1px solid black"}}>
          <LocalShippingOutlined/>
          <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography component={"p"} variant={"p"}>Fast Delivery</Typography>
            <Typography component={"small"} variant={"small"}>Start From $10</Typography>
          </Box>
        </Box>
        <Box sx={{display:"flex",gap:"16px",alignItems:"center",borderRight:"1px solid black"}}>
          <LocalShippingOutlined/>
          <Box sx={{display:"flex",flexDirection:"column"}}>
            <Typography component={"p"} variant={"p"}>Fast Delivery</Typography>
            <Typography component={"small"} variant={"small"}>Start From $10</Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default FeaturesContainer;
