import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ff5b00",
    },
    text: {
      primary: "#000000",
      secondary: "#ff5b00",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ff5b0050",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#ff5b00",
    },
    text: {
      primary: "#ff5b00",
      secondary: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#ff5b0050",
    },
  },
});
