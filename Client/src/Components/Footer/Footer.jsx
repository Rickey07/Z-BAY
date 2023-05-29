import { Facebook, GitHub, LinkedIn, ShoppingBagOutlined,Twitter } from "@mui/icons-material";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";
import React from "react";
import googlePlayIcon from "../../assets/Icons/googlePlay.svg";
import appleStoreIcon from "../../assets/Icons/appleStore.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#222935" }} component={"footer"}>
        <Container fixed>
          <Box component={"div"} sx={{ py: "80px", overflow: "hidden" }}>
            <Grid container spacing={4}>
              <Grid
                item
                md={3}
                lg={3}
                xs={12}
                sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <Link
                  to={"#"}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px ",
                  }}
                >
                  <ShoppingBagOutlined
                    sx={{ color: "white", fontSize: "40px" }}
                  />
                  <Typography
                    component={"h5"}
                    variant={"h5"}
                    sx={{ color: "white", fontWeight: "bold" }}
                  >
                    ZBay
                  </Typography>
                </Link>
                <Typography component={"p"} variant={"p"} color={"white"}>
                  ZBay is a fashion e-commerce website website that provides
                  high-quality products to our customers at affordable prices.
                </Typography>
                <Box
                  component={"div"}
                  display={"flex"}
                  flexDirection={"row"}
                  gap={"8px"}
                >
                  <Box
                    component={"div"}
                    sx={{
                      px: 1,
                      py: 1,
                      backgroundColor: "#161d2b",
                      display: "flex",
                      borderRadius: "8px",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      alt="google-play"
                      src={googlePlayIcon}
                      height={20}
                    ></img>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      sx={{ color: "white" }}
                    >
                      <Typography
                        component={"small"}
                        variant={"small"}
                        fontSize={"10px"}
                      >
                        Get it on
                      </Typography>
                      <Typography component={"span"} variant={"span"}>
                        Google Play
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    component={"div"}
                    sx={{
                      px: 1,
                      py: 1,
                      backgroundColor: "#161d2b",
                      display: "flex",
                      borderRadius: "8px",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      alt="google-play"
                      src={appleStoreIcon}
                      height={20}
                    ></img>
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      sx={{ color: "white" }}
                    >
                      <Typography
                        component={"small"}
                        variant={"small"}
                        fontSize={"10px"}
                      >
                        Get it on
                      </Typography>
                      <Typography component={"span"} variant={"span"}>
                        App Store
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                md={3}
                lg={3}
                xs={12}
                sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <Typography
                  component={"h5"}
                  variant={"h5"}
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  About Us
                </Typography>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    color: "#AEB4BE",
                  }}
                >
                  <Typography variant="span" component={"span"}>
                    Careers
                  </Typography>
                  <Typography variant="span" component={"span"}>
                    Our Stores
                  </Typography>
                  <Typography variant="span" component={"span"}>
                    Our Cares
                  </Typography>
                  <Typography variant="span" component={"span"}>
                    Terms & Conditions
                  </Typography>
                  <Typography variant="span" component={"span"}>
                    Privacy Policy
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                md={3}
                lg={3}
                xs={12}
                sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
              >
                <Typography
                  component={"h5"}
                  variant={"h5"}
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Customer Care
                </Typography>
                <Box
                  component={"div"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    color: "#AEB4BE",
                  }}
                >
                  <Typography variant="span" component={"span"}>
                    Help Center
                  </Typography>
                  <Typography variant="span" component={"span"}>
                    How to buy
                  </Typography>
                  <Typography variant="span" component={"span"}>
                    Track Your Order
                  </Typography>
                  <Typography variant="span" component={"span"}>
                    Corporate & Bulk Purchasing
                  </Typography>
                  <Typography variant="span" component={"span"}>
                    Return & Refunds
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={3} lg={3} xs={12} sx={{display:"flex",flexDirection:"column",gap:"12px"}}>
                <Typography
                  component={"h5"}
                  variant={"h5"}
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  Contact Us
                </Typography>
                <Box component={"div"} sx={{ color: "#AEB4BE",display:"flex",flexDirection:"column",gap:"10px" }}>
                  <Typography component={"p"} variant={"p"}>
                    814-B , Vijay Nagar , Indore, Madhya Pradesh
                  </Typography>
                  <Typography component={"p"} variant={"p"}>
                    Email:- Support@Zbay.com
                  </Typography>
                  <Typography component={"p"} variant={"p"}>
                    Phone :- +918770898508{" "}
                  </Typography>
                  <Box component={"div"} display={"flex"} gap={"10px"} >
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: "#161d2b", 
                        }}
                        component={"a"}
                        href={"#"}
                      >
                        <Facebook>add_circle</Facebook>{" "}
                      </Avatar>
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: "#161d2b", // Replace with your desired background color
                        }}
                        component={"a"}
                        href={"https://twitter.com/Prabadhya_U"}
                        target={"_blank"}
                      >
                        <Twitter>add_circle</Twitter>{" "}
                      </Avatar>
                    <Box>
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: "#161d2b",
                        }}
                        component={"a"}
                        href={"https://www.linkedin.com/in/prabadhya-upadhyay-198a22218/"}
                        target={"_blank"}
                      >
                        <LinkedIn>add_circle</LinkedIn>{" "}
                      </Avatar>
                    </Box>
                    <Box>
                      <Avatar
                        sx={{
                          width: 40,
                          height: 40,
                          backgroundColor: "#161d2b",
                        }}
                        component={"a"}
                        href={"https://github.com/Rickey07"}
                        target={"_blank"}
                      >
                        <GitHub>add_circle</GitHub>
                      </Avatar>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
