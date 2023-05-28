import React from "react";
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
  useMediaQuery,
  useTheme
} from "@mui/material";
import { useSelector } from "react-redux";

const SidebarForFilter = ({ onChange }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('md'))
  const {categories,selectedCategory} = useSelector(
    (state) => state.category
  );

  const sideBarFilterStyles = {
    mainPaperBox: {
      padding: "15px",
      display: "flex",
      flexDirection: "column",
      marginTop:mobile&&6,
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

  return (
    <>
      <Paper
        component={"div"}
        sx={sideBarFilterStyles.mainPaperBox}
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
          <FormGroup onChange={onChange}>
            {categories?.map((category) => {
              return (
                <FormControlLabel
                  key={category?._id}
                  control={<Checkbox defaultChecked={(category?.category_name === selectedCategory[0]) || (category?.category_name === "Shirts")}/>}
                  style={sideBarFilterStyles.sideBarFilterSubItem}
                  label={category?.category_name}
                  value={category?.category_name}
                  name={"category"}
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
              name="sort_by"
              onChange={onChange}
            >
              <FormControlLabel
                value="asc"
                control={<Radio />}
                sx={sideBarFilterStyles.sideBarFilterSubItem}
                label="Low To High"
              />
              <FormControlLabel
                value="desc"
                control={<Radio />}
                sx={sideBarFilterStyles.sideBarFilterSubItem}
                label="High to Low"
              />
            </RadioGroup>
          </FormControl>
          <Divider style={sideBarFilterStyles.sideBarDivider} />
        </Box>
        <Box component={"div"}>
          <Typography
            component={"h6"}
            variant="p"
            sx={{ textAlign: "start", fontSize: "18px" }}
          >
            Rating
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="rating"
              onChange={onChange}
            >
              <FormControlLabel
                value="4andabove"
                control={<Radio />}
                label={<Rating value={4} readOnly />}
              />
              <FormControlLabel
                value="3andabove"
                control={<Radio />}
                label={<Rating value={3} readOnly />}
              />
              <FormControlLabel
                value="2andabove"
                control={<Radio />}
                label={<Rating value={2} readOnly />}
              />
              <FormControlLabel
                value="1andabove"
                control={<Radio />}
                label={<Rating value={1} readOnly />}
              />
            </RadioGroup>
          </FormControl>
        </Box>
      </Paper>
    </>
  );
};

export default SidebarForFilter;
