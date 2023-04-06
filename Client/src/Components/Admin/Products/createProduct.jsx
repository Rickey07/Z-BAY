import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Box } from "@mui/system";
import fetchAllCategories from "../../../redux/CategoriesSlice";
import { Divider, Grid, Paper, TextField, Typography,FormControl,InputLabel,Select,MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../../Buttons/PrimaryButton";

const CreateProduct = () => {
  const [productsImages, setProductsImages] = useState([]);
  const AllCategories = useSelector((state) => state.category.categories);
  const dispatch  = useDispatch();
  console.log(AllCategories);

   // Action Dispatch and API Calls and Effects
   useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);


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

  const PreviewImage = ({ handleDelete, ImageUrl }) => {
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

  const FileUploader = ({ handleClick, onDrop, onDragOver, handleFiles }) => {
    return (
      <>
        <Box
          component={"div"}
          onDrop={onDrop}
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

  // Methods

  const openUploadBar = (e) => {
    document.getElementById("uploadProductImage").click();
  };

  const onDrop = (e) => {
    const dataTransfer = e.dataTransfer;
    const files = dataTransfer.files;
    const arrayofFiles = Array.from(files);
    manageFiles(arrayofFiles);
    e.preventDefault();
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleFiles = (e) => {
    const arrayofFiles = Array.from(e.target.files);
    manageFiles(arrayofFiles);
  };

  const manageFiles = (recievedFiles) => {
    const images = [];
    recievedFiles.forEach((dataImage) => {
      let mainData = previewFile(dataImage);
      images.push(mainData);
    });
    setProductsImages([...productsImages, ...images]);
  };

  const previewFile = (file) => {
    return { imageSrc: URL.createObjectURL(file), file };
  };

  const deletePreviewImage = (id) => {
    setProductsImages((current) => {
      const copy = [...current].filter((data) => data.imageSrc !== id);
      return copy;
    });
  };

  const handleChange = (e) => {
    console.log(e.target.value)
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
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Age"
                    onChange={handleChange}
                  >
                    {AllCategories?.categories?.map((category) => {
                        return <MenuItem key={category._id} value={category.category_name}>{category.category_name}</MenuItem>

                    })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <FileUploader
                  handleClick={openUploadBar}
                  handleFiles={handleFiles}
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                />
              </Grid>
              <Grid item md={12}>
                <Box
                  component={"div"}
                  style={stylesProduct.fileUploaderStyles.gallery}
                  id={"Gallery"}
                >
                  {productsImages.map((dataImage) => {
                    return (
                      <PreviewImage
                        key={dataImage?.imageSrc}
                        ImageUrl={dataImage?.imageSrc}
                        handleDelete={deletePreviewImage}
                      />
                    );
                  })}
                </Box>
              </Grid>
              <Grid item md={6}>
                <TextField
                  variant="outlined"
                  label={"Discount %"}
                  style={{ borderRadius: "16px" }}
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  variant="outlined"
                  label={"Stock"}
                  style={{ borderRadius: "16px" }}
                  fullWidth
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  label={"Sale Price"}
                  style={{ borderRadius: "16px" }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  );
};

export default CreateProduct;
