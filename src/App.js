import React from "react"
import { ThemeProvider,  } from '@mui/material/styles'
import theme from "./styles/theme";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
     <LandingPage/>
    </ThemeProvider>
  );
}

export default App
