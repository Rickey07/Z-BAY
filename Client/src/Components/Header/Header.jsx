import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  MenuItem,
  Menu as MenuBar
} from "@mui/material";
import {
  Shop2Outlined,
  FavoriteBorder,
  ShoppingCart,
  Inventory2,
  Menu,
  Close,
  AccountCircle,
} from "@mui/icons-material";
import SideBar from "../SideBar/SideBar";
import { useSelector } from "react-redux";
import SideBarForCart from "../SideBar/SideBarForCart";
import { useIsAuthenticated,useSignOut } from "react-auth-kit";

const Header = () => {
  const theme = useTheme();
  const FONT_SIZE_NAVBAR_ICONS = "30px";
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const cart = useSelector((state) => state.cart.cart);
  const isAuthenticated = useIsAuthenticated();
  const authState = isAuthenticated();
  const signOut = useSignOut();
  const navigate = useNavigate();
;
  // States
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

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

  const handleLogout = () => {
    signOut();
  }

  const handleNavigate = () => {
    navigate("/dashboard/profile")
  }

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    console.log(event.currentTarget, "prabadhya");
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
                {!authState ? (
                  <Link
                    to={"/Login"}
                    // style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{
                        ml: 3,
                        color: "#fff",
                        border: "1px solid #fff",
                        backgroundColor: `${theme.palette.primary.main}`,
                        cursor: "pointer",
                        "&:hover": {
                          backgroundColor: "red",
                        },
                      }}
                    >
                      Login
                    </Button>
                  </Link>
                ) : (
                  <div style={{ marginLeft: "10px" }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="primary"
                      sx={{
                        
                        borderRadius: "50%",
                        border: 0,
                        backgroundColor: theme.palette.secondary.main,
                      }}
                    >
                      <AccountCircle />
                    </IconButton>
                    <MenuBar
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      open={Boolean(anchorEl)}
                      sx={{zIndex:2000,mt:"45px"}}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleNavigate}>Profile</MenuItem>
                      <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </MenuBar>
                  </div>
                )}
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
