import { ReplayRounded } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import brokenUi from '../../assets/Images/brokenUI.jpg'
import PrimaryButton from '../Buttons/PrimaryButton';

const FallbackMain = () => {
    const reloadPage = () => {
        window.location.reload();
    }
  return (
    <div>
        <Container fixed sx={{display:"flex",justifyContent:'center',flexDirection:"column",gap:"14px"}}>
            <Box style={{height:"400px"}}>
                <img alt='ui-broke' src={brokenUi} style={{width:"100%",height:'100%',objectFit:"contain",display:"block"}}></img>
            </Box>
            <Typography variant='h6'>Looks Like Something Went Wrong but we're not exactly sure what went wrong!</Typography>
            <PrimaryButton text={"Retry"} handleClick={reloadPage} Icon={<ReplayRounded fontSize='large'/>}/>
        </Container>
    </div>
  )
}

export default FallbackMain
