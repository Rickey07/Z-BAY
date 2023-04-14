import { useTheme } from "@emotion/react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Grid,
  Rating,
  IconButton,
  Paper,
  Button,
} from "@mui/material";
import React from "react";
import {
  FavoriteBorderRounded,
  Favorite,
  Visibility,
  Add,
  Remove,
} from "@mui/icons-material";
import ProductButtton from "../Buttons/ProductButtton";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import Shimmer from "../Shimmer/Shimmer";

const Product = ({ rating, Price, category, images, name, isLoading }) => {
  const theme = useTheme();

  // Styles
  const productStyles = {
    productImage: {
      height: "100%",
      width: "100%",
      // objectFit:"cover",
      display: "block",
      margin: "0 auto",
    },
    productImageandActionsContainer: {
      position: "relative",
    },
    productActions: {
      position: "absolute",
      right: "5px",
      top: "0px",
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      cursor: "pointer",
    },
    productInfoContainer: {
      padding: "15px",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
    childInfoContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "12px",
    },
    productImageContainer: {
      height: "200px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    mainProductContainer: {
      borderRadius: "8px",
      minWidth: "fit-content",
    },
  };

  // Variables
  const image_url =
    images && "http://localhost:5000/uploads/" + images[0]?.imageName;

  // States
  const [quantityToBeShown, setQuantityToBeShown] = useState(false);
  const [counter, setCounter] = useState(1);
  const location = useLocation();
  const { pathname } = location;

  // Methods

  const handleAdd = () => {
    setCounter((current) => current + 1);
  };

  const handleRemove = () => {
    setCounter((current) => {
      return current === 0 ? current : current - 1;
    });
    if (counter === 1) {
      setQuantityToBeShown(false);
      setCounter(1);
    }
  };

  const QuantityAdder = () => {
    const quantityAdder = {
      mainBox: {
        display: "flex",
        flexDirection: "column",
        gap: "4px",
      },
    };
    return (
      <>
        <Box sx={quantityAdder.mainBox}>
          <Button
            sx={{
              border: "1px solid red",
              width: "20px",
              minWidth: "25px",
              padding: "5px",
            }}
          >
            <Remove fontSize="12px" />
          </Button>
          <Typography component={"span"} variant={"span"}>
            1
          </Typography>
          <Button
            sx={{
              border: "1px solid red",
              width: "20px",
              minWidth: "25px",
              padding: "5px",
            }}
          >
            <Add fontSize="12px" />
          </Button>
        </Box>
      </>
    );
  };

  return (
    <>
      {isLoading ? (
        <Box component={"div"}>
          <Shimmer shape={"rounded"} animation={"wave"} height={200} width={300} />
          <Box>
          <Shimmer shape={"text"} width={150}/>
          <Shimmer shape={"circular"} height={50} width={50}/>
          <Shimmer shape={"text"} width={300}/>
          </Box>
        </Box>
      ) : (
        <Paper
          component={"div"}
          style={productStyles.mainProductContainer}
          elevation={2}
        >
          <Box
            component={"div"}
            sx={productStyles.productImageandActionsContainer}
          >
            <Box component={"div"} sx={productStyles.productImageContainer}>
              <img
                src={image_url}
                style={productStyles?.productImage}
                alt={"product"}
              />
            </Box>
            <Box component={"div"} sx={productStyles.productActions}>
              <Visibility htmlColor="rgba(0, 0, 0, 0.26)" />
              <FavoriteBorderRounded htmlColor="rgba(0, 0, 0, 0.26)" />
            </Box>
          </Box>
          <Box component={"div"} sx={productStyles.productInfoContainer}>
            <Box component={"div"} sx={productStyles.childInfoContainer}>
              <Typography
                component={"h3"}
                fontSize={"14px"}
                color={"rgb(55, 63, 80)"}
                variant={"span"}
              >
                {name}
              </Typography>
              <Rating name="read-only" value={rating} readOnly />
              <Typography
                component={"h3"}
                fontSize={"14px"}
                color={"rgb(210, 63, 87)"}
                variant={"span"}
              >
                ₹{Price}
              </Typography>
            </Box>
            {<QuantityAdder />}
          </Box>
        </Paper>
      )}
    </>
  );
};

export default Product;
