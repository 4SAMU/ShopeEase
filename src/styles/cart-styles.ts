import { Button, styled } from "@mui/material";

export const CartsWrapper = styled("section")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "20px",

  h2: {
    fontSize: "1.1rem",
    fontWeight: "400",
  },
  h3: {
    fontSize: "1.1rem",
    fontWeight: "400",
    height: "max-content",
  },
  p: {
    fontSize: "0.936rem",
    fontWeight: "400",
  },
  ".price": {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  span: {
    fontSize: "15px",
    fontWeight: "300",
  },

  ".link-hover": {
    ":hover": {
      cursor: "pointer",
      h3: {
        color: theme.palette.secondary.main,
      },
    },
  },
  "@media (max-width: 850px)": {
    flexDirection: "column-reverse",
  },
}));

export const CartItems = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "calc(100% - 360px)",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#ffffff10",

  ".items": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "20px 0",

    img: {
      width: "100px",
      height: "100px",
      borderRadius: "5px",
    },
  },
  ".row_items": {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  },

  ".article": {
    width: "100%",
    justifyContent: "space-between",
    padding: "0 20px",
    "@media (max-width: 599px)": {
      padding: "0 10px",
      justifyContent: "unset",
      flexDirection: "column",
      gap: "5px",
    },
  },

  ".column_items": {
    display: "flex",
    flexDirection: "column",
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingBottom: "25px",
  },

  "@media (max-width: 1535px)": {
    width: "calc(100% - 280px)",
  },
  "@media (max-width: 850px)": {
    width: "100%",
  },
}));

export const CartSummary = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "250px",
  height: "160px",
  padding: "20px",
  borderRadius: "8px",
  position: "sticky",
  top: "80px",
  backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#ffffff10",
  "@media (max-width: 850px)": {
    width: "100%",
    position: "sticky",
    top: "146px",
    boxShadow:
      theme.palette.mode === "light"
        ? "0px 4px 8px rgba(0, 0, 0, 0.2)" // Light theme shadow
        : "0px 4px 8px rgba(255, 255, 255, 0.1)", // Dark theme shadow
  },
  "@media (max-width: 599px)": {
    top: "135px",
  },
}));

export const RemoveButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  padding: "4px 10px",
  borderRadius: "5px",
  background:
    theme.palette.mode === "light"
      ? theme.palette.background.paper
      : "#ff5b0050",
  color: theme.palette.secondary.main,
}));

export const RemoveFromCartModalWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: "0",
  left: "0",
  zIndex: 2,
  background: theme.palette.mode === "light" ? "#00000020" : "#ffffff10",

  h2: {
    fontSize: "1.125rem",
    fontWeight: "400",
  },
  h3: {
    fontSize: "1.125rem",
    fontWeight: "400",
  },
  p: {
    fontSize: "0.925rem",
    fontWeight: "400",
  },

  ".modal": {
    display: "flex",
    flexDirection: "column",
    width: "400px",
    padding: "20px",
    gap: "10px",
    borderRadius: "8px",
    background: theme.palette.mode === "light" ? "#fff" : "#121212",
    boxShadow:
      theme.palette.mode === "light"
        ? "0px 4px 8px rgba(0, 0, 0, 0.1)" // Light theme shadow
        : "0px 4px 8px rgba(255, 255, 255, 0.1)", // Dark theme shadow
  },

  "@media (max-width: 599px)": {
    ".modal": {
      width: "80%",
    },
  },
}));
