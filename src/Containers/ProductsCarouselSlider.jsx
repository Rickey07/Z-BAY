import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Grid, Hidden, Typography } from "@mui/material";
import React, { useState } from "react";
import CarouselProduct from "../Components/CaraouselProduct/CarouselProduct";

const ProductsCarouselSlider = ({ slides }) => {
  let box = document.querySelector(".product-container");
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const CaraouselSliderStyles = {
    position: "relative",
    overflow: "hidden",
    padding: "26px",
  };

  const leftArrowStyles = {
    border: "none",
    width: "60px",
    height: "100%",
    position: "absolute",
    top: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    cursor: "pointer",
    left:"-21px"
  };

  const rightArrowStyles = {
    border: "none",
    width: "60px",
    height: "100%",
    position: "absolute",
    top: 50,
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0)",
    cursor: "pointer",
    right:"-21px"
  };

  const productContainerStyles = {
    padding: "10px",
    overflowX: "hidden",
    scrollBehavior: "smooth",
    gap: "1rem",
  };

  return (
    <div style={CaraouselSliderStyles}>
      <Typography component={"h3"}  sx={{marginTop:"3rem",marginBottom:"1.5rem"}}>
          Trending Products
      </Typography>
      <div style={leftArrowStyles} onClick={handleNext}>
        <KeyboardArrowLeft />
      </div>
      <div style={rightArrowStyles} onClick={handlePrevious}>
        <KeyboardArrowRight />
      </div>
      <Grid
        container
        spacing={2}
        sx={{
          scrollBehavior: "smooth",
          transition: "ease-in",
        }}
      >
        {
          <>
            <Grid
              item
              xs={3}
              sx={{
                transition: "all 1s",
                "&:hover": {
                  transform: "width",
                  cursor: "pointer",
                },
              }}
            >
              {" "}
              <CarouselProduct img={slides[currentIndex].image} name={slides[currentIndex]?.title}/>
            </Grid>
            <Grid item xs={3}>
              <CarouselProduct img={slides[currentIndex + 1]?.image} name={slides[currentIndex+1]?.title} />
            </Grid>
            <Grid item xs={3}>
              <CarouselProduct img={slides[currentIndex + 2]?.image} name={slides[currentIndex+1]?.title} />
            </Grid>
            <Grid item xs={3}>
              <CarouselProduct img={slides[currentIndex + 3]?.image} name={slides[currentIndex+1]?.title} />
            </Grid>
          </>
        }
      </Grid>
    </div>
  );
};

export default ProductsCarouselSlider;
