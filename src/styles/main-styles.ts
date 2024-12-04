import { styled } from "@mui/material";

export const CategoryAndCarouselWrapper = styled("section")(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "20px",

  "@media screen and (max-width: 899px)": {
    flexDirection: "column-reverse",
    position: "sticky",
    top: "-310px",
    zIndex: 1,
  },

  "@media screen and (max-width: 599px)": {
    position: "sticky",
    top: "-240px",
    zIndex: 1,
  },
}));

export const CategoryCardWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px 20px 30px 20px",
  borderRadius: "5px",
  background:
    theme.palette.mode === "light"
      ? theme.palette.background.default
      : "#4A4A4A50",

  boxShadow:
    theme.palette.mode === "light"
      ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
      : "0px 4px 8px rgba(255, 255, 255, 0.1)",
  width: "30%",
  h1: {
    color: theme.palette.text.primary,
    fontSize: "18px",
  },

  ".category-card": {
    display: "flex",
    flexDirection: "column",
  },

  "@media screen and (max-width: 899px)": {
    width: "100%",
    boxShadow: "none",

    h1: {
      fontSize: "16px",
    },

    ".category-card": {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "10px",
      justifyContent: "space-between",
    },
  },

  "@media screen and (max-width: 599px)": {
    padding: "10px 0",
  },
}));

interface IcardButton {
  isHovered: boolean;
}

export const CardButton = styled("button")<IcardButton>(
  ({ theme, isHovered }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    border: "none",
    backgroundColor: "transparent",
    width: "max-content",
    padding: "10px 0",
    cursor: "pointer",

    ".category-image": {
      svg: {
        width: "30px",
        height: "30px",
      },
    },

    ".category-name": {
      position: "relative",
      color: theme.palette.text.primary,
      fontSize: "16px",
      padding: "8px 0px",
      "@media screen and (min-width: 900px)": {
        ":after": {
          content: "''",
          position: "absolute",
          top: "100%",
          left: "0",
          display: "block",
          width: "100%",
          height: "1px",
          backgroundColor: theme.palette.secondary.main,
          transition: "transform 0.3s",
          transform: !isHovered ? "scaleX(0)" : "scaleX(1)",
          transformOrigin: "0% 0%",
        },
      },
    },

    "@media screen and (max-width: 899px)": {
      width: "120px",
      height: "120px",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      padding: "10px",

      ":after": {
        content: "''",
        position: "absolute",
        top: "100%",
        left: "0",
        display: "block",
        width: "100%",
        height: "1px",
        backgroundColor: theme.palette.secondary.main,
        transition: "transform 0.3s",
        transform: !isHovered ? "scaleX(0)" : "scaleX(1)",
        transformOrigin: "0% 0%",
      },

      boxShadow:
        theme.palette.mode === "light"
          ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
          : "0px 4px 8px rgba(255, 255, 255, 0.1)",

      ".category-image": {
        width: "55px",
        height: "55px",
      },

      ".category-name": {
        fontSize: "12px",
        padding: "0",
      },
    },

    "@media screen and (max-width: 599px)": {
      width: "80px",
      height: "80px",

      ".category-image": {
        width: "30px",
        height: "30px",
      },
    },
    "@media screen and (max-width: 400px)": {
      width: "68.5px",
      height: "75px",

      ".category-image": {
        width: "30px",
        height: "30px",
      },
    },
  })
);

export const ProductsDisplaySection = styled("section")(({}) => ({
  display: "grid",
  flexWrap: "wrap",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  margin: "30px 0",
  columnGap: "30px",
  rowGap: "60px",
  padding: "20px 5px 100px 5px",
  height: "auto",

  "@media (max-width: 899px)": {
    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
    columnGap: "40px",
  },

  "@media (max-width: 599px)": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    columnGap: "10px",
    justifyContent: "space-between",
    paddingBottom: "40px",
  },
}));

export const ProductsCard = styled("article")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "230px",
  minHeight: "360px",
  paddingBottom: "20px",
  background:
    theme.palette.mode === "light"
      ? theme.palette.background.default
      : "#4A4A4A50",
  borderRadius: "5px",
  boxShadow:
    theme.palette.mode === "light"
      ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
      : "0px 4px 8px rgba(255, 255, 255, 0.1)",

  img: {
    background: "#ffffff99",
    width: "100%",
    height: "200px",
    borderRadius: "5px 5px 0 0",
    objectFit: "contain",
  },
  header: {
    padding: "2px 10px",
    h2: {
      fontSize: "15px",
      fontWeight: "500",
      margin: "5px 0",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "3",
      overflow: "hidden", // Ensure that the content is clipped if it overflows
      textOverflow: "ellipsis", // Adds the ellipsis for overflowed text

      "@media (max-width: 599px)": {
        WebkitLineClamp: "2",
      },
    },

    p: {
      fontWeight: "700",
      fontSize: "20px",
      color: theme.palette.primary.main,
    },
  },

  ".add_remove_from_cart": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "8px",
    width: "calc(100% - 20px)",
    left: "50%",
    transform: "translateX(-50%)",
    height: "40px",
  },

  ":hover": {
    boxShadow:
      theme.palette.mode === "light"
        ? "0px 4px 8px rgba(0, 0, 0, 0.25)"
        : "0px 4px 8px rgba(255, 255, 255, 0.25)",
  },

  "@media (max-width: 899px)": {
    width: "200px",
  },

  "@media (max-width: 599px)": {
    width: "160px",
    height: "280px",
    flex: "1  1 35%",
    minHeight: "290px",
    h2: {
      fontSize: "12px !important",
    },
    p: {
      fontSize: "15px !important",
    },
    img: {
      height: "160px",
    },
  },
  "@media (max-width: 383px)": {
    width: "100%",
  },
}));

export const DetailedProductsWrappper = styled("section")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  h2: {
    fontSize: "20px",
    fontWeight: "500",
  },
  h3: {
    fontSize: "20px",
    fontWeight: "700",
  },
  p: {
    fontSize: "16px",
    fontWeight: "400",
  },
  ".price": {
    fontSize: "22px",
    fontWeight: "700",
  },
  ".top_section": {
    padding: "20px",
    display: "flex",
    flexDirection: "row",
    borderRadius: "5px",
    gap: "25px",
    width: "100%",
    backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#ffffff10",
    img: {
      width: "300px",
      height: "300px",
      borderRadius: "5px",
    },
  },
  ".right_section": {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  ".about_product": {
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    padding: "30px 30px 50px 30px",
    marginTop: "2px",
    gap: "10px",
    backgroundColor: theme.palette.mode === "light" ? "#ffffff" : "#ffffff10",
  },

  "@media (max-width: 899px)": {
    ".top_section": {
      gap: "20px",
    },
    h2: {
      fontSize: "18px",
    },
    p: {
      fontSize: "14px",
    },
    ".price": {
      fontSize: "20px",
    },
    ".right_section": {
      gap: "10px",
    },
  },
  "@media (max-width: 635px)": {
    ".top_section": {
      flexWrap: "wrap",
    },
  },
  "@media (max-width: 599px)": {
    h2: {
      fontSize: "16px",
    },
    p: {
      fontSize: "14px",
    },
    ".price": {
      fontSize: "18px",
    },

    ".about_product": {
      padding: "30px 20px 50px 20px",
    },
  },
  "@media (max-width: 370px)": {
    ".top_section": {
      img: {
        width: "100%",
        height: "300px",
      },
    },
  },
}));
