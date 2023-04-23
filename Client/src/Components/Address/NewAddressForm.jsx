import React from "react";
import { useFormik } from "formik";
import { Box, Button, TextField } from "@mui/material";
import * as Yup from "yup";
import { useState } from "react";
import { useAuthUser } from "react-auth-kit";
import { useEffect } from "react";
import newAddress from "../../helpers/APICalls/newAddress";

const NewAddressForm = ({ handleCancel ,formValues}) => {
    console.log("re-render",formValues)
  // Validation Schema
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required("Full Name is required")
      .min(10, "Must be 10 letters or more"),
    email: Yup.string().required("required").email("Invalid Email Address"),
    addressType: Yup.string().required("Required"),
    contactNo: Yup.string()
      .required("Required")
      .min(10, "Should be of 10 Numbers"),
    city: Yup.string().required("City is Required"),
    country: Yup.string().required("country is required"),
    zipcode: Yup.string().required("Zip Code is required"),
    addressLine1: Yup.string().required("Address Line 1 is required"),
    landmark: Yup.string().required("Landmark is required"),
  });
  // Formik Setup
  const formik = useFormik({
    initialValues: formValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const result = await createAddress(values);
      } catch (error) {}
    },
  });
  const {
    addressType,
    addressLine1,
    contactNo,
    fullName,
    email,
    addressLine2,
    country,
    city,
    landmark,
    zipcode,
  } = formik.values;

  // States
  const [loading, setLoading] = useState(false);
  const auth = useAuthUser();
  const { _id } = auth();

  // Method

  async function createAddress(data) {
    try {
      setLoading(true);
      data["userId"] = _id;
      const result = await newAddress(data);
      if (result.success) {
        alert("Address has been created Successfully");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
  return (
    <div>
      <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        display={"flex"}
        marginTop={"15px"}
        flexDirection={"column"}
        gap={"15px"}
      >
        <Box component={"div"} display={"flex"} gap={"20px"}>
          <TextField
            variant="outlined"
            label={"FullName"}
            name={"fullName"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
            helperText={formik.touched.fullName && formik.errors.fullName}
            value={fullName}
            size="small"
            fullWidth
          />
          <TextField
            variant="outlined"
            label={"Email Address"}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            onBlur={formik.handleBlur}
            helperText={formik.touched.email && formik.errors.email}
            name={"email"}
            value={email}
            size="small"
            fullWidth
          />
        </Box>
        <Box component={"div"} display={"flex"} gap={"20px"}>
          <TextField
            variant="outlined"
            label={"Phone Number"}
            name={"contactNo"}
            value={contactNo}
            onBlur={formik.handleBlur}
            error={formik.touched.contactNo && Boolean(formik.errors.contactNo)}
            helperText={formik.touched.contactNo && formik.errors.contactNo}
            onChange={formik.handleChange}
            size="small"
            fullWidth
          />
          <TextField
            variant="outlined"
            label={"City"}
            name={"city"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            value={city}
            size="small"
            fullWidth
          />
        </Box>
        <Box component={"div"} display={"flex"} gap={"20px"}>
          <TextField
            variant="outlined"
            label={"Zip Code"}
            name={"zipcode"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
            helperText={formik.touched.zipcode && formik.errors.zipcode}
            value={zipcode}
            size="small"
            fullWidth
          />
          <TextField
            variant="outlined"
            label={"Country"}
            value={country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
            name={"country"}
            size="small"
            fullWidth
          />
        </Box>
        <Box component={"div"} display={"flex"} gap={"20px"}>
          <TextField
            variant="outlined"
            label={"Address 1"}
            value={addressLine1}
            onChange={formik.handleChange}
            error={
              formik.touched.addressLine1 && Boolean(formik.errors.addressLine1)
            }
            helperText={
              formik.touched.addressLine1 && formik.errors.addressLine1
            }
            name={"addressLine1"}
            size="small"
            fullWidth
          />
          <TextField
            variant="outlined"
            label={"Address 2"}
            value={addressLine2}
            onChange={formik.handleChange}
            name={"addressLine2"}
            size="small"
            fullWidth
          />
        </Box>
        <Box component={"div"} display={"flex"} gap={"20px"}>
          <TextField
            variant="outlined"
            label={"Landmark"}
            value={landmark}
            onBlur={formik.handleBlur}
            error={formik.touched.landmark && Boolean(formik.errors.landmark)}
            helperText={formik.touched.landmark && formik.errors.landmark}
            onChange={formik.handleChange}
            name={"landmark"}
            size="small"
            fullWidth
          />
          <TextField
            variant="outlined"
            label={"Address Type"}
            value={addressType}
            onBlur={formik.handleBlur}
            error={
              formik.touched.addressType && Boolean(formik.errors.addressType)
            }
            helperText={formik.touched.addressType && formik.errors.addressType}
            onChange={formik.handleChange}
            name={"addressType"}
            size="small"
            fullWidth
          />
        </Box>
        <Button variant="contained" onClick={handleCancel} fullWidth>
          Cancel
        </Button>
        <Button type="submit" disabled={loading} variant="outlined" fullWidth>
          {loading ? "Saving..." : "Save"}
        </Button>
      </Box>
    </div>
  );
};

export default NewAddressForm;
