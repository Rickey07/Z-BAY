import { Box, Grid, Paper, TextField } from "@mui/material";
import ActionButton from "../../Buttons/ActionButton";
import { FileUploader } from "../../FileUpload/FileUpload";
import React, { useState } from "react";
import Add from "@mui/icons-material/Add";
import parseFiles from "../../../helpers/FileUploader/parseFiles";
import PreviewImage from "../../FileUpload/PreviewImage";
import createCategory from "../../../helpers/APICalls/createCategory";
import { globalActions } from "../../../redux/global";
import { useDispatch } from "react-redux";

const CreateCategory = () => {
  // Custom Variables
  const initialCategoryState = {
    category_name: "",
    image: [],
  };
  const alertSuccessMessage = {visible:true,message:"Category Successfully created!",messageType:"success"}

  // State
  const [categoryImage, setCategoryImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryCreationState, setCategoryCreationState] =
    useState(initialCategoryState);


    // Redux Imports
  const dispatch = useDispatch();
  

  // Methods
  const handleChange = (e) => {
    setCategoryCreationState({
      ...categoryCreationState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      const productsData = { ...categoryCreationState };
      const images = categoryImage.map((file) => file.file);
      for (const key in productsData) {
        formData.append(key, productsData[key]);
      }
      for (let i = 0; i < images.length; i++) {
        formData.append("image", images[i]);
      }
      const response = await createCategory(formData);
      if (response.success) {
        setCategoryCreationState(initialCategoryState);
        setCategoryImage([]);
        dispatch(
            globalActions.toastAlertStateToggler(alertSuccessMessage)
          );
      } else {
        alertSuccessMessage.message = `Operation Creation Failed with statusCode ${response?.statusCode}`
        alertSuccessMessage.messageType = "error"
        dispatch(
            globalActions.toastAlertStateToggler(alertSuccessMessage)
        )
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

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

  const handleFiles = (e) => {
    const arrayofFiles = Array.from(e.target.files);
    manageFiles(arrayofFiles);
  };
  const manageFiles = (recievedFiles) => {
    const images = parseFiles(recievedFiles);
    setCategoryImage([...categoryImage, ...images]);
  };
  const deletePreviewImage = (id) => {
    setCategoryImage((current) => {
      const copy = [...current].filter((data) => data.imageSrc !== id);
      return copy;
    });
  };
  return (
    <Box component={"div"}>
      <Paper elevation={0} style={{ marginTop: "2%" }}>
        <Box component={"div"}>
          <form encType="multipart/form-data">
            <Grid
              container
              justifyContent={"flex-start"}
              alignItems={"flex-start"}
              spacing={2}
              rowSpacing={3}
            >
              <Grid item md={12}>
                <TextField
                  variant="outlined"
                  label={"Name"}
                  onChange={handleChange}
                  value={categoryCreationState.category_name}
                  name={"category_name"}
                  style={{ borderRadius: "16px" }}
                  fullWidth
                />
              </Grid>
              <Grid item md={12}>
                <FileUploader
                  handleClick={openUploadBar}
                  handleFiles={handleFiles}
                  onDrop={onDrop}
                />
              </Grid>
              <Grid item md={12}>
                <Box component={"div"} id={"Gallery"}>
                  {categoryImage.map((dataImage) => {
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
              <Grid item md={12} alignSelf={"flex-start"}>
                <ActionButton
                  Text={"Save Category"}
                  isLoading={isLoading}
                  handleClick={handleSubmit}
                  Icon={<Add />}
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

export default CreateCategory;
