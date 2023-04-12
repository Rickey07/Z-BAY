import { useTheme } from "@emotion/react";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Products, Cart, Wishlist, Login, Home } from "../Pages";
import Admin from "../Pages/Admin";
import {RequireAuth} from 'react-auth-kit'
 
const RoutesContainer = () => {
  const theme = useTheme();

  const routesWithNoLogin = ["/","/Login","/products"]

  const routesMapper = {
    "/":<Home/>,
    "/products":<Products/>,
    "/Cart":<Cart/>,
    "/wishlist":<Wishlist/>,
    "/Login":<Login/>,
    "/admin":<Admin/>
  }
  const routes = []
  Object.keys(routesMapper).map((pathUrl) => {
    let component = routesWithNoLogin.includes(pathUrl) ? (
      routesMapper[pathUrl]
    ) : (
        <RequireAuth loginPath="/Login">{routesMapper[pathUrl]}</RequireAuth>
    )
    routes.push(<Route path={pathUrl} element={component}/>)
  }) 

  // Fallback Route

  routes.push(<Route path="*" element={<h1>Page Not Found :</h1>}/>)

  return (
    <>
      <div
        style={{
          marginTop: "5rem",
          marginRight: "auto",
          marginLeft: "auto",
          width: "90%",
          // position:"relative",
          border:"1px solid red",
          backgroundImage: `${theme.mainTheme.mainBackgroundColor}`,
        }}
      >
        <Routes>
          {routes}
        </Routes>
      </div>
    </>
  );
};

export default RoutesContainer;
