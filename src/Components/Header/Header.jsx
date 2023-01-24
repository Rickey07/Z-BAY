import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import { Container,
        Toolbar,
        AppBar, 
        Typography,
        Box,
        IconButton,
        Button,
        useMediaQuery 
} from '@mui/material';
import {Shop2Outlined,
        FavoriteBorder, 
        ShoppingCart,
        Inventory2, 
        Menu
} from '@mui/icons-material'


const Header = () => {
  const [mobileMenu,setMobileMenu] = useState(false);
  const theme = useTheme();
  const FONT_SIZE_NAVBAR_ICONS = "30px"
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  // Methods

  const handleOpen = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
      <AppBar 
        position='static'
      >
        <Container 
          maxWidth="xl"
        >
          <Toolbar disableGutters>
            <Shop2Outlined sx={{display:{xs:'flex',md:'flex'},mr:3}}/>
            <Typography
              variant='h6'
              noWrap
              component="a"
              href="/"
              sx={{
                mr:2,
                textDecoration:"none",
                color:"#fff"
              }}
            >
              Z-BAY
          </Typography>
          {
            isMobile
            ?
            <Box sx={{flexGrow:1,display:{xs:"flex",md:"flex"},justifyContent:"flex-end",alignItems:"center"}}>
               <Menu sx={{mr:4,fontSize:FONT_SIZE_NAVBAR_ICONS,cursor:"pointer"}} onClick={handleOpen}/>
            </Box>
            :
            <Box sx={{flexGrow:1,display:{xs:"none",md:"flex"},justifyContent:"flex-end",alignItems:"center"}}>
            <Inventory2 sx={{mr:4,fontSize:FONT_SIZE_NAVBAR_ICONS,cursor:"pointer"}}/>
            <FavoriteBorder sx={{mr:4,fontSize:FONT_SIZE_NAVBAR_ICONS,cursor:"pointer"}}/>
            <ShoppingCart sx={{mr:4,fontSize:FONT_SIZE_NAVBAR_ICONS,cursor:"pointer"}}/>
            <IconButton aria-label='user-account/login' component="label">
                <Button variant="outlined" 
                        sx={{mr:4,color:"#fff",border:"1px solid #fff",cursor:"pointer"}}>
                  Login
                </Button>
            </IconButton>
          </Box>
          }
          
          </Toolbar>
        </Container>

      </AppBar>
  )
}

export default Header