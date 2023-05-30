import React from "react";
import { Grid, Box, Paper, Typography, useTheme, Button, useMediaQuery } from "@mui/material";
import ShoppingBagImage from "../../src/assets/Images/ShoppingBagImage.png";
import ShoesImage from '../assets/Images/ShoesImage.png'
import CarouselWrapper from "../Components/CaraouselProduct/CarouselProduct";

const StaticGridContainer = (props) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"))
  const dummyData = ["Slide1", "Slide2"];
  const items = dummyData?.map((product,index) => {
    return (
      <Grid container alignItems={"center"} key={product} justifyContent={"center"}>
        <Grid
          item
          md={5}
          xs={12}
          display={"flex"}
          flexDirection={"column"}
          gap={4}
        >
          <Typography component={"h4"} variant={mobile?"h4":"h1"}>
            Fashionable Collection
          </Typography>
          <Typography component={"p"} variant={"p"}>
            Get Free Shipping on all orders over 99
          </Typography>
          <Button
            sx={{
              backgroundColor: "#101010",
              width:mobile?"fit-content":"100%",  
              color: "white",
              "&:hover": { backgroundColor: "#101010" },
            }}
          >
            Shop Now
          </Button>
        </Grid>
        <Grid item md={7} xs={12} display={"flex"} justifyContent={"center"}>
          <img
            alt="heroSection"
            src={index===0?ShoppingBagImage:ShoesImage}
            style={{
              maxHeight: "400px",
              maxWidth: "100%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          ></img>
        </Grid>
      </Grid>
    );
  });

  const responsiveOptions = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  return (
    <>
      { items && <CarouselWrapper items={items} responsiveOptions={responsiveOptions} autoPlay={true} showArrows={false}/>}
    </>
  );
};

export default StaticGridContainer;
