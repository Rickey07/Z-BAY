import React, { useState } from "react";
import CreateProduct from "./createProduct";
import { Box, Paper } from "@mui/material";
import NavTabs from "../../Tabs/Tabs";
import AllProducts from "./AllProducts";


const AdminProductsWrapper = () => {
  const tabsNavigationValues = ["All Products", "Create Product"];
  const [activeTab, setActiveTab] = useState(tabsNavigationValues[0]);

  const handleChange = (value, newValue) => {
    setActiveTab(newValue);
  };


  const renderedComponent =
    activeTab === "Create Product" ? <CreateProduct /> : <AllProducts/>

  return (
    <Box component={"div"} sx={{mb:2}}>
      <Paper
        elevation={0}
      >
        <NavTabs
          values={tabsNavigationValues}
          handleChange={handleChange}
          activeTab={activeTab}
        />
        {renderedComponent}
      </Paper>
    </Box>
  );
};

export default AdminProductsWrapper;
