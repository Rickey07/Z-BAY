import { Typography, Grid, Box, Card } from "@mui/material";
import React from "react";
import payment from "../assets/Images/payment.jpg";
import delivery from "../assets/Images/delivery.jpg";
import wishlist from "../assets/Images/wishlist.jpg";
import { useTheme } from "@emotion/react";

const FeaturesContainer = () => {
  const theme = useTheme();
  const featureData = [
    {
      featureName: "Add Favourites To WishList",
      image: wishlist,
    },
    {
      featureName: "Hassle Free Payment",
      image: payment,
    },
    {
      featureName: "Instant Delivery",
      image: delivery,
    },
  ];

  const Feature = ({ children }) => {
    return (
      <>
        <Grid
          key={children.name}
          item
          md={4}
          sx={{
            height: "300px",
          }}
          xs={12}
        >
          <Card
            sx={{
              background: `linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)`,
              // padding: "10px",
              boxShadow: `${theme.mainTheme.primaryColor}`,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                background: `${theme.mainTheme.mainBackgroundColor}`,
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // gap: "20px",
              }}
            >
              <Typography component={"h2"}>{children.featureName}</Typography>
              <img
                src={children.image}
                style={{ height: "200px", width: "300px", borderRadius: "8px" }}
              />
              <Typography
                component={"p"}
                sx={{
                  color: theme.mainTheme.primaryColor,
                  width: "fit-content",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                neque ratione cupiditate ut,...
              </Typography>
            </Box>
          </Card>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Typography
        component={"h3"}
        variant={"h4"}
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
          color: `${theme.mainTheme.primaryColor}`,
        }}
      >
        What Z-BAY Offers
      </Typography>
      <Grid spacing={2} mdoffset={2} container>
        {featureData.map((feature) => {
          return <Feature children={feature} />;
        })}
      </Grid>
    </>
  );
};

export default FeaturesContainer;
