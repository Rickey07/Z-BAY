import React from "react";
import Product from "../Components/Product/Product.jsx";
import { Box, Grid, Drawer, useTheme, useMediaQuery,Typography } from "@mui/material";
import SidebarForFilter from "../Components/SideBar/SidebarForFilter.jsx";
import MainSearchBar from "../Components/SearchBars/MainSearchBar.jsx";
import { useState, useEffect } from "react";
import getAllProducts from "../helpers/APICalls/getAllProducts.js";
import fetchAllCategories from "../redux/CategoriesSlice.js";
import { filterProducts } from "../helpers/Products/filterProducts.js";
import { useSearchParams } from "react-router-dom";
import SingleProduct from "../Components/Product/SingleProduct.jsx";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  // Responsiveness
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  // Redux Imports
  const {selectedCategory,categories} = useSelector((state) => state.category);
  const dispatch = useDispatch();
  // States
  const [filters, setFilters] = useState({
    product_name: "",
    categories: selectedCategory, 
    rating: "",
    sort_by: "asc",
  });
  const [products, setProducts] = useState([]);
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { search } = Object.fromEntries([...searchParams]);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Effects
  useEffect(() => {
    if (!search) {
      fetchAllProducts();
    }
  }, [categories]);

  useEffect(() => {
    if(categories.length===0) {
      dispatch(fetchAllCategories())
    }
  },[])

  useEffect(() => {
    if (!search) {
      const data = filterProducts(filters, products);
      setDataToDisplay([...data]);
    }
  }, [filters, products]);

  // Methods

  const fetchAllProducts = async () => {
    setLoading(true);
    const response = await getAllProducts();
    if (response.success) {
      setProducts(response.products);
    }
    setLoading(false);
  };

  const onSearch = (e) => {
    setFilters({ ...filters, product_name: e.target.value });
  };

  const onSideBarFiltersChange = (e) => {
    if (e.target.name === "category") {
      setFilters((prev) => {
        const copy = JSON.parse(JSON.stringify(prev));
        const { categories } = copy;
        let updatedArray = [...categories];
        if (e.target.checked) {
          updatedArray?.push(e.target.value);
        } else {
          updatedArray = updatedArray.filter((value) => {
            return value !== e.target.value;
          });
        }
        copy.categories = updatedArray;
        return copy;
      });
    } else {
      setFilters({ ...filters, [e.target.name]: e.target.value });
    }
  };

  const openMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const handleClose = () => {
    setMobileMenu(false);
  };

  return (
    <>
   
      <Box
        display={"flex"}
        sx={{p:mobile?1:3}}
        flexDirection={"column"}
        gap={"2rem"}
      >
        <Typography component={"h6"} variant={"h6"}>Products</Typography>
        {/* Check if mobile Menu is open or not  */}
          <Drawer anchor="left" open={mobileMenu && mobile} onClose={handleClose} keepMounted>
            <SidebarForFilter onChange={onSideBarFiltersChange} />
          </Drawer>
        {/* )} */}
        {/* // Show only 1 Product when search through Params  */}
        {search ? (
          <SingleProduct searchId={search} />
        ) : (
          <>
            <MainSearchBar
              onChange={onSearch}
              searchValue={filters?.product_name}
              resultsFoundValue={dataToDisplay?.length}
              handleMobileMenu={openMobileMenu}
            />
            <Grid container spacing={mobile?1:3}>
              {!mobile && (
                <Grid item md={2} xs={10}>
                  <SidebarForFilter onChange={onSideBarFiltersChange} />
                </Grid>
              )}

              <Grid item md={10} xs={12}>
                <Grid container spacing={mobile?3:6}>
                  {(loading ? Array.from(new Array(8)) : dataToDisplay)?.map(
                    (product) => {
                      return (
                        <Grid item md={3} xs={12} key={product?.id}>
                          <Product key={product?.id} {...product} isLoading={loading} />
                        </Grid>
                      );
                    }
                  )}
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Box>
    </>
  );
};

export default Products;
