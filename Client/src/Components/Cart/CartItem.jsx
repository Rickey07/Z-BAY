import React from "react";
import {
  Box,
  IconButton,
  Typography,
  Avatar,
  Divider,
  Paper,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/CartSlice";
import { Add, Close, Remove } from "@mui/icons-material";

const CartItem = ({ cartDetails, sideBar }) => {
  const styles = {
    cartItemsStyle: {
      display: "flex",
      justifyContent: "space-between",
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingBottom: "20px",
      paddingTop: "20px",
    },
    quantityButtons: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      justifyContent: "center",
      alignItems: "center",
      width: "40px",
    },
    mainCartItemWrapper: {
      display: "flex",
      gap: "4px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
    },
    cartItemProductName: {
      marginBottom: "0px",
      marginTop: "0px",
      fontSize: "14px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  };
  // Redux Imports
  const dispatch = useDispatch();
  const theme = useTheme();

  // Variables
  const slicedName = cartDetails?.name.slice(0, 20);

  // Methods

  const handleAdd = () => {
    dispatch(cartActions.addToCart(cartDetails));
  };

  const handleDecrease = () => {
    dispatch(cartActions.removeFromCart(cartDetails));
  };

  const handleRemove = () => {
    dispatch(cartActions.removeSingleItem(cartDetails));
  };
  return (
    <>
      {sideBar ? (
        <>
          <Box component={"div"} sx={styles.mainCartItemWrapper}>
            <Box component={"div"} sx={styles.quantityButtons}>
              <IconButton
                sx={{ border: `1px solid ${theme.palette.primary.dark}` }}
                size={"small"}
                color={"primary"}
                onClick={handleAdd}
              >
                <Add />
              </IconButton>
              <Typography variant="p" component={"span"}>
                {cartDetails.quantity}
              </Typography>
              <IconButton
                sx={{ border: `1px solid ${theme.palette.primary.dark}` }}
                size={"small"}
                color={"secondary"}
                onClick={handleDecrease}
              >
                <Remove />
              </IconButton>
            </Box>
            <Box component={"div"}>
              <Avatar src={cartDetails?.image_url} variant={"square"} />
            </Box>
            <Box component={"div"}>
              <Typography
                component={"p"}
                variant="p"
                title={cartDetails.name}
                sx={styles.cartItemProductName}
              >
                {slicedName}...
              </Typography>
              <Typography component={"small"} variant={"small"}>
                ₹{cartDetails?.Price} X {cartDetails?.quantity}
              </Typography>
              <Typography
                component={"p"}
                variant={"p"}
                sx={{ fontWeight: 600, mt: 1, fontSize: "14px" }}
                color={"primary"}
              >
                ₹{cartDetails?.total}
              </Typography>
            </Box>
            <Box component={"div"}>
              <IconButton size="small" onClick={handleRemove}>
                <Close />
              </IconButton>
            </Box>
          </Box>
          <Divider />
        </>
      ) : (
        <Paper component={"div"} elevation={1} sx={{mb:4,p:2,position:"relative"}}>
          <Box component={"div"}>
            <Close sx={{position:"absolute",right:"15px",cursor:"pointer",top:"15px"}} onClick={handleRemove}/>
            <Box component={"div"} display={"flex"} flexWrap={"wrap"} gap={"15px"}>
              <Avatar
                src={cartDetails?.image_url}
                sx={{ width: 100, height: 100 }}
                variant={"square"}
              />
              <Box component={"div"} display={"flex"} flexDirection={"column"} gap={"15px"}>
                <Typography component={"span"} variant={"span"}>
                  {cartDetails?.name}
                </Typography>
                <Typography component={"small"} variant={"small"}>
                  ₹{cartDetails?.Price} X {cartDetails?.quantity}
                </Typography>
                <Typography component={"small"} variant={"small"}>
                  ₹{cartDetails?.total}
                </Typography>
                <Box component={"div"} display={"flex"} gap={"10px"} alignItems={"center"}>
                  <IconButton
                    sx={{ border: `1px solid ${theme.palette.primary.dark}`,borderRadius:"8px"}}
                    size={"small"}
                    color={"primary"}
                    onClick={handleDecrease}
                  >
                    <Remove fontSize="14px"/>
                  </IconButton>
                  <Typography variant="span" component={"span"}> {cartDetails?.quantity}</Typography>
                  <IconButton
                    sx={{ border: `1px solid ${theme.palette.primary.dark}`,borderRadius:"8px" }}
                    size={"small"}
                    onClick={handleAdd}
                    color={"primary"}
                  >
                    <Add fontSize="14px"/>
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      )}
    </>
  );
};

export default CartItem;
