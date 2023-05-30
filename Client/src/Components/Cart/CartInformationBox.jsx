import React from "react";
import { Typography, Paper, Box, Divider, useTheme } from "@mui/material";
import VoucherBox from "./VoucherBox";
import { useSelector } from "react-redux";
import { FixedVariables } from "../../Constants/Configurations/FixedVariables";

const CartInformationBox = ({ cart, total, voucherApplied, hideButtons }) => {
  const { Shipping_on_every_item } = FixedVariables;
  const theme = useTheme();

  return (
    <Paper component={"div"} elevation={2} sx={{ p: 3 }}>
      <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
        <Typography
          component={"span"}
          sx={{
            color: theme?.palette?.secondary?.contrastText,
            fontWeight: "bold",
          }}
        >
          SubTotal
        </Typography>
        <Typography component={"span"}>
          ₹{total + voucherApplied?.discount}
        </Typography>
      </Box>
      <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
        <Typography
          component={"span"}
          sx={{
            color: theme?.palette?.secondary?.contrastText,
            fontWeight: "bold",
          }}
        >
          Shipping
        </Typography>
        <Typography component={"span"}>₹{Shipping_on_every_item}</Typography>
      </Box>
      <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
        <Typography
          component={"span"}
          sx={{
            color: theme?.palette?.secondary?.contrastText,
            fontWeight: "bold",
          }}
        >
          Tax
        </Typography>
        <Typography component={"span"}>₹0</Typography>
      </Box>
      <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
        <Typography
          component={"span"}
          sx={{
            color: theme?.palette?.secondary?.contrastText,
            fontWeight: "bold",
          }}
        >
          Discount
        </Typography>
        <Typography component={"span"}>₹{voucherApplied?.discount}</Typography>
      </Box>
      <Divider />
      <Typography
        variant="p"
        component={"p"}
        textAlign={"right"}
        sx={{
          color: theme?.palette?.secondary?.contrastText,
          fontWeight: "bold",
        }}
      >
        ₹{total}
      </Typography>
      {!hideButtons && <VoucherBox />}
    </Paper>
  );
};

export default CartInformationBox;
