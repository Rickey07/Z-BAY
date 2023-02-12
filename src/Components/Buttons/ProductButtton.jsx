import { useTheme } from "@emotion/react";
import { Button } from "@mui/material";
import React from "react";

const ProductButtton = (prop) => {
  const theme = useTheme();

  const handleHide = () => {
    prop.setQuantityToBeShown(true);
  };

  return (
    <>
      <Button
        sx={{
          border: `0.5px solid ${theme.mainTheme.primaryColor}`,
          borderRadius: "8px",

        }}
        onClick={handleHide}
      >
        {prop.add ? "ADD" : "REMOVE"}
      </Button>
    </>
  );
};

export default ProductButtton;
