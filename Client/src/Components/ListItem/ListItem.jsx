import React from "react";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const ListItemNav = ({ text, image, routeUrl, selectedLink, handleClick }) => {
  return (
    <>
      <ListItem
        key={text}
        onClick={() => handleClick(text)}
        defaultValue={text}
      >
        <ListItemButton selected={selectedLink === text}>
          <ListItemIcon>{image}</ListItemIcon>
          <ListItemText>{text}</ListItemText>
        </ListItemButton>
      </ListItem>
    </>
  );
};

export default ListItemNav;
