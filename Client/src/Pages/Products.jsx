import React from "react";
import Product from "../Components/Product/Product.jsx";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  InputBase,
} from "@mui/material";
import SidebarForFilter from "../Components/SideBar/SidebarForFilter.jsx";

const Products = () => {
  const productsData = [
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
      isInWishList: true,
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

  const MainSearchBar = () => {
    const mainSearchBarstyles = {
      mainContainerWrapper: {
        padding: "3px 50px",
        borderRadius: "8px",
      },
      mainContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      inputContainer: {
        maxWidth:"700px",
        width:"100%"
      },
      input: {
        borderRadius: "16px",
      },
    };

    return (
      <>
        <Paper
          component={"div"}
          style={mainSearchBarstyles.mainContainerWrapper}
          elevation={1}
        >
          <Box component={"div"} sx={mainSearchBarstyles.mainContainer}>
            <Box component={"div"} sx={mainSearchBarstyles.inputContainer}>
              {/* <TextField style={mainSearchBarstyles.input} fullWidth label="fullWidth" id="fullWidth" />  */}
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search For Products"
                inputProps={{ "aria-label": "search google maps" }}
                fullWidth
                // style={{border:"1px solid red"}}
              />
            </Box>
            <Box>
              <Typography component={"h6"} variant="h6">
                Searching For
              </Typography>
              <Typography component={"h6"} variant={"p"}>
                48 Results Found
              </Typography>
            </Box>
          </Box>
        </Paper>
      </>
    );
  };

  return (
    <>
      <div>Products</div>
      <Box display={"flex"} padding={"50px"} flexDirection={"column"} gap={"2rem"}> 
      <MainSearchBar />
      <Grid container spacing={3}>
        <Grid item md={2} xs={10}>
          <SidebarForFilter />
        </Grid>
        <Grid item md={10}>
          <Grid container spacing={8}>
            {productsData.map((product) => {
              return (
                <Grid item md={4} xs={12} key={product.id}>
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
      </Grid>
      </Box>
    </>
  );
};

export default Products;
