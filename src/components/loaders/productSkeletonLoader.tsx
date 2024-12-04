import { DetailedProductsWrappper } from "@/styles/main-styles";
import React from "react";
import { SkeletonButton, SkeletonPlaceholder } from "./loaderStyles";
import { Box, Rating } from "@mui/material";

const ProductSkeletonLoader = () => {
  const placeholderStyles = {
    cardImage: {
      width: "300px",
      height: "300px",
      mb: "10px",
      "@media (max-width: 599px)": {
        width: "100%",
      },
    },
    cardSubtitle: { width: "100%", height: "20px", margin: "4px auto" },
    cardText: { width: "100%", height: "10px", margin: "3px auto" },
    button: {
      width: "200px",
      height: "35px",
      mt: "10px",
      "@media (max-width: 899px)": {
        width: "100%",
      },
    },
  };
  return (
    <DetailedProductsWrappper>
      <div className="top_section">
        <SkeletonPlaceholder sx={placeholderStyles.cardImage} />
        <Box
          className="right_section"
          sx={{
            width: "calc(100% - 300px)",
            "@media (max-width: 599px)": {
              width: "100%",
            },
          }}
        >
          <SkeletonPlaceholder sx={placeholderStyles.cardSubtitle} />
          <SkeletonPlaceholder sx={placeholderStyles.cardSubtitle} />
          <Rating name="read-only" value={4} readOnly />
          <SkeletonButton sx={placeholderStyles.button} />
        </Box>
      </div>
      <div className="about_product">
        <h3>About this product</h3>
        <SkeletonPlaceholder sx={placeholderStyles.cardText} />
        <SkeletonPlaceholder sx={placeholderStyles.cardText} />
        <SkeletonPlaceholder sx={placeholderStyles.cardText} />
        <SkeletonPlaceholder sx={placeholderStyles.cardText} />
        <SkeletonPlaceholder sx={placeholderStyles.cardText} />
      </div>
    </DetailedProductsWrappper>
  );
};

export default ProductSkeletonLoader;
