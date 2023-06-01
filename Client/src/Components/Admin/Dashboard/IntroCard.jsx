import { Paper, Typography, Box, useTheme } from "@mui/material";
import React from "react";
import Welcome from "../../../assets/Icons/welcome.svg";

const IntroCard = ({
  IntroLine,
  tagline,
  stats1,
  statsLine1,
  stats2,
  statsLine2,
  totalSales,
}) => {

    const theme = useTheme()

  return (
    <div>
      <Paper
        component={"div"}
        elevation={0}
        sx={{ position: "relative", p: 3 }}
      >
        <Typography
          component={"h3"}
          variant={"h3"}
          sx={{ fontSize: "1.5rem", mb: 1 }}
          color={"primary"}
        >
          {IntroLine}
        </Typography>
        <Typography
          component={"p"}
          variant={"p"}
          sx={{ fontSize: "1rem", mb: 2,color:theme.palette.secondary.contrastText }}
        >
          {tagline}
        </Typography>
        <Typography
          component={"h3"}
          variant={"h3"}
          sx={{ fontSize: "1.5rem", mb: 1,fontWeight:"bold" }}
        >
          {stats1}
        </Typography>
        <Typography
          component={"p"}
          variant={"p"}
          sx={{ fontSize: "1rem", mb: 2 }}
        >
          {statsLine1}
        </Typography>
        <Typography
          component={"h3"}
          variant={"h3"}
          sx={{ fontSize: "1.5rem", mb: 1,fontWeight:"bold" }}
        >
          {stats2}
        </Typography>
        <Typography component={"p"} variant={"p"}>
          {statsLine2}
        </Typography>
        <Box
          sx={{ position: "absolute", right: "24px", bottom: 0 }}
          component={"div"}
        >
          <img
            alt="logoImage"
            style={{ height: "100%", width: "100%" }}
            src={Welcome}
          ></img>
        </Box>
      </Paper>
    </div>
  );
};

export default IntroCard;
