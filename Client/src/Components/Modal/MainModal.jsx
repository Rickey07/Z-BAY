import { Modal, Backdrop, Fade, Box } from "@mui/material";
import React from "react";

const MainModal = ({ isVisible, handleClose, ModalBody }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={isVisible}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isVisible}>
        <Box sx={style}>{ModalBody}</Box>
      </Fade>
    </Modal>
  );
};

export default MainModal;
