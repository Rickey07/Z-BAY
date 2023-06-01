import React from "react";
import fetchAllCategories from "../../../redux/CategoriesSlice";
import { useSelector, useDispatch } from "react-redux";
import Delete from "@mui/icons-material/Delete";
import deleteCategory from "../../../helpers/APICalls/deleteCategory";
import { toast } from "react-toastify";
import { useEffect } from "react";
import DataGridWrapper from "../../DataGrid/DataGridWrapper";
import { GridActionsCellItem } from "@mui/x-data-grid";

const AllCategories = () => {
  // Redux Imports
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  // Effects
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, []);
  console.log(categories);

  // HOC


  const onDelete = async (id) => {
    const result = await deleteCategory({ _id: id });
    if (result?.success) {
      toast.success("Deleted Successfully!");
      dispatch(fetchAllCategories());
    } else {
      toast.error(`Operation Failed with statusCode ${result?.statusCode}`);
    }
  };

  const columns = [
    {
      field: "id",
      hide: true,
      headerName: "Categoory Id",
      width: 250,
    },
    {
      field: "category_name",
      headerName: "Category Name",
      width: 200,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      getActions: (params) => [
        <GridActionsCellItem
          icon={<Delete />}
          onClick={() => onDelete(params?.id)}
          label={"Delete"}
        />,
      ],
    },
  ];

  const onUpdate = () => {};
  return (
    <div>
      <DataGridWrapper rows={categories} columns={columns} />
    </div>
  );
};

export default AllCategories;
