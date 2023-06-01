import {
  TableCell,
  Box,
  Avatar,
  Typography,
  Chip,
  Switch,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../../redux/ProductsSlice";
import { globalActions } from "../../../redux/global";
import getAllProducts from "../../../redux/ProductsSlice";
import { useState } from "react";
import { deleteProduct } from "../../../helpers/APICalls/deleteProduct";
import Delete from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import DataGridWrapper from "../../DataGrid/DataGridWrapper";
import updateProduct from "../../../helpers/APICalls/updateProduct";
import { toast } from "react-toastify";

const AllProducts = () => {
  // Redux Imports
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [refreshData, setRefreshData] = useState(false);

  const columns = [
    { field: "id", hide: true, width: 225 },
    {
      field: "name",
      headerName: "Product Name",
      width: 400,
      editable:true,
      renderCell: (params) => (
        <ProductTableCell
          imagesrc={params?.row?.images[0]?.imageName}
          name={params?.row?.name}
        />
      ),
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
      editable:true
    },
    {
      field: "discountedPrice",
      headerName: "Discounted Price",
      width: 120,
      editable:true
    },
    {
      field: "saleprice",
      headerName: "Actual Price",
      width: 120,
      editable:true
    },
    {
      field: "featured",
      headerName: "Featured",
      width: 120,
      renderCell: (params) => (
        <Switch
          checked={params?.row?.featured}
          onChange={() => {
            const mainData = { ...params?.row };
            if (mainData["featured"] === true) {
              mainData["featured"] = false;
            } else {
              mainData["featured"] = true;
            }
            onUpdate(mainData);
          }}
        />
      ),
    },
    {
      field: "category",
      headerName: "Category Name",
      width: 120,
      renderCell: (params) => (
        <Chip label={params?.row?.category?.category_name} />
      ),
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Delete />}
          onClick={(e) => onDelete(params?.id)}
          label="Delete"
        />,
      ],
    },
  ];

  // Action Dispatch and API Calls and Effects
  useEffect(() => {
    dispatch(getAllProducts());
  }, [refreshData]);

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

  // Methods

  // Delete Product API call and Reducer Call For Redux
  const onDelete = async (id) => {
    const deletedProduct = await deleteProduct(id);
    if (deletedProduct.success) {
      dispatch(productActions.removeProduct(id));
      toast.success("Deleted Successfully!");
    } else {
      toast.error("Some Unknown Error Occured!");
    }
  };

  const onUpdate = async (data) => {
    const updatedProduct = await updateProduct(data);
    if (updatedProduct.success) {
      toast.success("Product has been updated Successfully!");
      setRefreshData(!refreshData);
    } else {
      toast.error("Some Unknown Error Occurred while Updating ");
    }
  };
  const handleCellEditStop = (params) => {
     onUpdate(params)
  };
  return (
    <div>
      {products && (
        <DataGridWrapper rows={products} columns={columns} processRowUpdate={handleCellEditStop}/>
      )}
    </div>
  );
};

export default AllProducts;
