import {
  Divider,
  Drawer,
  List,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import { adminSideBarNavLinks } from "../../Constants/Configurations/AdminSideBarNavLinks";
import React from "react";
import ListItemNav from "../ListItem/ListItem";
import { useState } from "react";

const AdminSideBar = ({selectedLink,setSelectedLink}) => {

  const DrawerHeader = ({ adminName }) => {
    return (
      <>
          <Typography variant="h5" component={"p"}>
            {adminName}
          </Typography>
          <Divider />
      </>
    );
  };

  const handleClick = (Link) =>  {
    setSelectedLink(Link)
  }

  return (
    <Box component={"div"}>
      <Drawer variant="permanent" open={true}>
        <DrawerHeader adminName={"Welcome Admin :)"} />
        <Box
          component={"div"}
          sx={{ display: "flex", alignItems: "center", height: "50%" }}
        >
          <List>
            {adminSideBarNavLinks.map((LinkData) => {
              return (
                <ListItemNav
                  key={LinkData.text}
                  text={LinkData.text}
                  image={LinkData.image}
                  handleClick={handleClick}
                  selectedLink={selectedLink}
                />
              );
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default AdminSideBar;
