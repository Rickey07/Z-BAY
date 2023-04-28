import React from 'react';
import { Typography,Paper,Box,Divider } from '@mui/material';
import VoucherBox from './VoucherBox';
import { useSelector } from 'react-redux';
import { FixedVariables } from '../../Constants/Configurations/FixedVariables';

const CartInformationBox = () => {

    const {cart,total,voucherApplied} = useSelector((state) => state.cart)
    const {Shipping_on_every_item} = FixedVariables

  return (
    <Paper component={"div"} elevation={2} sx={{ p: 3 }}>
    <Box
      component={"div"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Typography component={"span"}>SubTotal</Typography>
      <Typography component={"span"}>
        ₹{total + voucherApplied?.discount}
      </Typography>
    </Box>
    <Box
      component={"div"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Typography component={"span"}>Shipping</Typography>
      <Typography component={"span"}>
        ₹{Shipping_on_every_item}
      </Typography>
    </Box>
    <Box
      component={"div"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Typography component={"span"}>Tax</Typography>
      <Typography component={"span"}>₹0</Typography>
    </Box>
    <Box
      component={"div"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Typography component={"span"}>Discount</Typography>
      <Typography component={"span"}>
        ₹{voucherApplied?.discount}
      </Typography>
    </Box>
    <Divider />
    <Typography variant="p" component={"p"} textAlign={"right"}>
      {total}
    </Typography>
    <VoucherBox />
    {/* <Box component={"div"} display={"flex"} justifyContent={"space-between"}>
        <Typography component={"span"}>Total</Typography>
        <Typography component={"span"}>₹{total}</Typography>
      </Box>
      <Divider sx={{mt:2}}/>
      <TextField variant="outlined" label={"Voucher"} sx={{mt:4,mb:2}} size="small" fullWidth/>
      <PrimaryButton variant={"outlined"} color={"primary"} fullWidth={true} text={"Apply Voucher"} /> */}
  </Paper>
  )
}

export default CartInformationBox
