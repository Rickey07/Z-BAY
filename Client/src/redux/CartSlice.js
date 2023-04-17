import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;
      const isAlreadyAdded = state.cart.find((product) => product.id === id);
      let updatedCart = state.cart;
      if (isAlreadyAdded) {
        updatedCart = state.cart.map((product) => {
          if (product.id === id) {
            product.quantity = product.quantity + 1;
            product.total = product.quantity * product.Price;
          }
          return product;
        });
      } else {
        payload.quantity = 1;
        payload.total = payload.quantity * payload.Price
        updatedCart.push(payload);
      }
      state.cart = updatedCart;
      state.total = updatedCart.map((cartItem) => cartItem.total)?.reduce((a,b) => a+b)
    },
    removeFromCart(state, { payload }) {
      let updatedCart = state.cart;
      const addedProduct = state.cart.find(
        (product) => product.id === payload.id
      );
      if (addedProduct.quantity === 1) {
        updatedCart = updatedCart.filter(
          (product) => product.id !== payload.id
        );
      } else {
        updatedCart = updatedCart.map((product) => {
          if (product.id === payload.id) {
            product.quantity = product.quantity - 1;
            product.total = product.total - product.Price;
          }
          return product;
        });
      }
      state.cart = updatedCart;
      state.total = updatedCart.length > 0 && updatedCart.map((cartItem) => cartItem.total)?.reduce((a,b) => a+b)
    },
    removeSingleItem(state,{payload}) {
      state.cart = state.cart.filter((cartItem) => cartItem.id !==  payload.id)
      state.total = state.cart.length > 0 && state.cart.map((cartItem) => cartItem.total)?.reduce((a,b) => a+b)
    }
  },
});

export const cartActions = cartSlice.actions;

export const cartSliceReducer = cartSlice.reducer;
