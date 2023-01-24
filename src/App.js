import {ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import './App.css';
import Header from './Components/Header/Header';


function App() {
  const appTheme = createTheme({
    mainTheme:{
      primaryColor:"#A232F0",
      primaryColorHover:"#680C91"
    },
    components:{
      MuiAppBar:{
        styleOverrides:{
          root:{
            backgroundColor:"#A232F0"
          }
        }
      }
    }
  })

  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <Header/>
      </ThemeProvider>
    </div>
  );
}

export default App;
