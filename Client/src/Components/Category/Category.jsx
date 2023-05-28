import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { categoryActions } from "../../redux/CategoriesSlice";

const Category = ({ category_name, categoryImage }) => {
  const image_url = "http://localhost:5000/" + categoryImage;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToSelectedCategory = () => {
    dispatch(categoryActions.setSelectedCategory([category_name]))
    navigate('/products')
  }
  return (
    <>
      <Box sx={{ position: "relative", overflow:"hidden",height:"100%",maxHeight:"300px"}}>
          <img
            src={image_url}
            style={{
              objectFit: "cover",
              borderRadius: "8px",
              objectPosition: "center center",    
              width:"100%",
              height:"100%" 
            }}
            alt={category_name}
          ></img>
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            backgroundColor: "rgba(255,255,255, .67)",
            display: "block",
            padding:"8px",
            left:10,
            right:10,
            cursor: "pointer",
            overflow:"hidden",
            "&:hover": {
              backgroundColor: "rgba(0,0,0, .67)",
              color: "#fff",
            },
          }}
          onClick={navigateToSelectedCategory}
          component={"div"}
        >
          <Typography component={"h4"} variant={"h5"} textAlign={"center"}>
            {category_name}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Category;
