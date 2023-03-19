import React, { useState } from "react";
import UserListItem from "./userListComponents/UserListItem";
import masterApi from "../../api/masterApi";
import { useEffect } from "react";

const UsersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const result = await masterApi(
          {},
          "getAllUsers",
          "GET",
          {},
          "641726b302e20e107e10183c"
        );
        if (result.success) {
          console.log(result?.users);
          setUsers(result?.users);
        }
        setIsLoading(false);
      } catch (error) {
        throw error.message;
      }
    }
    getData();
  }, []);

  return (
    <div style={{ display: "block", margin: "auto", width: "600px" }}>
      {(isLoading ? Array.from(new Array(5)) : users).map((user) => {
        return <UserListItem key={user?._id?user._id:user} isLoading={isLoading} {...user} />;
      })}
    </div>
  );
};

export default UsersList;
