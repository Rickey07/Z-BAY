import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Products, Cart, Wishlist, Login, Home } from "../Pages";
import Admin from "../Pages/Admin";
import Dashboard from "../Pages/Dashboard";
import {RequireAuth} from 'react-auth-kit'
import { useTheme , useMediaQuery } from "@mui/material";
import BottomBar from "../Components/Appbars/BottomBar";
import {ErrorBoundary} from 'react-error-boundary'
import FallbackMain from "../Components/Fallback/FallbackMain";
 
const RoutesContainer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"))
  const routesWithNoLogin = ["/","/Login","/products"]

  const routesMapper = {
    "/":<Home/>,
    "/products":<Products/>,
    "/Cart":<Cart/>,
    "/wishlist":<Wishlist/>,
    "/Login":<Login/>,
    "/dashboard/*":<Dashboard/>,  
    "/admin":<Admin/>
  }
  const routes = []
  Object.keys(routesMapper).map((pathUrl) => {
    let component = routesWithNoLogin.includes(pathUrl) ? (
     routesMapper[pathUrl]
    ) : (
       <RequireAuth loginPath="/Login">{routesMapper[pathUrl]}</RequireAuth> 
    )
    routes.push(<Route path={pathUrl} element={<ErrorBoundary fallback={<div><FallbackMain/></div>}>{component}</ErrorBoundary>}/>)  
  }) 

  // Fallback Route

  routes.push(<Route path="*" element={<h1>Page Not Found :</h1>}/>)

  return (
    <>
      <div
        style={{
          marginTop: "5rem",
          // position:"relative",
          // border:"1px solid red",
          backgroundColor: `${theme.palette.secondary.main}`,
        }}
      >
        {mobile && <BottomBar/>}
        <Routes>
          {routes}
        </Routes>
      </div>
    </>
  );
};

export default RoutesContainer;
