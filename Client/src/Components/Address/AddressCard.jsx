import React from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
const AddressCard = ({
  addressType,
  handleEdit,
  handleDelete,
  addressLine1,
  contactNo,
  selected,
  _id,
  handleSelect,
}) => {
  return (
    <div>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          position: "relative",
          backgroundColor: "rgb(246, 249, 252)",
          cursor: "pointer",
          border: selected === _id ? "1px solid red" : "",
        }}
        onClick={() => handleSelect(_id)}
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            gap: "5px",
            right: "0px",
            top: "10px",
          }}
        >
          <IconButton size="small" onClick={() => handleEdit(_id)}>
            <Edit fontSize="8px" />
          </IconButton>
          <IconButton size="small" onClick={() => handleDelete(_id)}>
            <Delete fontSize="8px" />
          </IconButton>
        </Box>
        <Typography variant="p" component={"p"} sx={{ mt: 1 }}>
          {addressType}
        </Typography>
        <Typography variant="span" component={"p"} fontSize={"14px"}>
          {addressLine1}
        </Typography>
        <Typography variant="span" component={"p"} fontSize={"14px"}>
          {contactNo}
        </Typography>
      </Paper>
    </div>
  );
};

export default AddressCard;
