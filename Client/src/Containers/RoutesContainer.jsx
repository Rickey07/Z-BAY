import React from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Products, Cart, Login, Home } from "../Pages";
import Admin from "../Pages/Admin";
import Dashboard from "../Pages/Dashboard";
import { RequireAuth, useAuthUser } from "react-auth-kit";
import { useTheme, useMediaQuery } from "@mui/material";
import BottomBar from "../Components/Appbars/BottomBar";
import { ErrorBoundary } from "react-error-boundary";
import Footer from "../Components/Footer/Footer";
import FallbackMain from "../Components/Fallback/FallbackMain";
import NotFound from "../Components/NotFound/NotFound";
import { toast } from "react-toastify";

const RoutesContainer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const routesWithNoLogin = ["/", "/Login", "/products"];
  const adminRoutes = ["/admin"];
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";
  const auth = useAuthUser();
  const userDetails = auth();

  // Add Your New Routes Here
  const routesMapper = {
    "/": <Home />,
    "/products": <Products />,
    "/Cart": <Cart />,
    "/Login": <Login />,
    "/dashboard/*": <Dashboard />,
    "/admin": <Admin />,
  };
  const routes = [];
  const AdminRoute = ({ children }) => {
    if (userDetails?.role === 0) {
      toast.error("Not Allowed");
      return <Navigate to={"/"} />;
    } else {
      return children;
    }
  };
  // Create A Custom Routes according to routes condition and push it into routes Array
  Object.keys(routesMapper).map((pathUrl) => {
    let component = routesWithNoLogin.includes(pathUrl) ? (
      routesMapper[pathUrl]
    ) : (
      <RequireAuth loginPath="/Login">
        {adminRoutes.includes(pathUrl) ? (
          <AdminRoute children={routesMapper[pathUrl]} />
        ) : (
          routesMapper[pathUrl]
        )}
      </RequireAuth>
    );
    routes.push(
      <Route
        path={pathUrl}
        element={
          <ErrorBoundary
            fallback={
              <div>
                <FallbackMain />
              </div>
            }
          >
            {component}
          </ErrorBoundary>
        }
        key={pathUrl}
      />
    );
  });

  // Fallback Route

  routes.push(<Route path="*" key={"*"} element={<NotFound />} />);

  return (
    <>
      <div
        style={{
          marginTop: "5rem",
          backgroundColor: `${theme.palette.secondary.main}`,
        }}
      >
        {mobile && <BottomBar />}
        <Routes>{routes}</Routes>
      </div>
      {!isAdmin && <Footer />}
    </>
  );
};

export default RoutesContainer;
