import { LockRounded } from "@mui/icons-material";
import { Avatar, Typography, Paper, Grid, useTheme } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import ColorTabs from "../Components/Buttons/Tabs";
import SearchbarForFooter from "../Components/SearchBars/SearchbarForFooter";
import { validateEmail } from "../Constants/Validators/emailValidator";
import { passwordValidator } from "../Constants/Validators/passwordValidator";
import LoginUser from "../helpers/APICalls/loginUser";
import registerUser from "../helpers/APICalls/registerUser";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

  // Variables
  const testLoginData = { email: "test35@gmail.com", password: "Test@1234" };

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
  const handleSubmit = async (loginType) => {
    try {
      setLoading(true);
      const newRegisterData = { ...registerData };
      const newLoginData =
        loginType === "Guest" ? { ...testLoginData } : { ...loginData };
      if (currentTab !== "Login") {
        delete newRegisterData["password"];
        newRegisterData["encry_password"] = registerData.password;
        newRegisterData["email"] = registerData.email.toLowerCase();
      } else {
        newLoginData.email = newLoginData.email.toLowerCase();
      }
      const result =
        currentTab === "Login"
          ? await LoginUser(newLoginData)
          : await registerUser(newRegisterData);
      if (result.success) {
        if (result?.message.includes("registered")) {
          setCurrentTab("Login");
          toast.success("Registered Successfully Now Please Login");
        }
        if (result?.userDetails?.token) {
          if (
            signIn({
              token: result?.userDetails?.token,
              expiresIn: 4800,
              tokenType: "Bearer",
              authState: result?.userDetails,
            })
          ) {
            if (result?.userDetails?.role === 0) {
              navigate("/cart");
              toast.success("Login Success! Explore the world of Z-Bay");
            } else {
              navigate("/admin");
              toast.success("Welcome back Admin");
            }
          }
        }
      } else {
        toast.error(result.message);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
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
          <Avatar
            sx={{ backgroundColor: theme?.palette?.secondary?.contrastText }}
          >
            <LockRounded />
          </Avatar>
          <Typography
            component={"h2"}
            variant={"h5"}
            sx={{ color: theme?.palette?.secondary?.contrastText }}
          >
            {currentTab === "Login" ? "Login" : "Register"}
          </Typography>
          <Box
            component={"form"}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
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
              <Grid container spacing={2}>
                {registerFieldsData.map((label, index) => {
                  return (
                    <Grid item md={index === 0 || index === 1 ? 6 : 12} xs={12} key={label.label + index}>
                      <SearchbarForFooter
                        required={true}
                        key={label.label + index}
                        width={true}
                        errorText={
                          label.name === "email"
                            ? "Invalid Email Address"
                            : label.name === "password"
                            ? "Password should include 1 small case,1 capital letter,number and special character"
                            : (label.name === "firstname" ||
                              label.name === "lastname")
                            ? "First Name and Last Name should be of at least 6 characters"
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
              handleClick={() => handleSubmit()}
            />
            {currentTab === "Login" && (
              <PrimaryButton
                text={"Continue as Guest"}
                buttonSize="Large"
                // buttonColor={theme.palette.secondary.main}
                isLoading={loading}
                handleClick={() => handleSubmit("Guest")}
              />
            )}
          </Box>
          <Typography
            component={"a"}
            variant={"a"}
            sx={{
              alignSelf: "flex-end",
              gap: "5px",
              marginTop: "1rem",
              textDecoration: "underline",
              cursor: "pointer",
            }}
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
