import React from 'react'
import { Box } from '@mui/system'
import { Card,CardHeader,IconButton,CardMedia, CardContent, Typography } from '@mui/material'
import {FavoriteBorderRounded } from '@mui/icons-material'
import { useTheme } from '@emotion/react'

const CarouselProduct = (prop) => {
  const theme = useTheme();

  return (
    <Card
    variant='outlined'
    sx={{borderRadius:"7px"}}
    >
      <CardHeader action={
        <IconButton>
          <FavoriteBorderRounded sx={{"&:hover":{
            color:`${theme.mainTheme.primaryColor}`
          }}}/>
        </IconButton>
      }>
      </CardHeader>
      <CardMedia>
        <img src={prop.img} style={{width:"150px",height:"150px"}}/>
      </CardMedia>
      <CardContent>
        <Typography component={"p"}>
            {prop.name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CarouselProduct