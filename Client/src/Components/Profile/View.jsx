import {
  Avatar,
  Box,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import MainModal from "../Modal/MainModal";
import Edit from "./Edit";

const View = ({ isVisible, handleClose,firstname,lastname,orders,email }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const userDetails = {
    firstName: firstname,
    lastName: lastname,
    email: email,
    phoneNo: "8770898508",
  };

  const DataToShowCard = ({ text, data }) => {
    return (
      <>
        <Paper
          component={"div"}
          sx={{ p: mobile?1:2, textAlign: "center" }}
          elevation={1}
        >
          <Typography component={"h6"} variant={"h6"} color={"primary"}>
            {data}
          </Typography>
          <Typography
            component={"small"}
            color={theme.mainTheme.smallTextColor}
            variant={"small"}
          >
            {text}
          </Typography>
        </Paper>
      </>
    );
  };

  return (
    <div>
      <Grid container spacing={mobile?2:4}>
        <Grid item md={6} xs={12}>
          <Paper component={"div"} elevation={1} sx={{ p: 2 }}>
            <Box component={"div"} sx={{ display: "flex", gap: 2 }}>
              <Avatar sx={{ width: 56, height: 56 }} />
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography component={"h5"} variant={"span"}>
                 { `${firstname} ${lastname}`}
                </Typography>
                <Typography component={"h5"} variant={"span"}>
                  {email}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item md={2} xs={6}>
          <DataToShowCard text={"All Orders"} data={orders} />
        </Grid>
        <Grid item md={2} xs={6}>
          <DataToShowCard text={"Awaiting Payments"} data={"-"} />
        </Grid>
        <Grid item md={2} xs={12}>
          <DataToShowCard text={"Awaiting Delivery"} data={"00"} />
        </Grid>
      </Grid>
      <Paper
        component={"div"}
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-around",
          mt: 3,
          flexDirection: mobile ? "column" : "row",
          gap: mobile && 3,
        }}
        elevation={2}
      >
        <Box
          component={"div"}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            component={"small"}
            variant={"small"}
            color={theme.mainTheme.smallTextColor}
          >
            First Name
          </Typography>
          <Typography component={"span"}>{firstname}</Typography>
        </Box>
        <Box
          component={"div"}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            component={"small"}
            variant={"small"}
            color={theme.mainTheme.smallTextColor}
          >
            Last Name
          </Typography>
          <Typography component={"span"}>{lastname}</Typography>
        </Box>
        <Box
          component={"div"}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            component={"small"}
            variant={"small"}
            color={theme.mainTheme.smallTextColor}
          >
            Email
          </Typography>
          <Typography component={"span"}>{email}</Typography>
        </Box>
        <Box
          component={"div"}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            component={"small"}
            variant={"small"}
            color={theme.mainTheme.smallTextColor}
          >
            Phone No.
          </Typography>
          <Typography component={"span"}>8770898508</Typography>
        </Box>
        <Box
          component={"div"}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography
            component={"small"}
            variant={"small"}
            color={theme.mainTheme.smallTextColor}
          >
            Country
          </Typography>
          <Typography component={"span"}>India</Typography>
        </Box>
      </Paper>
      {isVisible && (
        <MainModal
          isVisible={isVisible}
          handleClose={handleClose}
          ModalBody={<Edit formValues={userDetails} />}
        />
      )}
    </div>
  );
};

export default View;
