import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";

const ListItemNav = ({ text, image, routeUrl, selectedLink, handleClick }) => {
  const theme = useTheme();
  return (
    <>
      <ListItem
        key={text}
        onClick={() => handleClick(text)}
        defaultValue={text}
      >
        <ListItemButton selected={selectedLink === text} sx={{backgroundColor:selectedLink === text && theme.palette.primary.main}}>
          <ListItemIcon sx={{ color: selectedLink === text ? theme.palette.primary.main : "#AEB4BE" }}>{image}</ListItemIcon>
          <ListItemText sx={{ color: selectedLink === text ? theme.palette.primary.main : "#AEB4BE" }}>{text}</ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ListItemNav;
