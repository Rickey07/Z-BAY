import { Download } from "@mui/icons-material";
import { Box, Grid, Paper, Typography,useMediaQuery,useTheme } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PrimaryButton from "../Buttons/PrimaryButton";
import CartItem from "../Cart/CartItem";
import CartInformationBox from "../Cart/CartInformationBox";
import { useState } from "react";
import MyBill from "../Documents/MyBill";
import { PDFDownloadLink } from "@react-pdf/renderer";

const OrderSummary = ({ purchases }) => {
  const params = useParams();
  const { orderId } = params;
 
  const productDetailsData =
    purchases && purchases?.find((product) => product.id === orderId);
  const { products, amount, address } = productDetailsData;
  return (
    <div>
      {/* <MyBill/> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap:"wrap",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography component={"h6"} sx={{ fontWeight: "bold" }}>
          Your Order Details
        </Typography>

        <PDFDownloadLink
          document={
            <MyBill products={products} amount={amount} address={address} />
          }
          fileName={"My_ZBay_Bill.pdf"}
        >
          <PrimaryButton text={"Download Bill"} Icon={<Download />} />
        </PDFDownloadLink>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Paper component={"div"} elevation={1} sx={{ p: 3 }}>
            <Typography component={"h4"} sx={{ mb: 1 }}>
              Your Purchases
            </Typography>
            <Box>
              {products &&
                products?.map((product) => {
                  return (
                    <CartItem
                      key={product?.id}
                      cartDetails={product}
                      hideButton={true}
                    />
                  );
                })}
            </Box>
            <Typography component={"h4"} sx={{ mt: 1, mb: 2 }}>
              Shipping Details
            </Typography>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              gap={2}
            >
              <Typography>Name:- {address?.fullName}</Typography>
              <Typography>Email:- {address?.email}</Typography>
              <Typography>
                Shipping Address:-{" "}
                {`${address?.addressLine1} , ${address?.city} , ${address?.zipcode}`}
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={4} xs={12}>
          <CartInformationBox
            hideButtons={true}
            total={amount}
            voucherApplied={{ discount: 0 }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderSummary;
