import { Container } from '@mui/material'
import React from 'react'
import CartContainer from '../Containers/CartContainer'

const Cart = () => {

  return (
    <>
    <h5>Cart</h5>
    <Container maxWidth={"xl"}>
      <CartContainer/>
    </Container>
  
    </>
  )
}

export default Cart