import { Typography, Grid, Box, Card, Paper,useTheme } from "@mui/material";
import React from "react";
import payment from "../assets/Images/payment.jpg";
import delivery from "../assets/Images/delivery.jpg";
import wishlist from "../assets/Images/wishlist.jpg"; 
import { LocalShippingOutlined,SavingsOutlined,Timer,Payments } from "@mui/icons-material";

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
          fontWeight:"bold",
          marginTop:"2rem"
        }}
      >
        What ZBay Offers
      </Typography>
      <Paper elevation={5} component={"section"} sx={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",padding:"2rem",}}>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"16px"} sx={{borderRight:"1px solid #DAE1E7"}}>
              <LocalShippingOutlined sx={{fontSize:40}}/>
              <Box component={"div"}>
                  <Typography component={"h4"} variant={"p"}>Fast Delivery</Typography>
                  <Typography component={"span"} variant={"small"}>Start From 10</Typography>
              </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"16px"} sx={{borderRight:"1px solid #DAE1E7"}}>
              <SavingsOutlined sx={{fontSize:40}}/>
              <Box component={"div"}>
                  <Typography component={"h4"} variant={"p"}>Money Guarantee</Typography>
                  <Typography component={"span"} variant={"small"}>7 Days Back</Typography>
              </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"16px"} sx={{borderRight:"1px solid #DAE1E7"}}>
              <Timer sx={{fontSize:40}}/>
              <Box component={"div"}>
                  <Typography component={"h4"} variant={"p"}>365 Days</Typography>
                  <Typography component={"span"} variant={"small"}>For Free Return</Typography>
              </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} gap={"16px"}>
              <Payments sx={{fontSize:40}}/>
              <Box component={"div"}>
                  <Typography component={"h4"} variant={"p"}>Payments</Typography>
                  <Typography component={"span"} variant={"small"}>Secure System</Typography>
              </Box>
          </Box>
      </Paper>
    </>
  );
};

export default FeaturesContainer;
