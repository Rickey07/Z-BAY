import React from "react";
import Product from "../Components/Product/Product";
import { Grid } from "@mui/material";

const WishlistContainer = () => {
  const wishListProductsData = [
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
      isInWishList: true,
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
      isInWishList: true,
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
      isInWishList: true,
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
      isInWishList: true,
    },
  
  ];

  return (
    <>
      <div className="products">Products</div>
      <Grid container  sx={{border:"1px solid  red"}} columnGap={3} gridTemplateColumns={"repeat(auto-fill, minmax(100px, 1fr))"}>
        {wishListProductsData.map((product) => {
          return (
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
          );
        })}
      </Grid>
    </>
  );
};

export default WishlistContainer;
