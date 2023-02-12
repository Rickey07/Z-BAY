import { Typography } from '@mui/material';
import React from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import { Box } from '@mui/system';
import { useTheme } from '@emotion/react';

const CTABanner = (prop) => {
    const theme = useTheme();

    // Default Styles
    const CTAStyles = {
        borderRadius:"8px",
        display:"flex",
        justifyContent:"space-between",
        margin:"0 auto",
        width:"50%",
        background:`${theme.mainTheme.mainBackgroundColor}`,
        padding:"40px"
    }
  return (
    <>
        <Box sx={CTAStyles}>
            <Typography component={"h4"} variant={"h6"}>
                {prop.CTAHeading}
            </Typography>
            <PrimaryButton text={"GET STARTED"} buttonSize={"large"}/>
        </Box>
    </>
  )
}

export default CTABanner