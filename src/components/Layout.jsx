import { ThemeProvider } from '@emotion/react';
import {
  AppBar,
  createTheme,
  CssBaseline,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

export default function Layout({ children }) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.8rem',
        fontStyle: 'italic',
        fontWeight: 700,
        textTransform: 'capitalize',
      },
      h2: {
        fontSize: '1.6rem',
        fontStyle: 'italic',
        fontWeight: 600,
        textTransform: 'capitalize',
      },
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#203040',
      },
      secondary: {
        main: '#f0c00',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <div>
            <Typography component={'h1'} variant='h1'>
              books
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </ThemeProvider>
  );
}
