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
  ShoppingBag,
} from "@mui/icons-material";
import ProductButtton from "../Buttons/ProductButtton";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { cartActions } from "../../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../Buttons/PrimaryButton";
import { toast } from "react-toastify";

const Product = ({
  rating,
  Price,
  category,
  images,
  name,
  isLoading,
  id,
  forCarousel,
}) => {
  const theme = useTheme();

  const navigate = useNavigate();
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
      transition: "transform 0.15s ease-in-out",
      "&:hover": { transform: "scale3d(1.02, 1.05, 1)" },
    },
    productActions: {
      position: "absolute",
      right: "5px",
      top: "0px",
      display: "none",
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
      "&:hover .productActions": { display: "flex" },
    },
  };
  const quantityAdder = {
    mainBox: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
  };

  // Variables
  const image_url =
    images && "http://localhost:5000/uploads/" + images[0]?.imageName;

  // These Product will be updated in cart
  const productForUpdation = {
    name,
    Price,
    id,
    quantity: "",
    image_url,
    total: 0,
  };

  // Redux Imports
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isProductInCart = cart?.cart.find((product) => product.id === id);

  // States

  // Methods

  const handleAdd = (product) => {
    dispatch(cartActions.addToCart(product));
    toast.success("Product added to cart")
  };

  const handleRemove = (product) => {
    dispatch(cartActions.removeFromCart(product));
    toast.success("Product Removed From cart")
  };

  return (
    <>
      {isLoading ? (
        <Box component={"div"}>
          <Shimmer
            shape={"rounded"}
            animation={"wave"}
            height={200}
            width={300}
          />
          <Box>
            <Shimmer shape={"text"} width={150} />
            <Shimmer shape={"circular"} height={50} width={50} />
            <Shimmer shape={"text"} width={300} />
          </Box>
        </Box>
      ) : forCarousel ? (
        <>
          <Box
            component={"div"}
            sx={{ display: "flex", flexDirection: "column",position:"relative" }}
          >
            <Box
              component={"div"}
              sx={{
                maxHeight: "300px",
                backgroundColor: "#E3E9EF",
                paddingTop: 3,
                "&:hover .productActions": { display: "block" },
                transition: "transform 0.15s ease-in-out",
                "&:hover": { transform: "scale3d(1.02, 1.05, 1)" },
              }}
            >
              <Link to={"#"} style={{ display: "block",textDecoration:"none" }}>
                <img
                  src={image_url}
                  height={150}
                  width={150}
                  alt={name}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    marginBottom: "5px",
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                   display:"flex",
                  alignItems:"center"
                  }}
                  onClick={() => isProductInCart? handleRemove(productForUpdation) : handleAdd(productForUpdation)}
                >
                 <Typography component={"p"} variant={"p"} sx={{
                   display:"flex",
                  alignItems:"center"
                  }}>{isProductInCart ? "Remove from cart" : "Add to cart"} <ShoppingBag/></Typography>
                </Button>
              </Link>
              <Box
              component={"div"}
              className={"productActions"}
              sx={{display:"none",position:"absolute",top:5,right:10,cursor:"pointer"}}
            >
              <Visibility
                htmlColor="rgba(0, 0, 0, 0.26)"
                onClick={() => navigate(`/products?search=${id}`)}
              />
              </Box>
            </Box>
            <Box sx={{display:"flex",flexDirection:"column",gap:"5px",justifyContent:"center",alignItems:"center",mt:2}}>
                    <Typography component={"small"} variant={"small"}>{category?.category_name}</Typography>
                    <Typography component={"p"} variant={"p"}>{name}</Typography>
                    <Typography component={"p"} fontSize={"16px"} fontWeight={"bolder"} variant={"p"}>₹{`${Price}`}</Typography>
              </Box>
          </Box>
        </>
      ) : (
        <Paper
          component={"div"}
          sx={productStyles.mainProductContainer}
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
            <Box
              component={"div"}
              className={"productActions"}
              sx={productStyles.productActions}
            >
              <Visibility
                htmlColor="rgba(0, 0, 0, 0.26)"
                onClick={() => navigate(`/products?search=${id}`)}
              />
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
            <Box sx={quantityAdder.mainBox}>
              {/* {isProductInCart && */}
              <>
                <Button
                  sx={{
                    border: "1px solid red",
                    width: "20px",
                    minWidth: "25px",
                    visibility: `${isProductInCart ? "visible" : "hidden"}`,
                    padding: "5px",
                  }}
                  onClick={() => handleRemove(productForUpdation)}
                >
                  <Remove fontSize="12px" />
                </Button>
                <Typography
                  style={{
                    visibility: `${isProductInCart ? "visible" : "hidden"}`,
                    textAlign: "center",
                  }}
                  component={"span"}
                  variant={"span"}
                >
                  {isProductInCart?.quantity}
                </Typography>
              </>

              <Button
                sx={{
                  border: "1px solid red",
                  width: "20px",
                  minWidth: "25px",
                  padding: "5px",
                }}
                onClick={() => handleAdd(productForUpdation)}
              >
                <Add fontSize="12px" />
              </Button>
            </Box>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default Product;
