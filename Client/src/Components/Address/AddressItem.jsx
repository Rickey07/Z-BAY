import React from 'react';
import { Link } from 'react-router-dom';
import { Paper,Typography,Chip, Box } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const AddressItem = ({handleDelete,handleEdit,addressType,Phone,Landmark,_id}) => {
  return (
    // <Link to={"#"} style={{textDecoration:"none"}}>
    <Paper
      component={"div"}
      elevation={1}
      sx={{ display: "flex", justifyContent: "space-between", p: 2 , mb:3 }}
    >
      <Chip size="small" label={addressType && addressType} />  
      <Typography component={"p"}>{Landmark && Landmark}</Typography>
      <Typography component={"p"}>{Phone && Phone}</Typography>
      <Box sx={{display:"flex",gap:"5px"}}>
        <Edit onClick={() => handleEdit(_id)}/>
        <Delete onClick={() => handleDelete(_id)}/>
      </Box>
    </Paper>
  // </Link>
  )
}

export default AddressItem
