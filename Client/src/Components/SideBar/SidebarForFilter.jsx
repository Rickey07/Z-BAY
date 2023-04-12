import React from "react";
import { useTheme } from "@emotion/react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
  FormGroup,
  Checkbox,
  Paper,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const SidebarForFilter = () => {
  const theme = useTheme();
  const categories = useSelector((state) => state.category.categories.categories);

  const sideBarFilterStyles = {
    mainPaperBox:{
      padding:"15px"
    },

  }
  console.log(categories);

  return (
    <>
     <Paper component={"div"} style={sideBarFilterStyles.mainPaperBox} elevation={1}>
        <Box component={"div"}>
          <Typography variant="p" sx={{textAlign:"start"}}>Categories</Typography>
          <FormGroup>
            {categories?.map((category) => {
              return <FormControlLabel key={category?._id} control={<Checkbox/>} label={category?.category_name}/>

            })}
          </FormGroup>
        </Box>
     </Paper>
    </>
  );
};

export default SidebarForFilter;
