import React from 'react';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PreviewImage = ({ handleDelete, ImageUrl }) => {


  const stylesProduct = {
    fileUploaderStyles: {
      outerDiv: {
        backgroundColor: "#F6F9FC",
        borderRadius: "5px solid black",
        padding: "50px",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: "15px",
      },
      Heading: {
        color: "#7D879C",
        fontWeight: 600,
        marginBottom: "4px",
      },
      DividerDiv: {
        width: "20%",
      },
      gallery: {
        display: "flex",
      },
      galleryImage: {
        height: "30px",
        width: "30px",
      },
      previewImage: {
        width: "70px",
        height: "70px",
        padding: "20px",
        display: "flex",
        overflow: "hidden",
        borderRadius: "8px",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(148, 201, 254, 0.1)",
      },
    },
  };

    return (
      <>
        <Box sx={stylesProduct.fileUploaderStyles.previewImage}>
          <img
            src={ImageUrl}
            width={"100%"}
            style={{ display: "block" }}
            alt={ImageUrl}
          />
          <CloseIcon
            sx={{
              position: "absolute",
              top: "0%",
              right: "0%",
              color: "#101010",
              cursor: "pointer",
            }}
            onClick={() => handleDelete(ImageUrl)}
          />
        </Box>
      </>
    );
  };

export default PreviewImage
