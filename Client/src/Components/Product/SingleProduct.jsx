import React, { useEffect, useState } from "react";
import {
  Box,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import Shimmer from "../Shimmer/Shimmer";
import masterApi from "../../api/masterApi";
import { cartActions } from "../../redux/CartSlice";
import ProductGrid from "./ProductGrid";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = ({ searchId }) => {
  // Styles
  const loadingProductStyles = {
    mainLoaderContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      maxWidth: "1200px",
      width: "1000px",
    },
    productDataContainer: {
      display: "flex",
      gap: "20px",
      flexWrap: "wrap",
      border: "1px solid green",
    },
    productButton: {
      marginTop: "100px",
    },
    imageGridLoader: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    },
  };

  const productStyles = {
    twoBoxContainer: {
      padding: "30px",
    //   width: "800px",
      minWidth: "320px",
      maxWidth: "1200px",
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      flexWrap:"wrap"
    },
    firstBoxContainer: {
      // border:"1px solid pink",
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },
    secondBoxContainer: {
      // border:"1px solid blue",
      paddingLeft: "15px",
    },
    productNameStyles: {
      marginBottom: "8px",
      marginTop: "0px",
      fontSize: "30px",
      lineHeight: "1.5",
    },
    productPrice: {
      color: "rgb(210, 63, 87)",
      fontWeight: "700",
      fontSize: "25px",
    },
    addToCartButton:{
        backgroundColor:"rgb(210, 63, 87)"
    }
  };
  const quantityAdder = {
    mainBox: {
      display: "flex",
      flexDirection: "row",
      gap: "4px",
    },
  };
  // Variables

  // Redux Imports
  // Redux Imports
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // States
  const [product, setProduct] = useState({});
  const { images, id } = product;
  const [currentMainProductImage, setcurrentMainProductImage] = useState("");
  const [loading, setLoading] = useState(false);

  // Variables From State
  const image_url = `${process.env.REACT_APP_API_BASE_URL}/uploads/`;
  const productForUpdation = {
    name: product?.name,
    Price: product?.Price,
    id: product?.id,
    quantity: 0,
    image_url: currentMainProductImage,
    total: 0,
  };
  const isProductInCart = cart?.cart.find((product) => product.id === id);

  // Effects
  useEffect(() => {
    getProduct();
  }, []);
  // Methods
  async function getProduct() {
    try {
      setLoading(true);
      const result = await masterApi("getProduct", "GET", {}, searchId);
      if (result?.id) {
        setProduct(result);
        setcurrentMainProductImage(image_url + result?.images[0]?.imageName);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  const handleCurrentImage = (image) => {
    setcurrentMainProductImage(image);
  };
  const handleAdd = () => {
    dispatch(cartActions?.addToCart(productForUpdation))
  };

  const handleRemove = () => {
    dispatch(cartActions?.removeFromCart(productForUpdation))
  };
  return (
    <Box
      component={"div"}
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {loading ? (
        <>
          <Box component={"div"} sx={loadingProductStyles.mainLoaderContainer}>
            <Box
              component={"div"}
              sx={loadingProductStyles.productDataContainer}
            >
              <Box component={"div"}>
                <Shimmer
                  shape={"rectangular"}
                  animation={"wave"}
                  height={300}
                  width={300}
                />
                <Box
                  component={"div"}
                  sx={loadingProductStyles.imageGridLoader}
                >
                  <Shimmer shape={"rounded"} height={50} width={50} />
                  <Shimmer shape={"rounded"} height={50} width={50} />
                  <Shimmer shape={"rounded"} height={50} width={50} />
                </Box>
              </Box>
              <Box component={"div"}>
                <Shimmer shape={"text"} height={20} width={300} />
                <Box
                  component={"div"}
                  sx={loadingProductStyles.imageGridLoader}
                >
                  <Shimmer shape={"rounded"} height={50} width={50} />
                  <Shimmer shape={"rounded"} height={50} width={50} />
                  <Shimmer shape={"rounded"} height={50} width={50} />
                  <Shimmer shape={"rounded"} height={50} width={50} />
                </Box>
                <Shimmer shape={"text"} height={20} width={150} />
                <Shimmer shape={"text"} height={20} width={300} />
                <Shimmer shape={"text"} height={20} width={200} />
                <Shimmer shape={"text"} height={20} width={150} />
                <Box sx={loadingProductStyles.productButton}>
                  <Shimmer shape={"rounded"} height={50} width={300} />
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Box component={"div"} sx={loadingProductStyles.mainLoaderContainer}>
            <Box component={"div"} sx={productStyles.twoBoxContainer}>
              <Box component={"div"} sx={productStyles.firstBoxContainer}>
                <Box component={"div"}>
                  <img
                    alt="product"
                    height={200}
                    src={currentMainProductImage}
                  />
                </Box>
                <Box component={"div"}>
                  <ProductGrid
                    imagesArray={images}
                    handleClick={handleCurrentImage}
                  />
                </Box>
              </Box>
              <Box component={"div"} sx={productStyles.secondBoxContainer}>
                <Typography variant="h6" marginBottom={"10px"}>
                  {product?.name}
                </Typography>
                <Typography variant="p" marginBottom={"10px"} component={"p"}>
                  <Typography variant="span" component={"span"}>
                    Brand:ZBay
                  </Typography>
                </Typography>
                <Typography variant="p" component={"p"} marginBottom={"8px"}>
                  Category:{product?.category?.category_name}
                </Typography>
                <Typography variant="p" component={"p"} marginBottom={"30px"}>
                  Rated:
                  <Rating value={product?.rating} readOnly />
                </Typography>
                <Typography variant="h5" sx={productStyles.productPrice}>
                  ₹{product?.Price}
                </Typography>
                <Typography variant="p" component={"p"} marginBottom={"35px"}>
                  Stock Available: {product?.quantity}
                </Typography>
                <Box>
                  {isProductInCart ? (
                    <>
                      <Box sx={quantityAdder.mainBox}>
                        <>
                          <Button
                            sx={{
                              border: "1px solid red",
                              width: "20px",
                              minWidth: "25px",
                              visibility: `${
                                isProductInCart ? "visible" : "hidden"
                              }`,
                              padding: "5px",
                            }}
                            onClick={() => handleRemove(productForUpdation)}
                          >
                            <Remove fontSize="12px" />
                          </Button>
                          <Typography
                            style={{
                              visibility: `${
                                isProductInCart ? "visible" : "hidden"
                              }`,
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
                    </>
                  ) : (
                    <>
                        <PrimaryButton buttonColor={"primary"} text={"Add To Cart"} buttonSize={"Large"} handleClick={handleAdd}/>
                    </>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default SingleProduct;
