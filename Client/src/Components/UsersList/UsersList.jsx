import React, { useMemo, useState } from "react";
import UserListItem from "./userListComponents/UserListItem";
import masterApi from "../../api/masterApi";
import { useEffect } from "react";
import deleteUser from "../../helpers/APICalls/deleteUser";
import {
  GridActionsCellItem,
} from "@mui/x-data-grid";
import DataGridWrapper from  '../DataGrid/DataGridWrapper'
import { Delete } from "@mui/icons-material";

const UsersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [isUserDeleted, setIsUserDeleted] = useState(false);

  const rows = useMemo(() => convertUsersListIntoRows(users), [users]);

  // const rows = [
  //   { id: 1, col1: 'Hello', lastName: 'World' },
  //   { id: 2, firstName: 'DataGridPro', lastName: 'is Awesome' },
  //   { id: 3, lastName: 'MUI', col2: 'is Amazing' },
  // ];

  const columns = [
    { field: "id", hide: true, width: 300 },
    {
      field: "firstname",
      headerName: "First Name ",
      width: 150,
      editable: true,
    },
    { field: "lastname", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "purchases", headerName: "Orders", width: 300 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Delete />}
          onClick={(e) => onDelete(params?.id)} 
          label="Delete"
        />,
      ],
    },
  ];

  function convertUsersListIntoRows(users) {
    const data = users?.map((user) => {
      return {
        ...user,
        purchases: user?.purchases?.length,
      };
    });
    return data;
  }

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
        console.log(result?.users, "Prabadhya");
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
      <div style={{ display: "block", margin: "auto" }}>
        {rows && (
          <DataGridWrapper rows={rows} columns={columns}/>
        )}
      </div>
    </>
  );
};

export default UsersList;
