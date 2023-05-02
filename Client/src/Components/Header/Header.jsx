import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Toolbar,
  AppBar,
  Typography,
  Box,
  IconButton,
  Button,
  useMediaQuery,
  useTheme,
  Badge,
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
import { useSelector } from "react-redux";
import SideBarForCart from "../SideBar/SideBarForCart";

const Header = () => {
  const theme = useTheme();
  const FONT_SIZE_NAVBAR_ICONS = "30px";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const cart = useSelector((state) => state.cart.cart);

  // States
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Methods

  const openSideCart = () => {
    setIsCartOpen(true);
  };

  const closeSideCart = () => {
    setIsCartOpen(false);
  };

  const handleOpen = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              to={"/"}
              style={{
                textDecoration: "none",
                color: "#101010",
                display: "flex",
              }}
            >
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
                  color: "#101010",
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
                  <IconButton
                    color="primary"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: "10px",
                      borderRadius: "50%",
                      border: 0,
                      mr: 4,
                      backgroundColor: theme.palette.secondary.main,
                    }}
                    size={"small"}
                  >
                    <Inventory2
                      sx={{
                        fontSize: FONT_SIZE_NAVBAR_ICONS,
                        cursor: "pointer",
                      }}
                      fontSize={"1em"}
                    />
                  </IconButton>
                </Link>
                <Link
                  to={"/Wishlist"}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <IconButton
                    color="primary"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: "10px",
                      borderRadius: "50%",
                      border: 0,
                      mr: 4,
                      backgroundColor: theme.palette.secondary.main,
                    }}
                    size={"small"}
                  >
                    <FavoriteBorder
                      sx={{
                        fontSize: FONT_SIZE_NAVBAR_ICONS,
                        cursor: "pointer",
                      }}
                    />
                  </IconButton>
                </Link>
                {/* <Link
                  to={"/Cart"}
                  style={{ textDecoration: "none", color: "#fff" }}
                > */}
                <Badge
                  badgeContent={cart?.length}
                  color={"primary"}
                  onClick={openSideCart}
                >
                  <IconButton
                    color="primary"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      p: "10px",
                      borderRadius: "50%",
                      border: 0,
                      backgroundColor: theme.palette.secondary.main,
                    }}
                    size={"small"}
                  >
                    <ShoppingCart
                      sx={{
                        fontSize: FONT_SIZE_NAVBAR_ICONS,
                        cursor: "pointer",
                      }}
                    />
                  </IconButton>
                </Badge>
                {/* </Link> */}
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
      {isCartOpen && (
        <SideBarForCart handleClose={closeSideCart} isOpen={isCartOpen} />
      )}
    </>
  );
};

export default Header;
