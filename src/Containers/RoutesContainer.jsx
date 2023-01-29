import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products, Cart, Wishlist, Login, Home } from "../Pages";

const RoutesContainer = () => {
  return (
    <>
      <div
        style={{
          marginTop: "5rem",
          marginRight: "auto",
          marginLeft: "auto",
          width:"90%"
        }}
      >
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Products"} element={<Products />} />
          <Route path={"/Cart"} element={<Cart />} />
          <Route path={"/Wishlist"} element={<Wishlist />} />
          <Route path={"/Login"} element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default RoutesContainer;
