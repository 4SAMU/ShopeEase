import { styled } from "@mui/material";

export const CarouselWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "70%",
  minHeight: "250px",
  borderRadius: "5px",

  "@media screen and (max-width: 899px)": {
    width: "100%",
  },
}));

export const CarouselCard = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.background.paper,
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
      : "0px 4px 8px rgba(255, 255, 255, 0.1)",
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  padding: "10px 50px",
  img: {
    width: "300px ",
    height: "350px",
    objectFit: "contain",
  },

  article: {
    minWidth: "40%",
  },

  h2: {
    color: "#fff",
    fontSize: "28px",
    fontWeight: "1000",
  },

  p: {
    color: "#fff",
    fontSize: "18px",
  },

  "@media (max-width: 899px)": {
    padding: "10px 5%",
  },

  "@media (max-width: 599px)": {
    h2: {
      color: "#fff",
      fontSize: "18px",
      fontWeight: "1000",
    },
    p: {
      color: "#fff",
      fontSize: "14px",
    },

    img: {
      width: "200px ",
      height: "300px",
      objectFit: "contain",
    },
  },
}));
