import {
  TableCell,
  TableRow,
  Box,
  Avatar,
  Typography,
  IconButton,
  Chip,
  Switch,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../redux/ProductsSlice";
import { globalActions } from "../../../redux/global";
import getAllProducts from "../../../redux/ProductsSlice";
import TableRb from "../../Tables/TableRb";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { deleteProduct } from "../../../helpers/APICalls/deleteProduct";
import updateProduct from "../../../helpers/APICalls/updateProduct";
import { toast } from "react-toastify";

const AllProducts = () => {
  // Custom Variables
  const tableHeaders = [
    "Name",
    "Category",
    "Discount%",
    "Price",
    "Stock",
    "Featured",
    "Action",
  ];
  const successAlertMessage = {
    visible: true,
    message: "Product Successfully Deleted!",
    messageType: "success",
  };
  const failureAlertMessage = {
    visible: true,
    message: "OOPS! Not able to Delete Product",
    messageType: "error",
  };

  // Redux Imports
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  // Action Dispatch and API Calls and Effects
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  // Product Table Cell // InBuilt Components

  const ProductTableCell = ({ imagesrc, name }) => {
    const uploadurl = `http://localhost:5000/uploads/${imagesrc}`;
    return (
      <>
        <TableCell>
          <Box
            component={"div"}
            display={"flex"}
            gap={"24px"}
            alignItems={"center"}
          >
            <Avatar alt="Product" src={uploadurl} />
            <Typography component={"span"} variant={"span"}>
              {name}
            </Typography>
          </Box>
        </TableCell>
      </>
    );
  };

  // HOC

  const TableDataRowForProducts = ({ data, onDelete, onUpdate }) => {
    const [mainData, setMainData] = useState(data);
    const [isEditable, setIsEditable] = useState(false);

    const onEditField = () => {
      setIsEditable(!isEditable);
    };

    const onEditFieldClose = (data) => {
      setIsEditable(!isEditable);
      onUpdate(mainData);
    };

    const onChange = (e) => {
      setMainData({ ...mainData, [e.target.name]: e.target.value });
    };
    const DynamicTableCellContent = ({
      data,
      isEdit,
      onChange,
      targetName,
    }) => {
      return (
        <>
          {isEdit ? (
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              value={data}
              variant="filled"
              size="small"
              name={targetName}
              onChange={onChange}
            />
          ) : (
            data
          )}
        </>
      );
    };

    return (
      <>
        <TableRow>
          <ProductTableCell
            imagesrc={data?.images[0]?.imageName}
            name={data?.name}
          />
          <TableCell>
            <Chip label={data?.category?.category_name} />
          </TableCell>
          <TableCell align={"left"}>
            <DynamicTableCellContent
              data={mainData?.discountPercentage}
              targetName={"discountPercentage"}
              onChange={onChange}
              isEdit={isEditable}
            />
          </TableCell>
          <TableCell align={"left"}>
            <DynamicTableCellContent
              data={mainData?.discountedPrice}
              targetName={"discountedPrice"}
              onChange={onChange}
              isEdit={isEditable}
            />
            {!isEditable && "Inr"}
          </TableCell>
          <TableCell align={"center"}>
            <DynamicTableCellContent
              data={mainData?.quantity}
              targetName={"quantity"}
              onChange={onChange}
              isEdit={isEditable}
            />
          </TableCell>
          <TableCell align={"left"}>
            <Switch defaultChecked={data?.featured} />
          </TableCell>
          <TableCell>
            <IconButton onClick={!isEditable ? onEditField : onEditFieldClose}>
              {!isEditable ? <EditIcon /> : <DoneIcon />}
            </IconButton>
            <IconButton onClick={() => onDelete(data?._id)}>
              <DeleteIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      </>
    );
  };

  // Methods

  // Delete Product API call and Reducer Call For Redux
  const onDelete = async (id) => {
    const deletedProduct = await deleteProduct(id);
    if (deletedProduct.success) {
      dispatch(productActions.removeProduct(id));
      toast.success("Deleted Successfully!")
    } else {
      toast.error("Some Unknown Error Occured!")
    }
  };

  const onUpdate = async (data) => {
    const updatedProduct = await updateProduct(data);
    if (updatedProduct.success) {
      toast.success("Proouct has been updated Successfully!")
    } else {
      toast.error("Some Unknown Error Occurred while Updating ")
    }
  };
  return (
    <div>
      <TableRb
        tableHeaders={tableHeaders}
        tableBodyData={products}
        TableDataRow={TableDataRowForProducts}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    </div>
  );
};

export default AllProducts;
