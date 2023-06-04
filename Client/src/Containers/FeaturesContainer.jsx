import { Typography, Box, Paper,useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { LocalShippingOutlined,SavingsOutlined,Timer,Payments } from "@mui/icons-material";

const FeaturesContainer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      <Typography
        component={"h3"}
        variant={"h5"}
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          fontWeight:"bold",
          marginTop:"2rem"
        }}
      >
        What ZBay Offers
      </Typography>
      <Paper elevation={5} component={"section"} sx={{display:"grid",gridTemplateColumns:`repeat(${!mobile?4:1},1fr)`,padding:"2rem",gap:"18px"}}>
          <Box display={"flex"} justifyContent={mobile?"flex-start":"center"} alignItems={"center"} gap={"16px"} sx={{borderRight:!mobile && "1px solid #DAE1E7"}}>
              <LocalShippingOutlined sx={{fontSize:40}}/> 
              <Box component={"div"}>
                  <Typography component={"h4"} variant={"p"}>Fast Delivery</Typography>
                  <Typography component={"span"} variant={"small"}>Start From 10</Typography>
              </Box>
          </Box>
          <Box display={"flex"} justifyContent={mobile?"flex-start":"center"} alignItems={"center"} gap={"16px"} sx={{borderRight:!mobile &&"1px solid #DAE1E7"}}>
              <SavingsOutlined sx={{fontSize:40}}/>
              <Box component={"div"}>
                  <Typography component={"h4"} variant={"p"}>Money Guarantee</Typography>
                  <Typography component={"span"} variant={"small"}>7 Days Back</Typography>
              </Box>
          </Box>
          <Box display={"flex"} justifyContent={mobile?"flex-start":"center"} alignItems={"center"} gap={"16px"} sx={{borderRight:!mobile &&"1px solid #DAE1E7"}}>
              <Timer sx={{fontSize:40}}/>
              <Box component={"div"}>
                  <Typography component={"h4"} variant={"p"}>365 Days</Typography>
                  <Typography component={"span"} variant={"small"}>For Free Return</Typography>
              </Box>
          </Box>
          <Box display={"flex"} justifyContent={mobile?"flex-start":"center"} alignItems={"center"} gap={"16px"}>
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
