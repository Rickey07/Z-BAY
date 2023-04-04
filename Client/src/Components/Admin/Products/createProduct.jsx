import React from "react";
import { Box } from "@mui/system";
import { Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import PrimaryButton from "../../Buttons/PrimaryButton";

const CreateProduct = () => {
  const borderStyle = {
    border: "2px solid red",
  };

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
        gap:"15px"
      },
      Heading: {
        color: "#7D879C",
        fontWeight: 600,
        marginBottom: "4px",
      },
      DividerDiv: {
        width:"20%"
      },
    },
  };

  const FileUploader = ({handleClick,onDrop,onDragOver,handleFiles}) => {
    return (
      <>
        <Box component={"div"} onDrop={onDrop} onDragOver={onDragOver}  sx={stylesProduct.fileUploaderStyles.outerDiv}>
            <input type={"file"}  id={"uploadProductImage"} onChange={handleFiles}  multiple hidden></input>
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
          <PrimaryButton handleClick={handleClick} variant={"outlined"} text={"Select Files"}/>
        </Box>
      </>
    );
  };


  // Methods

  const openUploadBar = (e) => {
    document.getElementById('uploadProductImage').click();
  }

  const onDrop = (e) => {
    const dataTransfer = e.dataTransfer;
    const  files = dataTransfer.files
    const arrayofFiles =  Array.from(files);
    manageFiles(arrayofFiles)
    e.preventDefault()
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }

  const handleFiles = (e) => {
   const arrayofFiles =  Array.from(e.target.files);
   manageFiles(arrayofFiles)
  }

  const manageFiles = (files) => {
    console.log(files)
  }

  return (
    <Box component={"div"}>
      <Paper elevation={0} style={{ padding: "48px", marginLeft: "8%" }}>
        <Box component={"div"} style={{ border: "1px solid  blue" }}>
          <form encType="multipart/form-data">
            <Grid container spacing={2} rowSpacing={3}>
              <Grid item md={6}>
                <TextField
                  variant="outlined"
                  label={"Name"}
                  style={{ borderRadius: "16px" }}
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  variant="outlined"
                  label={"Name"}
                  style={{ borderRadius: "16px" }}
                  fullWidth
                />
              </Grid>
              <Grid item md={12}>
                <FileUploader handleClick={openUploadBar} handleFiles={handleFiles} onDrop={onDrop} onDragOver={onDragOver}/>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default CreateProduct;
