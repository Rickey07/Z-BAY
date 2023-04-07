import React from 'react';
import { Button,CircularProgress } from '@mui/material';

const ActionButton = ({buttonVariant,Text,isLoading,Icon,handleClick}) => {

    const actionButtonStyles  = {
        backgroundColor:"rgb(78, 151, 253)",
        boxShadow:"rgba(43, 52, 69, 0.1) 0px 4px 16px",
        borderRadius:"8px",
        maxWidth:"max-content",
        fontSize:"0.875rem",
        cursor:"pointer",
        padding:"6px 16px"

    }

  return (
    <Button sx={actionButtonStyles}  onClick={handleClick} variant={buttonVariant} disabled={isLoading}>    
        {
            isLoading ? <CircularProgress size={15}/> : Icon
        }
        {Text}  
    </Button>
  )
}

export default ActionButton
