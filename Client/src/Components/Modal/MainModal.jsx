import { Modal, Backdrop, Fade, Box } from "@mui/material";
import React from "react";

const MainModal = ({ isVisible, handleClose, ModalBody }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    width: "auto",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={isVisible}
      onClose={handleClose}
      sx={{
        position: "fixed",
        zIndex: 1300,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isVisible}>
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 24,
            position: "absolute",
            p:4
          }}
        >
          {ModalBody}
        </Box>
      </Fade>
    </Modal>
  );
};

export default MainModal;
