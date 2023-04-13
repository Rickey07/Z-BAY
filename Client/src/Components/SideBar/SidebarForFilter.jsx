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
  Rating,
  Divider,
} from "@mui/material";
import { useSelector } from "react-redux";

const SidebarForFilter = () => {
  const theme = useTheme();
  const categories = useSelector(
    (state) => state.category.categories.categories
  );

  const sideBarFilterStyles = {
    mainPaperBox: {
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    sideBarFilterSubItem: {
      color: "rgb(125, 135, 156)",
    },
    sideBarDivider: {
      borderColor: "rgb(243, 245, 249)",
      borderWidth: "0px 0px thin",
    },
  };
  console.log(categories);

  return (
    <>
      <Paper
        component={"div"}
        style={sideBarFilterStyles.mainPaperBox}
        elevation={1}
      >
        <Box component={"div"}>
          <Typography
            component={"h6"}
            variant="p"
            sx={{ textAlign: "start", fontSize: "18px" }}
          >
            Categories
          </Typography>
          <FormGroup>
            {categories?.map((category) => {
              return (
                <FormControlLabel
                  key={category?._id}
                  control={<Checkbox />}
                  style={sideBarFilterStyles.sideBarFilterSubItem}
                  label={category?.category_name}
                />
              );
            })}
          </FormGroup>
          <Divider style={sideBarFilterStyles.sideBarDivider} />
        </Box>
        <Box component={"div"}>
          <Typography
            component={"h6"}
            variant="p"
            sx={{ textAlign: "start", fontSize: "18px" }}
          >
            Sort By: Price
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="LTH"
                control={<Radio />}
                sx={sideBarFilterStyles.sideBarFilterSubItem}
                label="Low To High"
              />
              <FormControlLabel value="HTL" control={<Radio />} sx={sideBarFilterStyles.sideBarFilterSubItem} label="High to Low" />
            </RadioGroup>
          </FormControl>
          <Divider style={sideBarFilterStyles.sideBarDivider}/>
        </Box>
        <Box component={"div"}>
          <Typography component={"h6"}
            variant="p"
            sx={{ textAlign: "start", fontSize: "18px" }}>Rating</Typography>
                      <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              
              <FormControlLabel value="4andabove" control={<Radio />} label={<Rating value={4} readOnly/>} />
              <FormControlLabel value="3andabove" control={<Radio />} label={<Rating value={3} readOnly/>} />
              <FormControlLabel value="2andabove" control={<Radio />} label={<Rating value={2} readOnly/>} />
              <FormControlLabel value="1andabove" control={<Radio />} label={<Rating value={1} readOnly/>} />

            </RadioGroup>
          </FormControl>  
        </Box>
      </Paper>
    </>
  );
};

export default SidebarForFilter;
