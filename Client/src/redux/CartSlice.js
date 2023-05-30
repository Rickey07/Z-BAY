import { createSlice } from "@reduxjs/toolkit";
import discountGenerator from "../helpers/Common/discountGenerator";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("products")) ?? [],
    total: JSON.parse(localStorage.getItem("total")) ?? [],
    address:"",
    voucherApplied: {
      discount: JSON.parse(localStorage.getItem("voucher") ?? 0),
    },
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
        payload.total = payload.quantity * payload.Price;
        updatedCart.push(payload);
      }
      state.cart = updatedCart;
      state.total = updatedCart
        .map((cartItem) => cartItem.total)
        ?.reduce((a, b) => a + b);
      if (state.voucherApplied.discount !== 0) {
        const { totalDiscount, totalAfterDiscount } = discountGenerator(
          state.total,
          20
        );
        state.total = totalAfterDiscount;
        state.voucherApplied = { discount: totalDiscount };
        localStorage.setItem(
          "voucher",
          JSON.stringify(state.voucherApplied.discount)
        );
      }
      localStorage.setItem("products", JSON.stringify(updatedCart));
      localStorage.setItem("total", JSON.stringify(state.total));
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
      state.total =
        updatedCart.length > 0 &&
        updatedCart.map((cartItem) => cartItem.total)?.reduce((a, b) => a + b);
      if (state.voucherApplied.discount !== 0) {
        const { totalDiscount, totalAfterDiscount } = discountGenerator(
          state.total,
          20
        );
        state.total = totalAfterDiscount;
        state.voucherApplied = { discount: totalDiscount };
        localStorage.setItem(
          "voucher",
          JSON.stringify(state.voucherApplied.discount)
        );
      }
      localStorage.setItem("products", JSON.stringify(updatedCart));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    removeSingleItem(state, { payload }) {
      state.cart = state.cart.filter((cartItem) => cartItem.id !== payload.id);
      state.total =
        state.cart.length > 0 &&
        state.cart.map((cartItem) => cartItem.total)?.reduce((a, b) => a + b);
      if (state.voucherApplied.discount !== 0) {
        const { totalDiscount, totalAfterDiscount } = discountGenerator(
          state.total,
          20
        );
        state.total = totalAfterDiscount;
        state.voucherApplied = { discount: totalDiscount };
        localStorage.setItem(
          "voucher",
          JSON.stringify(state.voucherApplied.discount)
        );
      }
      localStorage.setItem("products", JSON.stringify(state.cart));
      localStorage.setItem("total", JSON.stringify(state.total));
    },
    applyVoucher(state, { payload }) {
      const total = (payload / 100) * state.total;
      state.total = state.total - total;
      state.voucherApplied = { discount: total };
      localStorage.setItem("total", JSON.stringify(state.total));
      localStorage.setItem(
        "voucher",
        JSON.stringify(state.voucherApplied.discount)
      );
    },
    changeAddress(state,{payload}) {
      state.address = payload
    },
    removeVoucher(state,{payload}) {
      state.total = state.total + state.voucherApplied.discount
      state.voucherApplied.discount = 0
      localStorage.setItem("voucher",state.voucherApplied.discount)
      localStorage.setItem("total",state.total)
    },
    clearCart(state,{payload}) {
      state.cart = [];
      state.total = 0
      state.address = ""
      state.voucherApplied.discount = 0;
      localStorage.clear();
    }
  },
});

export const cartActions = cartSlice.actions;

export const cartSliceReducer = cartSlice.reducer;
