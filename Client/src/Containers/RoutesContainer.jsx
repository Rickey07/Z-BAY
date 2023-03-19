import { useTheme } from "@emotion/react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products, Cart, Wishlist, Login, Home } from "../Pages";
import Admin from "../Pages/Admin";

const RoutesContainer = () => {
  const theme = useTheme();
  return (
    <>
      <div
        style={{
          marginTop: "5rem",
          marginRight: "auto",
          marginLeft: "auto",
          width: "90%",
          backgroundImage: `${theme.mainTheme.mainBackgroundColor}`,
        }}
      >
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Products"} element={<Products />} />
          <Route path={"/Cart"} element={<Cart />} />
          <Route path={"/Wishlist"} element={<Wishlist />} />
          <Route path={"/Login"} element={<Login />} />
          <Route path={"/admin"} element={<Admin />} />
          <Route path={"*"} element={<h1>Page Not Found :</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default RoutesContainer;
