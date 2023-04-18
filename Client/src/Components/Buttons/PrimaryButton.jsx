import React from "react";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";

const PrimaryButton = (prop) => {
  return (
    <Button
      variant={prop.variant ? prop.variant : "contained"}
      color={prop.buttonColor ? prop.buttonColor : "primary"}
      size={prop.buttonSize ? prop.buttonSize : "small"}
      fullWidth={prop.fullWidth}
      onClick={prop.handleClick}
      disabled={prop.isLoading}
    >
      {prop.isLoading ? <CircularProgress size={15} /> : prop.Icon}
      {prop.isLoading ? prop.text + "..." : prop.text}
    </Button>
  );
};

export default PrimaryButton;
