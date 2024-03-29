import React, { useState } from "react";
import { TextField, Box } from "@mui/material";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../redux/CartSlice";
import { FixedVariables } from "../../Constants/Configurations/FixedVariables";
import { Cancel } from "@mui/icons-material";

const VoucherBox = () => {
  // States
  const [voucherText, setVoucherText] = useState("");
 
  // Redux Imports
  const dispatch = useDispatch();
  const { voucherApplied } = useSelector((state) => state.cart);
  const {name,discountPercentage} = FixedVariables.voucher
  
  // Methods
  const handleVoucherChange = (e) => {
    setVoucherText(e.target.value);
  };

  const applyVoucher = () => {
    dispatch(cartActions.applyVoucher(discountPercentage))
  }

  const removeVoucher = () => {
    dispatch(cartActions.removeVoucher())
  }
  return (
    <div>
      <Box sx={{position:"relative"}}>
        <TextField
          variant="outlined"
          label={"Voucher"}
          helperText={`Coupon Code:${name}`}
          sx={{ mt: 4, mb: 2 }}
          size="small"
          fullWidth
          disabled={voucherApplied?.discount !== 0}
          onChange={handleVoucherChange}
        />
        <PrimaryButton
          variant={"outlined"}
          color={"primary"}
          fullWidth={true}
          text={
            voucherApplied?.discount === 0 ? "Apply Voucher" : "Voucher Applied"
          }
          disabled={voucherText !== name || voucherApplied?.discount !== 0}
          handleClick={applyVoucher}
        />
      {  voucherApplied?.discount !== 0 &&
        <Cancel sx={{position:"absolute",top:40,right:10,cursor:"pointer"}} onClick={removeVoucher}/>}
      </Box>
    </div>
  );
};

export default VoucherBox;
