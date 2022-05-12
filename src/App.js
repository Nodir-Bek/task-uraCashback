import React from 'react';
import { useRoutes } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import 'react-perfect-scrollbar/dist/css/styles.css';
import GlobalStyles from './components/GlobalStyles';
import theme from './assets/theme';
import { protectedRoutes, publicRoutes } from './routes/routes';

const App = () => {
  const token = useSelector((state) => state.authReducer.token);
  const content = useRoutes(token ? protectedRoutes : publicRoutes);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {content}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
