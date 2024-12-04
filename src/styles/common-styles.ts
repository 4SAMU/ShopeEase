import { Button, IconButton, styled } from "@mui/material";

export const MainWrapper = styled("main")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.default,
  minHeight: "calc(100vh - 380px)",
  padding: "20px 300px",
  "@media (max-width: 1535px)": {
    padding: "20px 8%",
  },

  "@media (max-width: 899px)": {
    padding: "20px 5%",
    minHeight: "calc(100vh - 450px)",
  },
  "@media (max-width: 599px)": {
    padding: "20px 3.5%",
  },
}));

export const CustomIconButton = styled(IconButton)(() => ({
  padding: "5px",

  ":hover": {
    background: "#ff5b0020",
  },
}));

export const OrangeButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  borderRadius: "5px",
  padding: "5px 20px",
  minWidth: "30px",
  ":disabled": {
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.common.white,
  },
}));

export const OutlinedButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.secondary.main}`,
  color: theme.palette.secondary.main,
  borderRadius: "5px",
  padding: "5px 20px",
  minWidth: "30px",
  ":disabled": {
    color: theme.palette.secondary.main,
  },
}));

//no items found
export const NoItemsFound = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "15px",
  borderRadius: "8px",
  padding: "40px 20px",
  backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#ffffff10",

  h2: {
    fontSize: "1.1rem",
    fontWeight: "400",
  },
  h3: {
    fontSize: "1.1rem",
    fontWeight: "400",
  },
  p: {
    fontSize: "0.936rem",
    fontWeight: "400",
  },

  svg: {
    color: theme.palette.secondary.main,
    width: "5rem",
    height: "5rem",
  },
}));
