import React,{useEffect} from "react";
import { Snackbar, Alert } from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { globalActions } from "../../redux/global";
import { defaultToastConfig } from "../../Constants/Configurations/ToastConfigurations";

const Toast = ({ open, hideAfter, handleClose, message, messageType }) => {
  const positions = { vertical: "bottom", horizontal: "right" };
  const {vertical,horizontal} = positions
  const toastState  = useSelector((state) => state?.global?.toastAlertState);
  const dispatch = useDispatch();

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(
        globalActions.toastAlertStateToggler(defaultToastConfig)
      );
    },5000)
    return () => {
      clearTimeout(id)
    }
  },[])
  return (
    <Snackbar
      open={open}
      anchorOrigin={{vertical,horizontal}}
      key={vertical + horizontal}
      autoHideDuration={hideAfter}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={messageType}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
