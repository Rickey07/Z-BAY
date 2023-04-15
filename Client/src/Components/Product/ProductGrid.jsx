import { Avatar, Box } from "@mui/material";
import React from "react";

const ProductGrid = ({ imagesArray, handleClick, currentImage }) => {
  const imageGridStyles = {
    mainContainer: {
      display: "flex",
      backgroundColor: "white",
      height: "64px",
      width: "64px",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "64px",
      border: "1px solid rgb(218, 225, 231)",
      cursor:"pointer"
    },
  };
  const image_url = "http://localhost:5000/uploads/";
  return (
    <Box display={"flex"} gap={"10px"}>
      {imagesArray &&
        imagesArray?.map((image) => {
          return (
            <Box sx={imageGridStyles.mainContainer} onClick={() => handleClick(image_url + image?.imageName)}>
              <Avatar src={image_url + image?.imageName} />
            </Box>
          );
        })}
    </Box>
  );
};

export default ProductGrid;
