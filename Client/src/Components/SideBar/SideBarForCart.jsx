import { Add, Cancel, Close, ShoppingBasket } from '@mui/icons-material';
import { Avatar, Box, Divider, Drawer, IconButton, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
import CartItem from '../Cart/CartItem';
import { cartActions } from '../../redux/CartSlice';
import PrimaryButton from '../Buttons/PrimaryButton';

const SideBarForCart = ({isOpen,handleClose}) => {
    const styles = {
        cartItemsStyle:{
            display:"flex",
            justifyContent:"space-between",
            paddingLeft:"10px",
            paddingRight:"10px",
            paddingBottom:"20px",
            paddingTop:"20px"
        },
        quantityButtons:{
            display:"flex",
            flexDirection:"column",
            gap:'8px',
            justifyContent:"center",
            alignItems:'center',
            width:"40px"
        },
        mainCartItemWrapper:{
            display:"flex",
            gap:"4px",
            justifyContent:"space-between",
            alignItems:"center",
            padding:"10px"
        },
        cartItemProductName:{
            marginBottom:"0px",
            marginTop:"0px",
            fontSize:"14px",
            overflow:"hidden",
            textOverflow:"ellipsis"
        }
    }
    // Redux Imports and other Imports
    const {cart,total} = useSelector((state) => state.cart);
    const navigate = useNavigate()
    const theme = useTheme();

    // Variables
    const totalOfCart = 50
    const textForCheckout = total!=="FALSE" ? `₹${total && total} Checkout Now` : "Your Cart is Empty"

    // Methods
    const handleClick = () => {
        navigate('/cart')
    }

  return (
    <div>
      <Drawer anchor='right' style={{zIndex:1600}} open={isOpen} onClose={handleClose}>
        <Box width={300}>
            <Box height={"90vh"} overflow={"auto"}>
            <Box sx={styles.cartItemsStyle}>
                <Box display={"flex"} alignItems={"center"}>
                    <ShoppingBasket/>
                    <Typography component={"p"} variant={"p"}>{cart?.length} Items</Typography>
                </Box>
                <Box>
                    <IconButton onClick={handleClose}>
                        <Cancel/>
                    </IconButton>
                </Box>
            </Box>
            <Divider/>
            {cart && cart.map((cartItem) => {
                return <CartItem key={cartItem.id} cartDetails={cartItem} sideBar={true}/>
            })}
            </Box>
        <Box display={"flex"} sx={{pr:1,pl:1,pt:2,pb:2}} gap={1} flexDirection={"column"}>
            <PrimaryButton variant={"contained"} size={"large"} color={"primary"} text={textForCheckout}/>
            <PrimaryButton variant={"outlined"} size={"large"} handleClick={handleClick}  text={"view Cart"} />
        </Box>
        </Box>
      </Drawer>
    </div>
  )
}

export default SideBarForCart
