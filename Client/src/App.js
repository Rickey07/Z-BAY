import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import RoutesContainer from "./Containers/RoutesContainer";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import Header from "./Components/Header/Header";

function App() {
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
      MuiListItem:{
        styleOverrides:{
          root:{
            "&$selected":{
              backgroundColor:"#101010" 
            }
          }
        }
      }
    },
  });

  const isAdmin = false;

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={appTheme}>
              <Header />
              <RoutesContainer />
              {
                isAdmin && <Footer />
              }
          </ThemeProvider>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
