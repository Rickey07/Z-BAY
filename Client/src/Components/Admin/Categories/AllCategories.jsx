import React from "react";
import TableRb from "../../Tables/TableRb";
import {
  TableCell,
  TableRow,
  Box,
  Switch,
  Avatar,
  Typography,
  IconButton,
  TextField,
} from "@mui/material";
import Edit from "@mui/icons-material/Edit";
import fetchAllCategories from "../../../redux/CategoriesSlice";
import { globalActions } from "../../../redux/global";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Done from "@mui/icons-material/Done";
import Delete from "@mui/icons-material/Delete";
import deleteCategory from "../../../helpers/APICalls/deleteCategory";
import { useEffect } from "react";

const AllCategories = () => {
  // Custom Variables
  const tableHeaders = ["Category", "Featured", "Actions"];
  const alertMessage = {visible:true,message:"Successfully Deleted",messageType:"success"}

  // Redux Imports
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.category.categories.categories
  );

  // Effects
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);
  console.log(categories);

  // HOC
  const TableRowDataForCategories = ({ data, onDelete, onUpdate }) => {
    const [mainData, setMainData] = useState(data);
    const [isEditable, setIsEditable] = useState(false);
    const [editedData,setEditData] = useState({});

    const onEditField = () => {
      setIsEditable(!isEditable);
    };

    const onEditFieldClose = () => {
      setIsEditable(!isEditable);
    };

    const onDynamicFieldChange = (e) => {
      setMainData({...mainData,[e.target.name]:e.target.value})
    };

    const DynamicTableCellContent = ({
      data,
      isEdit,
      onChange,
      targetName,
    }) => {
      const uploadurl = `http://localhost:5000/${data.categoryImage}`;  
      return (
        <>
          <Box
            component={"div"}
            display={"flex"}
            gap={"24px"}
            alignItems={"center"}
          >
            <Avatar alt="Product" src={uploadurl} />
            {isEdit ? (
              <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                value={editedData[targetName] ?? data[targetName]}
                variant="filled"
                size="small"
                name={targetName}
                onChange={onChange}
              />
            ) : (
              <Typography component={"span"} variant={"span"}>
                {data[targetName]}
              </Typography>
            )}
          </Box>
        </>
      );
    };

    return (
      <>
        <TableRow>
          <TableCell>
            <DynamicTableCellContent
              data={mainData}
              isEdit={isEditable}
              targetName={"category_name"}
              onChange={onDynamicFieldChange}
            />
          </TableCell>
          <TableCell align={"left"}>
            <Switch defaultChecked={data?.featured} />
          </TableCell>
          <TableCell>
            <IconButton onClick={!isEditable ? onEditField : onEditFieldClose}>
              {!isEditable ? <Edit /> : <Done />}
            </IconButton>
            <IconButton onClick={() => onDelete(data?._id)}>
              <Delete />
            </IconButton>
          </TableCell>
        </TableRow>
      </>
    );
  };

  const onDelete = async (id) => {
    const result = await deleteCategory({_id:id});
    if(result?.success) {
      dispatch(globalActions.toastAlertStateToggler(alertMessage))
      dispatch(fetchAllCategories());
    } else {
      alertMessage["message"] = `Operation Failed with statusCode ${result?.statusCode}`;
      alertMessage['messageType'] = "error";
      dispatch(globalActions.toastAlertStateToggler(alertMessage))
    }
  };

  const onUpdate = () => {};
  return (
    <div>
      <TableRb
        tableHeaders={tableHeaders}
        tableBodyData={categories}
        TableDataRow={TableRowDataForCategories}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default AllCategories;
