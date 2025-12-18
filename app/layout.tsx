'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import '../app/globals.css';

// Crear un tema personalizado con los colores especificados
const darkTheme = createTheme({
  palette: {
    mode: 'dark',

    background: {
      default: '#000000',
      paper: '#0b0f12', // negro con leve profundidad
    },

    primary: {
      main: '#00e5ff', // cian brillante del logo
      light: '#62f7ff',
      dark: '#00b2cc',
      contrastText: '#000000',
    },

    secondary: {
      main: '#1e88e5', // azul tech complementario
      light: '#6ab7ff',
      dark: '#005cb2',
      contrastText: '#ffffff',
    },

    text: {
      primary: '#e0f7fa', // blanco frío
      secondary: '#80deea',
      disabled: '#4f5b62',
    },

    divider: '#00363a', // línea sutil cian oscuro

    error: {
      main: '#ff1744',
    },

    success: {
      main: '#00e676',
    },

    info: {
      main: '#00bcd4',
    },

    warning: {
      main: '#ff9100',
    },
  },

  typography: {
    fontFamily: `'Roboto', 'Segoe UI', sans-serif`,
    h1: {
      fontWeight: 700,
      letterSpacing: '0.05em',
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #0b0f12, #000000)',
          border: '1px solid #00363a',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
      },
    },
  },
});


export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Box
              sx={{
                minHeight: '100vh',
                backgroundColor: 'background.default',
                color: 'text.primary',
              }}
            >
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}