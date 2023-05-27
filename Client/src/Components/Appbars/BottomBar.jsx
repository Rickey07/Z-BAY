import React from 'react';
import { Badge, Box } from '@mui/material';
import {Link} from 'react-router-dom'
import { HomeOutlined,Inventory, Person, ShoppingBag } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const BottomBar = () => {
    const everyLinkStyle = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textDecoration:"none",
        color:"#101010"
    }
    const {cart} = useSelector((state) => state.cart)
  return (
    <div>
        <Box sx={{display:"flex",backgroundColor:"#fff",justifyContent:"space-around",zIndex:1300,height:"64px",position:"fixed",left:0,right:0,bottom:0,boxShadow:"0px 1px 4px 3px rgba(0, 0, 0, 0.1)"}}>
            <Link to={"/"} style={everyLinkStyle}>
                <HomeOutlined />
                Home
            </Link>
            <Link style={everyLinkStyle}>
                <Inventory/>
                Products
            </Link>
            <Link style={everyLinkStyle}>
                <Badge badgeContent={cart.length} color={"primary"}>
                    <ShoppingBag/>
                </Badge>
                Cart
            </Link>
            <Link style={everyLinkStyle}>
                <Person/>
                Account
            </Link>
        </Box>
    </div>
  )
}

export default BottomBar
