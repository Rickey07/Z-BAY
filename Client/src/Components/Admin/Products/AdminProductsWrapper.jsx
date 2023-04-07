import React, { useState } from "react";
import CreateProduct from "./createProduct";
import { Box, Paper } from "@mui/material";
import NavTabs from "../../Tabs/Tabs";

const AdminProductsWrapper = () => {
  const tabsNavigationValues = ["All Products", "Create Product"];
  const [activeTab, setActiveTab] = useState(tabsNavigationValues[0]);

  const handleChange = (value, newValue) => {
    setActiveTab(newValue);
  };

  const renderedComponent =
    activeTab === "Create Product" ? <CreateProduct /> : "All Products";

  return (
    <Box component={"div"}>
      <Paper
        elevation={0}
        style={{ padding: "48px", marginLeft: "8%", border: "2px solid blue" }}
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
