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
} from "@mui/material";
import { useSelector } from "react-redux";

const SidebarForFilter = () => {
  const theme = useTheme();
  const categories = useSelector((state) => state.category.categories);

  return (
    <>
      <Box
        sx={{
          background: `${theme.mainTheme.mainBackgroundColor}`,
          display: "flex",
          flexDirection: "column",
          width: "90%",
          textAlign: "start",
        }}
        container
      >
        <FormControl sx={{ padding: "15px 10px" }}>
          <FormLabel id="demo-radio-buttons-group-label">Sort By</FormLabel>
          <RadioGroup>
            <FormControlLabel
              value={"low"}
              control={
                <Radio
                  sx={{
                    color: `${theme.mainTheme.primaryColor}`,
                    "&.Mui-checked": {
                      color: `${theme.mainTheme.primaryColor}`,
                    },
                  }}
                />
              }
              label={"Price-Low to High"}
            />
            <FormControlLabel
              value={"high"}
              control={
                <Radio
                  sx={{
                    color: `${theme.mainTheme.primaryColor}`,
                    "&.Mui-checked": {
                      color: `${theme.mainTheme.primaryColor}`,
                    },
                  }}
                />
              }
              label={"Price-High to Low"}
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ padding: "15px 10px" }}>
          <FormLabel>Category</FormLabel>
          <FormGroup>
            {categories.map((category) => {
              return (
                <FormControlLabel
                  key={category}
                  control={
                    <Checkbox
                      sx={{
                        color: `${theme.mainTheme.primaryColor}`,
                        "&.Mui-checked": {
                          color: `${theme.mainTheme.primaryColor}`,
                        },
                      }}
                    />
                  }
                  label={`${category}`}
                />
              );
            })}
          </FormGroup>
        </FormControl>
        <FormControl sx={{ padding: "15px 10px" }}>
            <FormLabel id="demo-radio-buttons-group-label">Rating</FormLabel>
            <RadioGroup>
            <FormControlLabel
              value={"4"}
              control={
                <Radio
                  sx={{
                    color: `${theme.mainTheme.primaryColor}`,
                    "&.Mui-checked": {
                      color: `${theme.mainTheme.primaryColor}`,
                    },
                  }}
                />
              }
              label={"4 and above"}
            />
             <FormControlLabel
              value={"3"}
              control={
                <Radio
                  sx={{
                    color: `${theme.mainTheme.primaryColor}`,
                    "&.Mui-checked": {
                      color: `${theme.mainTheme.primaryColor}`,
                    },
                  }}
                />
              }
              label={"3 and above"}
            />
             <FormControlLabel
              value={"2"}
              control={
                <Radio
                  sx={{
                    color: `${theme.mainTheme.primaryColor}`,
                    "&.Mui-checked": {
                      color: `${theme.mainTheme.primaryColor}`,
                    },
                  }}
                />
              }
              label={"2 and above"}
            />
            <FormControlLabel
              value={"1"}
              control={
                <Radio
                  sx={{
                    color: `${theme.mainTheme.primaryColor}`,
                    "&.Mui-checked": {
                      color: `${theme.mainTheme.primaryColor}`,
                    },
                  }}
                />
              }
              label={"1 and above"}
            />
            </RadioGroup>
        </FormControl>
      </Box>
    </>
  );
};

export default SidebarForFilter;
