import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Grid, Hidden, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import CarouselWrapper from "../Components/CaraouselProduct/CarouselProduct";
import MainLoader from "../Components/Loaders/MainLoader";
import Product from "../Components/Product/Product";
import getAllProducts from "../helpers/APICalls/getAllProducts";

const ProductsCarouselSlider = ({ slides }) => {
  let box = document.querySelector(".product-container");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Methods

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    setLoading(true);
    const response = await getAllProducts();
    if (response.success) {
      setProducts(response.products);
    }
    setLoading(false);
  };

  const CaraouselSliderStyles = {
    position: "relative",
    overflow: "hidden",
    padding: "26px",
  };

  const options = {
    swipeable: false,
    infinite: true,
    removeArrowOnDeviceType: ["tablet", "mobile"],
  };

  const responsiveOptions = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }

  const items =
    products &&
    products.map((slide) => {
      return <Product key={slide.id} {...slide} forCarousel={true} />;
    });

  return (
    <div style={CaraouselSliderStyles}>
      <MainLoader visible={loading}/>
      <Typography
        component={"h3"}
        sx={{ marginTop: "3rem", marginBottom: "1.5rem" }}
        fontWeight={"Bold"}
        textAlign={"center"}
        variant={"h5"}
      >
        Trending Products
      </Typography>
        {
          <>
              {products && <CarouselWrapper options={options} responsiveOptions={responsiveOptions} items={items} />}
          </>
        }
    </div>
  );
};

export default ProductsCarouselSlider;
