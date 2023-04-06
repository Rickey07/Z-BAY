import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Category from "../Components/Category/Category";
import { useSelector } from "react-redux";

const CategoriesContainer = () => {
  const AllCategories = useSelector((state) => state.category.categories);
  return (
    <Box sx={{ marginTop: "5rem" }}>
      <Typography component={"h3"}>
        Browse All Products by Categories
      </Typography>
      <Stack direction="row" sx={{ marginTop: "2rem" }} spacing={3}>
        {AllCategories?.categories?.map((name, index) => {
          return <Category name={name} key={index + name} />;
        })}
      </Stack>
    </Box>
  );
};

export default CategoriesContainer;
