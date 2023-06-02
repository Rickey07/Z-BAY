import React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const DashboardCard = ({ title, data, percentage, up, isLoading }) => {
  const theme = useTheme();
  return (
    <Paper elevation={0} sx={{ p: 2, position: "relative",minHeight:"80px" }}>
      
      {
        !isLoading && (
          <>
              <Typography component={"h6"} variant={"h6"} color={"primary"}>
            {title}
          </Typography>
          <Typography
            component={"h3"}
            variant={"h6"}
            sx={{ fontWeight: "bold" }}
          >
            {data}
          </Typography>
          <Box component={"div"}>
            <Typography component={"small"} variant={"small"}>
              9350
            </Typography>
          </Box>
          </>
        )
      }
        

      <Box sx={{ position: "absolute", top:24,left:50 }}>
        {isLoading && <InfinitySpin width="200" color={theme.palette.primary.main} />}
      </Box>
    </Paper>
  );
};

export default DashboardCard;
