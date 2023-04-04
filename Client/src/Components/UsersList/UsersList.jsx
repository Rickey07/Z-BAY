import React, { useState } from "react";
import UserListItem from "./userListComponents/UserListItem";
import masterApi from "../../api/masterApi";
import { useEffect } from "react";
import deleteUser from "../../helpers/APICalls/deleteUser";
import { Paper, Stack, Typography } from "@mui/material";

const UsersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserDeleted, setIsUserDeleted] = useState(false);

  async function getAllUsers() {
    try {
      setIsLoading(true);
      const result = await masterApi(
        "getAllUsers",
        "GET",
        {},
        "641726b302e20e107e10183c"
      );
      if (result.success) {
        setUsers(result?.users);
      }
      setIsLoading(false);
    } catch (error) {
      throw error.message;
    }
  }

  // User Delete
  const onDelete = async (id) => {
    const deletedUser = await deleteUser(id);
    if (deletedUser.success) {
      setIsUserDeleted(!isUserDeleted);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [isUserDeleted]);

  return (
    <>
      <div style={{ display: "block", margin: "auto", width: "600px" }}>
        <Paper elevation={0} style={{marginBottom:"1rem"}}> 
          <Stack direction={"row"} height={"30px"} style={{display:"flex",alignItems:"center"}} spacing={2}>
            <Typography component={"p"} variant={"p"}>
              Select
            </Typography>
            <Typography component={"p"} variant={"p"}>
              Details
            </Typography>
          </Stack>
        </Paper>
        {(isLoading ? Array.from(new Array(15)) : users).map((user) => {
          return (
            <UserListItem
              key={user?._id ? user._id : user}
              isLoading={isLoading}
              onDelete={onDelete}
              {...user}
            />
          );
        })}
      </div>
    </>
  );
};

export default UsersList;
