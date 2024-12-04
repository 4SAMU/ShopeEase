import React from "react";
import {
  SkeletonButton,
  SkeletonCard,
  SkeletonPlaceholder,
} from "./loaderStyles";

const CardSkeletonLoader = () => {
  const placeholderStyles = {
    cardImage: { width: "100%", height: "200px", mb: "10px" },
    cardText: { width: "95%", height: "10px", margin: "3px auto" },
    cardSubtitle: { width: "95%", height: "20px", margin: "8px auto" },
    button: { width: "95%", height: "40px", margin: "10px auto 10px auto" },
  };

  return (
    <>
      {[...Array(5)].map((_, index) => (
        <SkeletonCard key={index}>
          <SkeletonPlaceholder sx={placeholderStyles.cardImage} />
          <SkeletonPlaceholder sx={placeholderStyles.cardText} />
          <SkeletonPlaceholder sx={placeholderStyles.cardText} />
          <SkeletonPlaceholder sx={placeholderStyles.cardText} />
          <SkeletonPlaceholder sx={placeholderStyles.cardSubtitle} />
          <SkeletonButton sx={placeholderStyles.button} />
        </SkeletonCard>
      ))}
    </>
  );
};

export default CardSkeletonLoader;
