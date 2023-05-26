import { Box, useTheme } from '@mui/material';
import React from 'react';
import { createPortal } from 'react-dom';
import {InfinitySpin} from 'react-loader-spinner'

const MainLoader = ({visible}) => {
  const theme = useTheme()
  return (
    <>
   {visible && createPortal(
    <Box sx={{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:'center',justifyContent:"center",backdropFilter:"blur(3px)",top:0,left:0}}>
    <InfinitySpin   width='200'
    color={theme.palette.primary.main}/>
    </Box>,
    document.getElementById("portal-loader")
   )}
   </>
  )
}

export default MainLoader