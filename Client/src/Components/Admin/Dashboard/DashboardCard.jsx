import React from "react";
import { Box, Paper, Typography, useTheme } from "@mui/material";

const DashboardCard = ({ title, data, percentage, up }) => {
  const theme = useTheme();
  return (
    <Paper elevation={0} sx={{ p: 2 }}>
      <Typography component={"h6"} variant={"h6"} color={"primary"}>
        {title}
      </Typography>
      <Typography component={"h3"} variant={"h6"} sx={{fontWeight:"bold"}}>
        {data}
      </Typography>
      <Box component={"div"}>
        <Typography component={"small"} variant={"small"}>
          9350
        </Typography>
      </Box>
    </Paper>
  );
};

export default DashboardCard;
