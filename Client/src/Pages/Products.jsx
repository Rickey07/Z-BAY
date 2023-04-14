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
import MainSearchBar from "../Components/SearchBars/MainSearchBar.jsx";
import { useState , useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getAllProducts from "../redux/ProductsSlice.js";

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

  // Redux Global Imports
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products)
  console.log(products);

  // States
  const [filters,setFilters] = useState({product_name:"",categories:[],rating:"",sortBy:""})

  // Effects
  useEffect(() => {
    dispatch(getAllProducts())
  },[])

  // Methoods
  const onSearch = (e) => {
    setFilters({...filters,"product_name":e.target.value})
  }

  const onSideBarFiltersChange = (e) => {
    if(e.target.name === "category") {
      setFilters((prev) => {
        const copy = {...prev}
        const {categories} = copy
        console.log(categories);
        const updatedArray = [...categories];
        if(e.target.checked) {
          updatedArray?.push(e.target.value)
        } else {
          updatedArray?.filter((value) => value!==e.target.value);
        }
        copy.categories = updatedArray
        return copy
      })
    } else {
      setFilters({...filters,[e.target.name]:e.target.value})
    }
    console.log(filters)
  }

  return (
    <>
      <div>Products</div>
      <Box display={"flex"} padding={"50px"} flexDirection={"column"} gap={"2rem"}> 
      <MainSearchBar onChange={onSearch} searchValue={filters.product_name}/>
      <Grid container spacing={3}>
        <Grid item md={2} xs={10}>
          <SidebarForFilter onChange={onSideBarFiltersChange}/>
        </Grid>
        <Grid item md={10}>
          <Grid container spacing={6}>
            {products?.map((product) => {
              return (
                <Grid item md={4} xs={12} key={product.id}>
                   <Product
                  {...product}
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
