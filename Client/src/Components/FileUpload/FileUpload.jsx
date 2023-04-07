import React from "react";
import { Typography,Divider,Box } from "@mui/material";
import PrimaryButton from "../Buttons/PrimaryButton";

export const FileUploader = ({ handleClick, onDrop, onDragOver, handleFiles }) => {


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
        <Box
          component={"div"}
          on
          Drop={onDrop}
          onDragOver={onDragOver}
          sx={stylesProduct.fileUploaderStyles.outerDiv}
        >
          <input
            type={"file"}
            id={"uploadProductImage"}
            onChange={handleFiles}
            multiple
            hidden
          ></input>
          <Typography
            component={"h5"}
            sx={stylesProduct.fileUploaderStyles.Heading}
            variant={"p"}
          >
            Drag & Drop product Image Here
          </Typography>
          <Box sx={stylesProduct.fileUploaderStyles.DividerDiv}>
            <Divider fullWidth> OR</Divider>
          </Box>
          <PrimaryButton
            handleClick={handleClick}
            variant={"outlined"}
            text={"Select Files"}
          />
        </Box>
      </>
    );
  };