import React, { useEffect } from 'react';
import { Container } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import theme from "./styles/theme";
import Appbar from './components/appbar/Appbar';
const App = () => {

  useEffect(() => {
    document.title = "React Material Ui - Home";
  }, [])
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xl' sx={{ background: "#fff" }}>
        <Appbar />
        {/* {
        AppBar
        Banner
        Promotion
        Title
        Products
        Footer
      } */}

      </Container>
    </ThemeProvider>
  );
};

export default App;