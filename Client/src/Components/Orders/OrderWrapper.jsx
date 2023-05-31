import { Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import OrderItem from "./OrderItem";

const OrderWrapper = ({purchases}) => {
  // Media Query
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  return (
    <div>
      {location.pathname==="/dashboard/orders" && !mobile && (
        <Paper
          component={"div"}
          elevation={0}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 2,
            backgroundColor: "transparent",
          }}
        >
          <Typography component={"p"}>#Order Id</Typography>
          <Typography component={"p"}>Status</Typography>
          <Typography component={"p"}>Order Date</Typography>
          <Typography component={"p"}>Order Total</Typography>
          <Typography component={"p"}></Typography>
        </Paper>
      )}

      {location.pathname === "/dashboard/orders" && purchases && purchases?.map((purchase) => {
        return <OrderItem key={purchase?._id} {...purchase}/>;
      })}
      <Outlet/>
    </div>
  );
};

export default OrderWrapper;
