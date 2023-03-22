import React from "react";
import {
  ListItem,
  IconButton,
  ListItemIcon,
  Checkbox,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Collapse,
  List,
  ListItemButton,
} from "@mui/material";
import { Create, Delete } from "@mui/icons-material";
import { useState } from "react";
import Shimmer from "../../Shimmer/Shimmer";

const UserListItem = ({
  onDelete,
  isLoading,
  firstName,
  profilePic,
  lastName,
  _id
}) => {
  const [isTargetChecked, setIsTargetChecked] = useState(false);

  const onCheckboxChange = () => {
    setIsTargetChecked(!isTargetChecked);
  };
  return (
    <>
      <ListItem
        secondaryAction={
          isTargetChecked && (
            <>
              <Box component={"div"} sx={{ display: "flex", gap: "10px" }}>
                <IconButton onClick={() => onDelete(_id)} edge="end" aria-label="delete">
                  <Delete />
                </IconButton>
                <IconButton>
                  <Create />
                </IconButton>
              </Box>
            </>
          )
        }
        disablePadding={true}
        disableGutters={true}
      >
        <ListItemIcon>
          {isLoading ? (
            <Shimmer
              height={20}
              width={20}
              variant={"circular"}
              animation={"wave"}
            >
              <Avatar />
            </Shimmer>
          ) : (
            <Checkbox
              edge="start"
              onClick={onCheckboxChange}
              checked={isTargetChecked}
              tabIndex={-1}
              disableRipple
            />
          )}
        </ListItemIcon>
        <ListItemAvatar>
          {isLoading ? (
            <Shimmer
              height={40}
              width={40}
              variant={"circular"}
              animation={"wave"}
            >
              <Avatar />
            </Shimmer>
          ) : (
            <Avatar src={profilePic ? profilePic : ""} alt="image-prop" />
          )}
        </ListItemAvatar>
        <ListItemText primary={firstName}></ListItemText>
      </ListItem>
      <Collapse in={isTargetChecked} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ marginLeft: "45px" }}>
            <ListItemText primary="Surname" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default UserListItem;
