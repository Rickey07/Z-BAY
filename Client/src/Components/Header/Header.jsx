import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import {
  Container,
  Toolbar,
  AppBar,
  Typography,
  Box,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import {
  Shop2Outlined,
  FavoriteBorder,
  ShoppingCart,
  Inventory2,
  Menu,
  Close,
} from "@mui/icons-material";
import SideBar from "../SideBar/SideBar";
// import {SideBar} from '../index';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const theme = useTheme();
  const FONT_SIZE_NAVBAR_ICONS = "30px";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Methods

  const handleOpen = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to={"/"} style={{textDecoration:"none",color:"#fff",display:"flex"}}>
            <Shop2Outlined
              sx={{ display: { xs: "flex", md: "flex" }, mr: 3 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="p"
              href="/"
              sx={{
                mr: 2,
                textDecoration: "none",
                color: "#fff",
              }}
            >
              Z-BAY
            </Typography>
            </Link>
            {isMobile ? (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "flex" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                {mobileMenu ? (
                  <Close
                    sx={{
                      mr: 4,
                      fontSize: FONT_SIZE_NAVBAR_ICONS,
                      cursor: "pointer",
                    }}
                    onClick={handleOpen}
                  />
                ) : (
                  <Menu
                    sx={{
                      mr: 4,
                      fontSize: FONT_SIZE_NAVBAR_ICONS,
                      cursor: "pointer",
                    }}
                    onClick={handleOpen}
                  />
                )}
              </Box>
            ) : (
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Link
                  to={"/Products"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Inventory2
                    sx={{
                      mr: 4,
                      fontSize: FONT_SIZE_NAVBAR_ICONS,
                      cursor: "pointer",
                    }}
                  />
                </Link>
                <Link
                  to={"/Wishlist"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <FavoriteBorder
                    sx={{
                      mr: 4,
                      fontSize: FONT_SIZE_NAVBAR_ICONS,
                      cursor: "pointer",
                    }}
                  />
                </Link>
                <Link
                  to={"/Cart"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <ShoppingCart
                    sx={{
                      mr: 4,
                      fontSize: FONT_SIZE_NAVBAR_ICONS,
                      cursor: "pointer",
                    }}
                  />
                </Link>
                <Link
                  to={"/Login"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                <IconButton aria-label="user-account/login" component="label">
                  <Button
                    variant="outlined"
                    sx={{
                      mr: 4,
                      color: "#fff",
                      border: "1px solid #fff",
                      cursor: "pointer",
                    }}
                  >
                    Login
                  </Button>
                </IconButton>
                </Link>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {mobileMenu && <SideBar />}
    </>
  );
};

export default Header;
