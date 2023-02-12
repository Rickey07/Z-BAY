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
} from "@mui/material";
import React from "react";
import { FavoriteBorderRounded,Favorite } from "@mui/icons-material";
import ProductButtton from "../Buttons/ProductButtton";
import { useState } from "react";
import PrimaryButton from '../Buttons/PrimaryButton';

const Product = (prop) => {
  const theme = useTheme();

  // States
  const [quantityToBeShown, setQuantityToBeShown] = useState(false);
  const [counter, setCounter] = useState(1);

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
    return (
      <>
        <Box
          sx={{
            backgroundColor: theme.mainTheme.primaryColor,
            border: `0.5px solid transparent`,
            borderRadius: "8px",
            display: "flex",
            gap: "3px",
            width: "90px",
            justifyContent: "space-around",
            height: "36px",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <Typography
            component={"div"}
            sx={{ cursor: "pointer" }}
            onClick={handleRemove}
            variant={"div"}
          >
            -
          </Typography>
          <Typography component={"div"} variant={"div"}>
            {counter}
          </Typography>
          <Typography
            component={"div"}
            sx={{ cursor: "pointer" }}
            onClick={handleAdd}
            variant={"div"}
          >
            +
          </Typography>
        </Box>
      </>
    );
  };

  return (
    <Grid item xs={2}>
      <Card>
        <Box sx={{ position: "relative" }}>
          <Typography
            component={"p"}
            sx={{
              position: "absolute",
              left: 0,
              top: 2,
              backgroundColor: theme.mainTheme.primaryColor,
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "600",
              color: "#fff",
            }}
            variant={"p"}
          >
            {prop.OffPercentage + "off"}
          </Typography>
          <IconButton sx={{ position: "absolute", right: 0, top: 0,backgroundColor:"#fff",opacity:0.9 }}>
            {
              prop.isInWishList ? <Favorite sx={{
                color:`${theme.mainTheme.primaryColor}`
              }}/> :  <FavoriteBorderRounded
              sx={{
                "&:hover": {
                  color: `${theme.mainTheme.primaryColor}`,
                },
              }}
            />
            }
           
          </IconButton>
          <CardMedia
            component={"img"}
            height={75}
            width={75}
            image={prop.image_url}
            alt={"Product_Image"}
          />
        </Box>
        <CardContent
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <Typography component={"p"} variant={"p"}>
            {prop.title}
          </Typography>
          <Typography component={"p"} variant={"p"}>
            Quantity:-{prop.quantity}
          </Typography>
          <Typography
            component={"p"}
            sx={{
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "600",
            }}
            variant={"p"}
          >
            Category:-{prop.category}
          </Typography>
          <Rating
            defaultValue={prop.rating.rate}
            precision={0.5}
            readOnly
          ></Rating>
        </CardContent>
        <CardContent
          component={"div"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <Typography component={"p"} varian={"p"}>
            Price:- {prop.price}
          </Typography>
          {
            prop.isInWishList ? <PrimaryButton text={"Move to cart"} buttonSize={"small"}/> : quantityToBeShown ? (
            <QuantityAdder />
          ) : (
            <ProductButtton
              setQuantityToBeShown={setQuantityToBeShown}
              add={"add"}
            />
          )
          }
          
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Product;
