import React from "react";
import { Box, Typography, Stack,Grid,useTheme, useMediaQuery } from "@mui/material";
import Category from "../Components/Category/Category";
import { useSelector } from "react-redux";
import CarouselWrapper from "../Components/CaraouselProduct/CarouselProduct";

const CategoriesContainer = () => {
  const AllCategories = useSelector((state) => state.category.categories); 
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"))
  const items = AllCategories && AllCategories?.map((category) => {
    return <Category {...category} key={category?.id}/>
  })
  const responsiveOptions = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <Box sx={{ marginTop: "5rem" }}>
      <Typography component={"h5"} fontWeight={"bold"} variant={"h5"} sx={{mb:3}} textAlign={"center"}>
        Browse All Products by Categories
      </Typography>
      {
        items &&  <CarouselWrapper items={items} itemClass={!mobile&&"carousel-item-padding-40-px"} responsiveOptions={responsiveOptions}/>
      }
   
    </Box>
  );
};

export default CategoriesContainer;
