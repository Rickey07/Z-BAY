import { Box ,Paper} from "@mui/material";
import NavTabs from "../../Tabs/Tabs";
import React, { useState } from "react";
import AllCategories from "./AllCategories";
import CreateCategory from "./createCategory";

const AdminCategoriesWrapper = () => {
  const tabsNavigationValues = ["All Categories", "Create Category"];
  const [activeTab, setActiveTab] = useState(tabsNavigationValues[0]);

  const handleChange = (value, newValue) => {
    setActiveTab(newValue);
  };

  const renderedComponent = activeTab === "All Categories" ? <AllCategories/> : <CreateCategory/>
  return <div>
     <Box component={"div"}>
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
  </div>;
};

export default AdminCategoriesWrapper;
