import { Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import OrderItem from "./OrderItem";

const OrderWrapper = ({purchases}) => {
  // Media Query
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      {!mobile && (
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

      {purchases && purchases?.map((purchase) => {
        return <OrderItem key={purchase?._id} {...purchase}/>;
      })}
    </div>
  );
};

export default OrderWrapper;
