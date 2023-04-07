import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import fetchAllCategories from "../../../redux/CategoriesSlice";
import {
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import PrimaryButton from "../../Buttons/PrimaryButton";
import ActionButton from "../../Buttons/ActionButton";
import createProduct from "../../../helpers/APICalls/createProduct";
import { globalActions } from "../../../redux/global";

const CreateProduct = () => {
  const [productsImages, setProductsImages] = useState([]);
  const AllCategories = useSelector((state) => state.category.categories);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const intialProductState = {
    name: "",
    quantity: "",
    saleprice: "",
    category: "",
    images: [],
    discountPercentage: "",
  }
  const [productCreationState, setProductCreationState] = useState(intialProductState);

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
    console.log(e.target.value);
    setProductCreationState({
      ...productCreationState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      const productsData = { ...productCreationState };
      const images = productsImages.map((file) => file.file);
      console.log(images);
      productsData["images"] = images;
      for (const key in productsData) {
        formData.append(key, productsData[key]);
      }
      const product = await createProduct(formData);
      if (product.success) {
        alert("Product has been created Successfully");
        setProductCreationState(intialProductState);
        setProductsImages([]);
        dispatch(
          globalActions.toastAlertStateToggler({
            visible: true,
            message: "Product SuccessFully Created!",
            messageType: "success",
          })
        );
      } else {
        alert("Proudct Creation Failed");
        dispatch(
          globalActions.toastAlertStateToggler({
            visible: true,
            message: `Operation Failed with StatusCode ${product?.statusCode}!`,
            messageType: "error",
          })
        );
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <Box component={"div"}>
      <Paper elevation={0} style={{ padding: "48px", marginLeft: "8%" }}>
        <Box component={"div"}>
          <form encType="multipart/form-data">
            <Grid
              container
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              spacing={2}
              rowSpacing={3}
            >
              <Grid item md={6}>
                <TextField
                  variant="outlined"
                  label={"Name"}
                  onChange={handleChange}
                  value={productCreationState.name}
                  name={"name"}
                  style={{ borderRadius: "16px" }}
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={productCreationState.category}
                    name={"category"}
                    label="Age"
                    onChange={handleChange}
                  >
                    {AllCategories?.categories?.map((category) => {
                      return (
                        <MenuItem key={category._id} value={category._id}>
                          {category.category_name}
                        </MenuItem>
                      );
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
                  name={"discountPercentage"}
                  value={productCreationState.discountPercentage}
                  onChange={handleChange}
                  style={{ borderRadius: "16px" }}
                  fullWidth
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  variant="outlined"
                  label={"Stock"}
                  style={{ borderRadius: "16px" }}
                  onChange={handleChange}
                  value={productCreationState.quantity}
                  name={"quantity"}
                  fullWidth
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  label={"Sale Price"}
                  value={productCreationState.saleprice}
                  onChange={handleChange}
                  name={"saleprice"}
                  style={{ borderRadius: "16px" }}
                  fullWidth
                />
              </Grid>
              <Grid item md={0} alignSelf={"flex-start"}>
                <ActionButton
                  Text={"Save Product"}
                  isLoading={loading}
                  handleClick={handleSubmit}
                  Icon={<AddIcon />}
                  buttonVariant={"contained"}
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
