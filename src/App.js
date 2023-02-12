import {ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesContainer from './Containers/RoutesContainer';
import {store} from './redux/store';
import { Provider } from 'react-redux';
import Footer from './Components/Footer/Footer';
=======
>>>>>>> f5f260ce8d40198e76bed07502c1491d1329f631
import './App.css';
import Header from './Components/Header/Header';


function App() {
  const appTheme = createTheme({
    mainTheme:{
      primaryColor:"#A232F0",
<<<<<<< HEAD
      primaryColorHover:"#680C91",
      mainBackgroundColor:"linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
      transitions:{
        growTransition:"color 0.5s 0s ease"
      }
=======
      primaryColorHover:"#680C91"
>>>>>>> f5f260ce8d40198e76bed07502c1491d1329f631
    },
    components:{
      MuiAppBar:{
        styleOverrides:{
          root:{
<<<<<<< HEAD
            backgroundColor:"#A232F0",
            zIndex:1500
=======
            backgroundColor:"#A232F0"
>>>>>>> f5f260ce8d40198e76bed07502c1491d1329f631
          }
        }
      }
    }
  })

  return (
    <div className="App">
<<<<<<< HEAD
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={appTheme}>
            <Header/>
            <RoutesContainer/>
            <Footer/>
          </ThemeProvider>
        </Router>
      </Provider>
=======
      <ThemeProvider theme={appTheme}>
        <Header/>
      </ThemeProvider>
>>>>>>> f5f260ce8d40198e76bed07502c1491d1329f631
    </div>
  );
}

export default App;
