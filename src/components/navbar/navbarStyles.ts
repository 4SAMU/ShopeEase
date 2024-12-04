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
  position: "sticky",
  top: 0,
  zIndex: 2,

  ".search-bar": {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "600px",
    height: "40px",
    borderRadius: "20px",
    border: "1px solid #ccc",
    padding: "0 0 0 20px",
    gap: "20px",
    boxShadow:
      theme.palette.mode === "light"
        ? "0px 4px 8px rgba(0, 0, 0, 0.1)" // Light theme shadow
        : "0px 4px 8px rgba(255, 255, 255, 0.1)", // Dark theme shadow

    "& input": {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      width: "100%",
      height: "100%",
      fontSize: "16px",
      color: theme.palette.text.primary,
    },
    svg: {
      color: "#ff5b00",
    },
  },

  ".shopping-cart": {
    display: "flex",
    alignItems: "center",
    gap: "2px",
    cursor: "pointer",
    fontSize: "20px",
    background: "transparent",
    border: "none",
    color: theme.palette.text.primary,

    ".cart": {
      position: "relative",
      svg: {
        color: theme.palette.primary.main,
      },
    },
    ":hover": {
      color: theme.palette.secondary.main,
      svg: {
        color: theme.palette.secondary.main,
      },
    },

    "&.active": {
      color: theme.palette.secondary.main,
      svg: {
        color: theme.palette.secondary.main,
      },
    },

    ".cart-count": {
      position: "absolute",
      top: "-10px",
      right: "-6px",
      color: "#fff",
      background: theme.palette.secondary.main,
      borderRadius: "50%",
      padding: "2px",
      width: "20px",
      height: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1,
      fontSize: "10px",
      fontWeight: "bold",
    },
  },

  "@media screen and (max-width: 1535px)": {
    padding: "0 8%",
  },
  "@media screen and (max-width: 1200px)": {
    ".search-bar": {
      width: "50%",
    },
  },
  "@media screen and (max-width: 899px)": {
    padding: "20px 5% 20px 5%",
    flexDirection: "column",
    alignItems: "start",
    height: "auto",
    gap: "20px",

    ".search-bar": {
      width: "100%",
    },

    ".shopping-cart": {
      position: "absolute",
      right: "5%",
      top: "20px",
    },
  },
}));

export const OutlineTextLogo = styled("span")(() => ({
  fontWeight: "1000",
  fontSize: "32px",
  color: "transparent",
  // WebkitTextStroke: "1.5px #ff5b00",
  WebkitTextFillColor: "#ff5b00",
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
  height: "calc(100% + 2px)",
  margin: "0 -1px 0 0",
  width: "120px",
}));

export const SearchSuggestions = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "calc(100% + 2px)",
  width: "calc(100% - 30px)",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "10px",
  backgroundColor: theme.palette.background.default,
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
      : "0px 4px 8px rgba(255, 255, 255, 0.1)",

  ".suggested-item": {
    padding: "2px 5px",
    cursor: "pointer",
    ":hover": {
      background:
        theme.palette.mode === "light"
          ? "rgba(0, 0, 0, 0.09)"
          : "rgba(255, 255, 255, 0.09)",
    },
  },
}));
