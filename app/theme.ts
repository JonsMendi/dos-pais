"use client";

import { createTheme, alpha } from "@mui/material/styles";

// A calm, premium palette inspired by ocean blue, sand, volcanic stone, and a touch of green.
const palette = {
  ocean: "#1F3D52", // deep ocean
  oceanSoft: "#3E6F8E", // softer slate-blue
  sea: "#7FA9C2", // sea spray accent
  sand: "#F4EDE0", // warm sand
  shell: "#FBFAF7", // off-white background
  stone: "#1C1D1F", // volcanic stone (text)
  mist: "#6B6F76", // muted secondary text
  moss: "#7C9885", // subtle green
  hairline: "#E7E2D7", // gentle dividers
};

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: palette.ocean,
      light: palette.oceanSoft,
      dark: "#142A3A",
      contrastText: palette.shell,
    },
    secondary: {
      main: palette.moss,
      contrastText: palette.shell,
    },
    background: {
      default: palette.shell,
      paper: "#FFFFFF",
    },
    text: {
      primary: palette.stone,
      secondary: palette.mist,
    },
    divider: palette.hairline,
    common: {
      black: palette.stone,
      white: palette.shell,
    },
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: "var(--font-geist-sans), system-ui, -apple-system, sans-serif",
    h1: {
      fontFamily: "var(--font-fraunces), Georgia, serif",
      fontWeight: 400,
      letterSpacing: "-0.02em",
      lineHeight: 1.05,
      fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
    },
    h2: {
      fontFamily: "var(--font-fraunces), Georgia, serif",
      fontWeight: 400,
      letterSpacing: "-0.015em",
      lineHeight: 1.1,
      fontSize: "clamp(2rem, 4.2vw, 3.25rem)",
    },
    h3: {
      fontFamily: "var(--font-fraunces), Georgia, serif",
      fontWeight: 400,
      letterSpacing: "-0.01em",
      lineHeight: 1.2,
      fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
    },
    h4: {
      fontFamily: "var(--font-fraunces), Georgia, serif",
      fontWeight: 400,
      lineHeight: 1.25,
      fontSize: "1.4rem",
    },
    h5: {
      fontWeight: 500,
      letterSpacing: "0.01em",
      fontSize: "1.05rem",
    },
    h6: {
      fontWeight: 500,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      fontSize: "0.78rem",
    },
    subtitle1: {
      fontSize: "1.1rem",
      lineHeight: 1.6,
      color: palette.mist,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    body2: {
      fontSize: "0.92rem",
      lineHeight: 1.65,
      color: palette.mist,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
      letterSpacing: "0.02em",
    },
    overline: {
      fontSize: "0.72rem",
      letterSpacing: "0.22em",
      fontWeight: 500,
      lineHeight: 1.6,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.shell,
          color: palette.stone,
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 24,
          paddingBlock: 12,
          fontSize: "0.95rem",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: palette.ocean,
            "&:hover": {
              backgroundColor: "#142A3A",
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            borderColor: alpha(palette.stone, 0.18),
            color: palette.stone,
            "&:hover": {
              borderColor: palette.stone,
              backgroundColor: alpha(palette.stone, 0.04),
            },
          },
        },
      ],
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          borderRadius: 24,
          backgroundColor: "#FFFFFF",
          border: `1px solid ${palette.hairline}`,
          overflow: "hidden",
          transition:
            "transform 400ms cubic-bezier(.2,.7,.2,1), box-shadow 400ms cubic-bezier(.2,.7,.2,1)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 500,
          letterSpacing: "0.04em",
          backgroundColor: palette.sand,
          color: palette.ocean,
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
        color: "transparent",
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: palette.hairline,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "none",
      },
    },
  },
});

export default theme;
