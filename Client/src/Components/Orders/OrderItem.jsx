import { ArrowForward } from "@mui/icons-material";
import { Chip, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const OrderItem = () => {
  return (
    <div>
      <Link to={"#"} style={{textDecoration:"none"}}>
        <Paper
          component={"div"}
          elevation={1}
          sx={{ display: "flex", justifyContent: "space-between", p: 2 , mb:3 }}
        >
          <Typography component={"p"}>#12345</Typography>
          <Chip size="small" label={"pending"} />
          <Typography component={"p"}>Nov 10,2022</Typography>
          <Typography component={"p"}>350</Typography>
          <ArrowForward />
        </Paper>
      </Link>
    </div>
  );
};

export default OrderItem;
