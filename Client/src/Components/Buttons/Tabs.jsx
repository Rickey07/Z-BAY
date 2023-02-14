import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function ColorTabs(prop) {
  // Always Try to Put the state in the parent container for reusability purpose

  const handleChange = (event, newValue) => {
    prop.setCurrentTab(newValue);
    prop.setError({
      email: false,
      password: false,
      lastname: false,
      firstname: false,
    });
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Tabs
        value={prop.currentTab}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="Login" label="Login" />
        <Tab value="Register" label="Register" />
      </Tabs>
    </Box>
  );
}
