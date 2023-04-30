import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Edit = ({ formValues }) => {
  // States
  const [userDetails, setUserDetails] = useState([]);

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

  const { firstName, email, lastName, phoneNo } = formik.values;

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
              name={"firstName"}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={firstName}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              variant="outlined"
              size="small"
              label={"Last Name"}
              name={"lastName"}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={lastName}
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
              onChange={formik.handleChange}
              value={phoneNo}
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" color="primary">
          Save Changes
        </Button>
      </Paper>
    </div>
  );
};

export default Edit;
