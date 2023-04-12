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
import { FavoriteBorderRounded, Favorite,Visibility, Add, Remove } from "@mui/icons-material";
import ProductButtton from "../Buttons/ProductButtton";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";

const Product = (prop) => {
  const theme = useTheme();

  // Styles 

  const productStyles = {
    productImage:{
      height:"100px",
      width:"300px",
      // objectFit:"cover"
    },
    productImageandActionsContainer:{
      position:"relative",
    },
    productActions:{
      position:"absolute",
      right:"5px",
      top:"0px",
      display:"flex",
      flexDirection:"column",
      gap:"5px",
      cursor:"pointer"
    },
    productInfoContainer:{
      padding:"15px",
      display:"flex",
      alignItems:"flex-start",
      justifyContent:"space-between"
    },
    childInfoContainer:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"flex-start",
      alignItems:"flex-start",
      gap:"12px"
    },
    productImageContainer:{
      height:"200px",
      width:"300px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      cursor:"pointer"
    },
    mainProductContainer:{
      borderRadius:'8px',
    }
  }

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
      mainBox:{
        display:"flex",
        flexDirection:"column",
        gap:"4px"
      }
    }
    return (
      <>
       <Box sx={quantityAdder.mainBox}>
          <Button sx={{border:"1px solid red",width:"20px",minWidth:"25px",padding:"5px"}}>
            <Remove fontSize="12px"/>
          </Button>
          <Typography component={"span"} variant={"span"}>1</Typography>
          <Button sx={{border:"1px solid red",width:"20px",minWidth:"25px",padding:"5px"}}>
            <Add fontSize="12px"/>
          </Button>
       </Box>
      </>
    );
  };

  return (
    <>
     <Paper component={"div"} style={productStyles.mainProductContainer} elevation={1}>
        <Box component={"div"} sx={productStyles.productImageandActionsContainer}>
            <Box component={"div"} sx={productStyles.productImageContainer}>
             <img src={prop.image_url} style={productStyles?.productImage} alt={"product"}/>
            </Box>
            <Box component={"div"} sx={productStyles.productActions}>
            <Visibility htmlColor="rgba(0, 0, 0, 0.26)"/>
            <FavoriteBorderRounded htmlColor="rgba(0, 0, 0, 0.26)"/>
            </Box>
        </Box>
        <Box component={"div"} sx={productStyles.productInfoContainer}>
          <Box component={"div"} sx={productStyles.childInfoContainer}>
              <Typography component={"h3"} fontSize={"14px"} color={"rgb(55, 63, 80)"} variant={"span"}>Police Gray EyeGlasses</Typography>
              <Rating name="read-only" value={prop.rating} readOnly />
              <Typography component={"h3"} fontSize={"14px"} color={"rgb(210, 63, 87)"} variant={"span"}>870</Typography>
          </Box>
          {<QuantityAdder/>}
        </Box>
     </Paper>
    </>
  );
};

export default Product;
