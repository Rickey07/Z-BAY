import { Grid } from "@mui/material";
import DashboardCard from "./DashboardCard";
import IntroCard from "./IntroCard";
import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <IntroCard
            IntroLine={"Good Morning, Prabadhya!"}
            tagline={"Here’s what happening with your store today!"}  
            stats1={"15,350.25"}
            statsLine1={"Total Visits"}
            stats2={"$10,360.66"}
            statsLine2={"Today’s total sales"} 
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <DashboardCard title={"Order"} data={"32,350"} />
            </Grid>
            <Grid item md={6}>
              <DashboardCard title={"Order"} data={"32,350"} />
            </Grid>
        
            <Grid item md={6}>
              <DashboardCard title={"Order"} data={"32,350"} />
            </Grid>
            <Grid item md={6}>
              <DashboardCard title={"Order"} data={"32,350"} />
            </Grid>
            </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
