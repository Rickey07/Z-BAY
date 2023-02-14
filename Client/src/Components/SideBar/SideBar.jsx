import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Box,
} from "@mui/material";
import {
  Inventory2,
  Shop2Outlined,
  FavoriteBorder,
  ShoppingCart,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const SideBar = () => {
  const [alwaysTrue, setAlwaysTrue] = useState(true);
  const listsContainer = ["Products", "Wishlist", "Cart", "Login"];
  const theme = useTheme();

  const ListWrapper = () => (
    <List sx={{ mt: 7 }}>
      {listsContainer.map((mainList, index) => {
        return (
          <Link to={mainList} style={{textDecoration:"none",color:"#101010"}}>
          <ListItem key={mainList + index} disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  color: `${theme.mainTheme.primaryColor}`,
                }}
              >
                {index === 0 ? (
                  <Inventory2 />
                ) : index === 1 ? (
                  <FavoriteBorder />
                ) : index === 2 ? (
                  <ShoppingCart />
                ) : (
                  <ListItemButton
                    aria-label="user-account/login"
                    component="label"
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        color: `${theme.mainTheme.primaryColor}`,
                        border: `1px solid ${theme.mainTheme.primaryColor}`,
                        cursor: "pointer",
                      }}
                    >
                      Login
                    </Button>
                  </ListItemButton>
                )}
              </ListItemIcon>
              <ListItemText
                primary={`${
                  index === listsContainer.length - 1 ? "" : mainList
                }`}
              />
            </ListItemButton>
          </ListItem>
          </Link>
        );
      })}
    </List>
  );

  return (
    <>
      <Box>
        <Drawer open={alwaysTrue}>
          <ListWrapper />
        </Drawer>
      </Box>
    </>
  );
};

export default SideBar;
