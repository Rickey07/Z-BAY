import React from "react";
import { TextField } from "@mui/material";

const SearchbarForFooter = (prop) => {
  return (
    <>
      <TextField
        error={prop.error}
        helperText={prop.error?prop.errorText:""}
        onChange={prop.onChange}
        name={prop.name}
        required={prop.required}
        fullWidth={prop.width}
        id="outlined-basic"
        label={prop.label}
        variant={prop.searchBarVariant ? prop.searchBarVariant : "outlined"}
      />
    </>
  );
};

export default SearchbarForFooter;
