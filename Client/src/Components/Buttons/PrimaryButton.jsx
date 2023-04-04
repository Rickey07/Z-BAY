import React from "react";
import { Button } from "@mui/material";

const PrimaryButton = (prop) => {
  return (
    <Button
      variant={prop.variant?prop.variant:"contained"}
      color={prop.buttonColor ? prop.buttonColor : "primary"}
      size={prop.buttonSize ? prop.buttonSize : "small"}
      onClick={prop.handleClick}
    >
      {prop.text}
    </Button>
  );
};

export default PrimaryButton;
