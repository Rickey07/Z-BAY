import { useTheme } from "@emotion/react";
import { LockRounded } from "@mui/icons-material";
import { Avatar, Typography, Paper, Grid } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import PrimaryButton from "../Components/Buttons/PrimaryButton";
import ColorTabs from "../Components/Buttons/Tabs";
import SearchbarForFooter from "../Components/SearchBars/SearchbarForFooter";
import { validateEmail } from "../Constants/Validators/emailValidator";
import { passwordValidator } from "../Constants/Validators/passwordValidator";

const LoginRegisterContainer = () => {
  // This component will have  Login and Register Page

  const theme = useTheme();
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
  const [error, setError] = useState({email:false,password:false});

  // Methods

  // This will set the current Tab according to previous states
  const handleTab = () => {
    currentTab !== "Login" ? setCurrentTab("Login") : setCurrentTab("Register");
  };

  // This method will check set the state of the input

  const onChange = (e) => {

    // In This function we 're checking which Tab is activated then we're validating the email and password with help of validator functions.

    if (currentTab === "Login") {
      if (e.target.name === "email") {
        if(validateEmail(e.target.value)) {
          setLoginData({ ...loginData, [e.target.name]: e.target.value })
          setError({...error,email:false})  
        } else {
          setError({...error,email:true})
        }
      }
      if (e.target.name === "password") {
        if(passwordValidator(e.target.value)) {
          setLoginData({ ...loginData, [e.target.name]: e.target.value })
          setError({...error,password:false})
        } 
        else {
          setError({...error,password:true});
        }
      }
    } else {
      setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }
  };

  // This method will submit the data
  const handleSubmit = () => {
    console.log(currentTab === "Login" ? loginData : registerData);
  };

  return (
    <>
      <ColorTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
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
                    error={label.name === "email"?error.email:error.password}
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
