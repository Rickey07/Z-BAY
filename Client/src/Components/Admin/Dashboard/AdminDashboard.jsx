import { Box, Grid, MenuItem, Paper, Select, Typography } from "@mui/material";
import DashboardCard from "./DashboardCard";
import IntroCard from "./IntroCard";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import getAnalytics from "../../../helpers/APICalls/getAnalytics";
import ChartWrapper from "../../Charts/ChartWrapper";

const AdminDashboard = () => {
  const [statsData, setStatsData] = useState({});
  const [loading, setLoading] = useState(false);
  const { totalPayments, totalUser } = statsData;
  const [viewType,setViewType] = useState("bar")

  useEffect(() => {
    getAnalyticsStats();
  }, []);

  async function getAnalyticsStats() {
    setLoading(true);
    const result = await getAnalytics();
    if (result?.status) {
      setStatsData(result?.data);
    } else {
      toast.error("Error while Fetching Stats");
    }
    setLoading(false);
  }

  const analyticsData = {
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          id: 1,
          label: "Sales",
          data: [15000, 18000, 21000, 24000, 22000, 25000],
          barPercentage:0.4,
          pointStyle:"circle"
        },
        {
          id: 2,
          label: "Expenses",
          data: [8000, 9000, 9500, 11000, 12000, 10000],
          barPercentage:0.4,
          pointStyle:"circle"
        },
      ],
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio:false,
    scales: {
      y: {
        beginAtZero: true
      }
    },
    borderWidth:2,
    borderRadius:10,
  };

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
              <DashboardCard
                title={"Order"}
                data={statsData?.totalOrders ?? "Not able to fetch"}
                isLoading={loading}
              />
            </Grid>
            <Grid item md={6}>
              <DashboardCard
                title={"Overall Payments"}
                data={totalPayments && `₹${totalPayments[0]?.amount}`}
                isLoading={loading}
              />
            </Grid>

            <Grid item md={6}>
              <DashboardCard
                title={"Total Users"}
                data={totalUser && totalUser}
                isLoading={loading}
              />
            </Grid>
            <Grid item md={6}>
              <DashboardCard title={"Sold Items"} data={"32,350"} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid xs={12} sx={{ pl: 2 }}>
          <Paper elevation={0} sx={{ minHeight: "300px", p: 2 }}>
            <Box component={"div"} sx={{display:"flex",justifyContent:"space-between"}}>
              <Typography component={"h6"} variant={"h6"} color={"primary"}>
                Sales & Expense
              </Typography>
              <Select sx={{height:20}} value={viewType} onChange={(e) => setViewType(e.target.value)}>
                <MenuItem value={"line"}>Line</MenuItem>
                <MenuItem value={"bar"}>Bar</MenuItem>
                <MenuItem value={"pie"}>Pie</MenuItem>
              </Select>
            </Box>
            <Box component={"div"} sx={{minHeight:"300px"}}>
              <ChartWrapper type={viewType} data={analyticsData.data} options={options}/>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
