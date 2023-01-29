import React from "react";
import { Grid, Box, Paper, Typography, useTheme } from "@mui/material";
import HomePageHero1 from "../assets/Images/HomePageHero1.jpg";

const Item = (props) => (
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Typography
      sx={{
        fontFamily: "Manrope",
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "40px",
        color: "purple",
        width:"100%",
        lineHeight: "75px",
      }}
      component="p"
    >
      Transforming the future of e-commerce with the help of New Emerging
      Technologies
    </Typography>
    <Typography sx={{}} component="p">
      Z-Bay connects with your needs followed by Yet bed any for travelling
      assistance indulgence unpleasing. Not thoughts all exercise blessing.
      Indulgence way everything joy alteration boisterous the attachment. Party
      we years to order allow asked of.
    </Typography>
  </Box>
);

const StaticGridContainer = (props) => {
  const theme = useTheme();
  return (
    <>
      <Paper elevation={6} sx={{borderRadius:"8px"}}>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Item color={theme}></Item>
          </Grid>
          <Grid item md={6} xs={12}>
            <img
              src={HomePageHero1}
              className="landing-page-image-1"
              loading="lazy"
            ></img>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default StaticGridContainer;
