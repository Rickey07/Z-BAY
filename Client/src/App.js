import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import RoutesContainer from "./Containers/RoutesContainer";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Header from "./Components/Header/Header";
import Toast from "./Components/Toast/Toast";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";
import FallbackHeader from "./Components/Fallback/FallbackHeader";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const toastState = useSelector((state) => state?.global?.toastAlertState);

  const { visible, message, messageType } = toastState;
  const theme = createTheme({
    mainTheme: {
      primaryColor: "#A232F0",
      primaryColorHover: "#680C91",
      mainBackgroundColor: "#F6F9FC",
      transitions: {
        growTransition: "color 0.5s 0s ease",
      },
      primaryLight: "#101010",
      smallTextColor: "rgb(125, 135, 156)",
    },
    palette: {
      primary: {
        main: "#d23f57",
      },
      secondary: {
        main: "#F3F5F9",
      },
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            // backgroundColor: "#A232F0",
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

  const isAdmin = true;

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <ThemeProvider theme={theme}>
          {/* <ErrorBoundary fallback={<FallbackHeader/>}> */}
          <Header />
          {/* </ErrorBoundary> */}
          {visible && (
            <Toast open={visible} message={message} messageType={messageType} />
          )}
          <RoutesContainer />
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
