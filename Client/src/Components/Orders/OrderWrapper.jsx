import { Paper,Typography } from '@mui/material';
import React from 'react';
import OrderItem from './OrderItem';

const OrderWrapper = () => {

    const arrayWrapper = ["Links","Hummer","Hii"]

  return (
    <div>
    <Paper
          component={"div"}
          elevation={0} 
          sx={{ display: "flex", justifyContent: "space-between", p: 2,backgroundColor:"transparent" }}
        >
          <Typography component={"p"}>#Order Id</Typography>
          <Typography component={"p"}>Status</Typography>
          <Typography component={"p"}>Order Date</Typography>
          <Typography component={"p"}>Order Total</Typography>
          <Typography component={"p"}></Typography>
        </Paper>    
      {
        arrayWrapper.map((index) => {
            return <OrderItem key={index}/>
        })  
      }
    </div>
  )
}

export default OrderWrapper
