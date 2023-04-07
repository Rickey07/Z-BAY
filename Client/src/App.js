import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import RoutesContainer from "./Containers/RoutesContainer";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Header from "./Components/Header/Header";
import Toast from "./Components/Toast/Toast";
import { useSelector } from "react-redux";

function App() {
  const toastState = useSelector((state) => state?.global?.toastAlertState);

  const { visible, message, messageType } = toastState;
  const appTheme = createTheme({
    mainTheme: {
      primaryColor: "#A232F0",
      primaryColorHover: "#680C91",
      mainBackgroundColor: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
      transitions: {
        growTransition: "color 0.5s 0s ease",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#A232F0",
            zIndex: 1500,
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            "&$selected": {
              backgroundColor: "#101010",
            },
          },
        },
      },
    },
  });

  const isAdmin = false;

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={appTheme}>
          <Header />
          {visible && (
            <Toast open={visible} message={message} messageType={messageType} />
          )}
          <RoutesContainer />
          {isAdmin && <Footer />}
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
