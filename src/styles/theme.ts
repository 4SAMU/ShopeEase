import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
      dark: "#121212",
    },
    secondary: {
      main: "#ff5b00",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ff5b0050",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
      contrastText: "#000000",
      dark: "#121212",
    },
    secondary: {
      main: "#ff5b00",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
    background: {
      default: "#282828",
      paper: "#ff5b0099",
    },
    common: {
      white: "#ffffff",
      black: "#000000",
    },
  },
});
