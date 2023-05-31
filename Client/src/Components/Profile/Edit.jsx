import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { Formik, useFormik } from "formik";
import { globalActions } from "../../redux/global";
import * as Yup from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Edit = ({ formValues,handleSubmit }) => {
  // States
  const [userDetails, setUserDetails] = useState([]);
  const [loading,setLoading] = useState(false)
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    firstName: Yup.string("First Name is required").required(
      "First Name is required"
    ),
    email: Yup.string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    lastName: Yup.string("First Name is required").required(
      "First Name is required"
    ),
    phoneNo: Yup.string("Number is required").length(10),
  });

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: formValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { firstname, email, lastname, phoneNo } = formik.values;

  return (
    <div>
      <Paper
        elevation={0}
        sx={{ p: 2 }}
        component={"form"}
        onSubmit={formik.handleSubmit}
        variant={"outlined"}
      >
        <Avatar />
        <Grid container spacing={4} marginBottom={3} marginTop={1}>
          <Grid item md={6} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label={"First Name"}
              name={"firstname"}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              fullWidth={true}
              value={firstname}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label={"Last Name"}
              name={"lastname"}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              fullWidth={true}
              value={lastname}
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} marginBottom={1}>
          <Grid item md={6} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label={"email"}
              name={"email"}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
              fullWidth={true}
              onChange={formik.handleChange}
              value={email}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label={"Phone No."}
              name={"phoneNo"}
              error={formik.touched.phoneNo && Boolean(formik.errors.phoneNo)}
              helperText={formik.touched.phoneNo && formik.errors.phoneNo}
              onBlur={formik.handleBlur}
              fullWidth={true}
              onChange={formik.handleChange}
              value={phoneNo}
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" color="primary" onClick={() => handleSubmit(formik.values)}>
          Save Changes
        </Button>
      </Paper>
    </div>
  );
};

export default Edit;
