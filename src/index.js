import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

import AuthProvider from "./contexts/auth";
import AlertProvider from './contexts/alert';
import './index.css';
import Routes from './routes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3c493f'
    },
    secondary: {
      main: '#7e8d85'
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AlertProvider>
          <Routes />
        </AlertProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
