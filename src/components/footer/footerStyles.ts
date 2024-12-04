import { styled } from "@mui/material";

export const FooterWrapper = styled("footer")(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.text.primary,
  padding: "50px 300px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  columnGap: "100px",
  rowGap: "35px",
  marginTop: "auto",
  minHeight: "300px",
  borderTop: `1px solid ${theme.palette.divider}`,
  "@media (max-width: 1535px)": {
    padding: "20px 8%",
  },
  "@media (max-width: 899px)": {
    padding: "20px 5% 50px 5%",
  },
}));

export const QuickLinks = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "350px",
  gap: "10px",
  h2: {
    fontSize: "17px",
    color: theme.palette.common.white,
  },

  p: { fontSize: "15px", color: theme.palette.common.white },
  a: {
    position: "relative",
    fontSize: "15px",
    cursor: "pointer",
    color: theme.palette.common.white,
    fontWeight: "400",
    width: "max-content",

    ":after": {
      content: "''",
      position: "absolute",
      display: "block",
      top: "100%",
      left: "0",
      width: "100%",
      height: "1px",
      backgroundColor: theme.palette.secondary.main,
      transition: "transform 0.3s ease-in-out",
      transform: "scaleX(0)",
      transformOrigin: "0% 0%",
    },
    ":hover:after": {
      transform: "scaleX(1)",
    },
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    border: `1px solid ${theme.palette.common.white}`,
    height: "40px",
    background: "transparent",
    borderRadius: "5px",
    width: "100%",
    padding: "0 20px",
    color: theme.palette.common.white,
  },
}));

export const DarkLightModeWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // justifyContent: "flex-start",
  position: "absolute",
  gap: "20px",
  top: "50px",
  right: "300px",

  svg: {
    color: theme.palette.secondary.main,
  },

  "@media (max-width: 1535px)": {
    right: "8%",
  },
  "@media (max-width: 899px)": {
    top: "20px",
    right: "5%",
  },
}));
