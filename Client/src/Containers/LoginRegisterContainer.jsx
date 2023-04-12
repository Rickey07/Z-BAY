import { useTheme } from "@emotion/react";
import { LockRounded } from "@mui/icons-material";
import { Avatar, Typography, Paper, Grid } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import ColorTabs from "../Components/Buttons/Tabs";
import SearchbarForFooter from "../Components/SearchBars/SearchbarForFooter";
import { validateEmail } from "../Constants/Validators/emailValidator";
import { passwordValidator } from "../Constants/Validators/passwordValidator";
import LoginUser from "../helpers/APICalls/loginUser";
import registerUser from "../helpers/APICalls/registerUser";
import { globalActions } from "../redux/global";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const LoginRegisterContainer = () => {
  // This component will have  Login and Register Page
  //Additional Hooks
  const theme = useTheme();
  const signIn = useSignIn();
  const navigate = useNavigate();

  // Custom Variables
  const LoginFieldsData = [
    { label: "Email Address", name: "email" },
    { label: "Password", name: "password" },
  ];
  const registerFieldsData = [
    { label: "First Name", name: "firstname" },
    { label: "Last Name", name: "lastname" },
    { label: "Email Address", name: "email" },
    { label: "Password", name: "password" },
  ];

  // Redux Imports
  const dispatch = useDispatch();

  // States

  const [currentTab, setCurrentTab] = useState("Login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
    firstname: false,
    lastname: false,
  });
  const [loading, setLoading] = useState(false);

  // Methods

  // This will set the current Tab according to previous states
  const handleTab = () => {
    if (currentTab !== "Login") {
      setCurrentTab("Login");
    } else {
      setCurrentTab("Register");
    }
    setError({});
  };

  // This method will check set the state of the input

  const commonValidator = (event, tab) => {
    switch (tab) {
      case "Login":
        switch (event.target.name) {
          case "email":
            if (validateEmail(event.target.value)) {
              setLoginData({
                ...loginData,
                [event.target.name]: event.target.value,
              });
              setError({ ...error, email: false });
            } else {
              setError({ ...error, email: true });
            }
            break;
          case "password":
            if (passwordValidator(event.target.value)) {
              setLoginData({
                ...loginData,
                [event.target.name]: event.target.value,
              });
              setError({ ...error, password: false });
            } else {
              setError({ ...error, password: true });
            }
            break;
          default:
            break;
        }
        break;
      case "Register":
        switch (event.target.name) {
          case "email":
            if (validateEmail(event.target.value)) {
              setRegisterData({
                ...registerData,
                [event.target.name]: event.target.value,
              });
              setError({ ...error, email: false });
            } else {
              setError({ ...error, email: true });
            }
            break;
          case "password":
            if (passwordValidator(event.target.value)) {
              setRegisterData({
                ...registerData,
                [event.target.name]: event.target.value,
              });
              setError({ ...error, password: false });
            } else {
              setError({ ...error, password: true });
            }
            break;
          case "firstname":
            if (event.target.value.length > 5) {
              setRegisterData({
                ...registerData,
                [event.target.name]: event.target.value,
              });
              setError({ ...error, firstname: false });
            } else {
              setError({ ...error, firstname: true });
            }
            break;
          case "lastname":
            if (event.target.value.length > 5) {
              setRegisterData({
                ...registerData,
                [event.target.name]: event.target.value,
              });
              setError({ ...error, lastname: false });
            } else {
              setError({ ...error, lastname: true });
            }
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
  };

  const onChange = (e) => {
    commonValidator(e, currentTab);
  };

  // This method will submit the data
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const newRegisterData = { ...registerData };
      if (currentTab !== "Login") {
        delete newRegisterData["password"];
        newRegisterData["encry_password"] = registerData.password;
      }
      const result =
        currentTab === "Login"
          ? await LoginUser(loginData)
          : await registerUser(newRegisterData);
      const alertSuccessMessage = {
        visible: true,
        message: result.message,
        messageType: "success",
      };
      if (result.success) {
        dispatch(globalActions.toastAlertStateToggler(alertSuccessMessage));
        if (result?.userDetails?.token) {
          if (
            signIn({
              token: result?.userDetails?.token,
              expiresIn: 4800,
              tokenType: "Bearer",
              authState: result?.userDetails,
            })
          ) {
            navigate("/cart");
          }
        }
      } else {
        alertSuccessMessage.messageType = "error";  
        dispatch(globalActions.toastAlertStateToggler(alertSuccessMessage));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    console.log(currentTab === "Login" ? loginData : registerData);
  };

  return (
    <>
      <ColorTabs
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        setError={setError}
      />
      <Container component={"main"} maxWidth={"xs"} sx={{ padding: "2rem" }}>
        <Paper
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
          }}
          component={"div"}
          elevation={3}
        >
          <Avatar sx={{ backgroundColor: theme?.mainTheme?.primaryColor }}>
            <LockRounded />
          </Avatar>
          <Typography component={"h2"} variant={"h5"}>
            {currentTab === "Login" ? "Login" : "Register"}
          </Typography>
          <Box
            component={"form"}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
              marginTop: "2rem",
            }}
          >
            {currentTab === "Login" ? (
              // {Login Component}
              LoginFieldsData.map((label, index) => {
                return (
                  <SearchbarForFooter
                    required={true}
                    error={
                      label.name === "email" ? error.email : error.password
                    }
                    errorText={
                      label.name === "email"
                        ? "Invalid Email Address"
                        : "Password should include 1 small case,1 capital letter,number and special character"
                    }
                    key={label.label + index}
                    width={true}
                    name={label.name}
                    label={label.label}
                    onChange={onChange}
                  />
                );
              })
            ) : (
              // {Register Component}
              <Grid container rowGap={2}>
                {registerFieldsData.map((label, index) => {
                  return (
                    <Grid item md={index === 0 || index === 1 ? 6 : 12} xs={12}>
                      <SearchbarForFooter
                        required={true}
                        key={label.label + index}
                        width={true}
                        errorText={
                          label.name === "email"
                            ? "Invalid Email Address"
                            : label.name === "password"
                            ? "Password should include 1 small case,1 capital letter,number and special character"
                            : label.name === "firstname" ||
                              label.name === "lastname"
                            ? "These Fields Cannot be empty"
                            : ""
                        }
                        error={
                          label.name === "email"
                            ? error.email
                            : label.name === "password"
                            ? error.password
                            : label.name === "firstname"
                            ? error.firstname
                            : label.name === "lastname"
                            ? error.lastname
                            : false
                        }
                        name={label.name}
                        label={label.label}
                        onChange={onChange}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            )}

            <PrimaryButton
              text={currentTab === "Login" ? "Login" : "Register"}
              buttonSize="Large"
              isLoading={loading}
              handleClick={handleSubmit}
            />
          </Box>
          <Typography
            component={"a"}
            variant={"a"}
            sx={{ alignSelf: "flex-end", gap: "5px", marginTop: "1rem" }}
            onClick={handleTab}
          >
            {currentTab === "Login"
              ? "Dont'Have an account? Register Now"
              : "Already Have an account?Login Now"}
          </Typography>
        </Paper>
      </Container>
    </>
  );
};

export default LoginRegisterContainer;
