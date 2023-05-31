import React from 'react';
import { AppBar,Toolbar,Typography } from '@mui/material';
import { ErrorOutlineOutlined } from '@mui/icons-material';


const FallbackHeader = () => {

  return (
    <AppBar position="static" >
      <Toolbar >
        <div >
          <ErrorOutlineOutlined  />
          <Typography variant="h6" >
            Something went wrong with the header
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default FallbackHeader