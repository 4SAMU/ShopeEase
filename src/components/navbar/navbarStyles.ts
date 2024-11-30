import { Button, styled } from "@mui/material";

export const NavbarWrapper = styled("header")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "80px",
  padding: "0 300px",

  ".search-bar": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    height: "40px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    padding: "0 0 0 20px",
    gap: "20px",
    boxShadow:
      theme.palette.mode === "light"
        ? "0px 4px 8px rgba(0, 0, 0, 0.1)" // Light theme shadow
        : "0px 4px 8px rgba(255, 255, 255, 0.3)", // Dark theme shadow

    "& input": {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      width: "100%",
      height: "100%",
      fontSize: "16px",
    },

    svg: {
      color: "#ff5b00",
      cursor: "pointer",
    },
  },
}));

export const OutlineTextLogo = styled("span")(() => ({
  fontWeight: "1000",
  fontSize: "32px",
  color: "transparent",
  WebkitTextStroke: "1.5px #ff5b00",
  WebkitTextFillColor: "transparent",
  fontStyle: "italic",
  cursor: "pointer",

  "@media (max-width: 599px)": {
    fontSize: "25px",
  },
}));

export const SearchButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  borderRadius: "0 20px 20px 0",
  height: "calc(100% + 2.2px)",
  marginTop: "-0.85px",
  width: "120px",
}));
