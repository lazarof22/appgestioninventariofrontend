'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import '../app/globals.css';

// Crear un tema personalizado con los colores especificados
const landingTheme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#0b0616", // violeta oscuro elegante
      paper: "rgba(255,255,255,0.06)", // glassmorphism
    },

    primary: {
      main: "#d946ef", // fucsia vibrante (CTA)
      light: "#f472ff",
      dark: "#a21caf",
      contrastText: "#ffffff",
    },

    secondary: {
      main: "#fb923c", // naranja suave del gradient
      light: "#fdba74",
      dark: "#ea580c",
      contrastText: "#000000",
    },

    text: {
      primary: "#f5f3ff", // blanco suave
      secondary: "#d8b4fe", // lila claro
      disabled: "#9ca3af",
    },

    divider: "rgba(255,255,255,0.08)",

    error: {
      main: "#f43f5e",
    },
    success: {
      main: "#22c55e",
    },
    info: {
      main: "#38bdf8",
    },
    warning: {
      main: "#facc15",
    },
  },

  typography: {
    fontFamily: `'Inter', 'Roboto', 'Segoe UI', sans-serif`,

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontWeight: 700,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },

  shape: {
    borderRadius: 16,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background:
            "radial-gradient(circle at top left, #4c1d95, #0b0616 60%)",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(10px)",
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingLeft: 24,
          paddingRight: 24,
        },
        containedPrimary: {
          background:
            "linear-gradient(90deg, #d946ef, #fb923c)",
          boxShadow: "0 8px 30px rgba(217,70,239,0.4)",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
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
          <ThemeProvider theme={landingTheme}>
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