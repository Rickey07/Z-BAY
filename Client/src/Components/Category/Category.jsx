import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HomePageHero1 from "../../assets/Images/HomePageHero1.jpg";

const Category = (prop) => {
  return (
    <>
      <Box
        className={prop.className ? prop.className : "category"}
        sx={{ display: "flex", flexDirection: "column", cursor: "pointer" }}
      >
        <Avatar
          alt="category"
          src={HomePageHero1}
          sx={{ width: "100%", height: "100%" }}
          variant={"rounded"}
        />
        <Typography component="p">{prop.category_name}</Typography>
      </Box>
    </>
  );
};

export default Category;
