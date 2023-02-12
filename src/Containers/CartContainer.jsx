import React from "react";
import { Box, Paper, Typography, Grid } from "@mui/material";
import Product from "../Components/Product/Product";
import PrimaryButton from "../Components/Buttons/PrimaryButton";

const CartContainer = () => {
  const inlineTableDetailsStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const productsInCartData = [
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      OffPercentage: "55%",
      description:
        "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
      category: "Grocery",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: {
        rate: 4.5,
        count: 146,
      },
      quantity: "500g",
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      OffPercentage: "35%",
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "Clothes",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
      quantity: "1",
    },
    {
      id: 20,
      title: "DANVOUY Womens T Shirt Casual Cotton Short",
      price: 12.99,
      OffPercentage: "35%",
      description:
        "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
      category: "Clothes",
      image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
      rating: {
        rate: 3.6,
        count: 145,
      },
      quantity: "1",
    },
  ];

  const CartSummaryCard = () => {
    return (
      <>
        <Paper sx={{ p: 2 }}>
          <Typography textAlign={"start"}>Cart Summary</Typography>
          <hr />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={inlineTableDetailsStyle}>
              <Typography component={"p"} variant="p">
                Quantity
              </Typography>
              <Typography component={"p"} variant="p">
                4
              </Typography>
            </Box>
            <Box sx={inlineTableDetailsStyle}>
              <Typography component={"p"} variant="p">
                Price
              </Typography>
              <Typography component={"p"} variant="p">
                400
              </Typography>
            </Box>
            <Box sx={inlineTableDetailsStyle}>
              <Typography component={"p"} variant="p">
                Delivery
              </Typography>
              <Typography component={"p"} variant="p">
                50
              </Typography>
            </Box>
          </Box>
          <hr />
          <Box sx={inlineTableDetailsStyle}>
            <Typography component={"p"} variant="p">
              Total
            </Typography>
            <Typography component={"p"} variant="p">
              413
            </Typography>
          </Box>
          <Box sx={{ marginTop: "2rem", display: "flex",gap:"5px" }}>
            <PrimaryButton text={"Proceed to checkout"} />
            <PrimaryButton text={"Shop More"} />
          </Box>
        </Paper>
      </>
    );
  };

  return (
    <Grid container columnGap={2}>
      <Grid item xs={8}>
        <Grid columnGap={3} rowGap={3} container>
          {productsInCartData.map((product) => {
            return (
              <Grid item xs={4}>
                <Product
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  category={product.category}
                  image_url={product.image}
                  OffPercentage={product.OffPercentage}
                  rating={product.rating}
                  isInWishList={product.isInWishList}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <CartSummaryCard />
      </Grid>
    </Grid>
  );
};

export default CartContainer;
