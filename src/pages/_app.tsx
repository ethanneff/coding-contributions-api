import { createTheme, ThemeProvider } from '@mui/material';
import { AppProps } from 'next/app';
import 'normalize.css/normalize.css';
import React, { StrictMode } from 'react';
import '../styles/globals.css';

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </StrictMode>
  );
}

export default MyApp;
