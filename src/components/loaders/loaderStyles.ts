import { keyframes, styled } from "@mui/material";

const shimmer = keyframes`
    0% { 
        background-position: -468px 0;
    }
    100% { 
        background-position: 468px 0;
    }      
`;

export const SkeletonCard = styled("div")({
  position: "relative",
  width: "230px",
  minHeight: "290px",
  border: "1px solid #e0e0e0",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "0 0 10px 0",
});

export const SkeletonPlaceholder = styled("div")(() => ({
  backgroundColor: "#e0e0e0",
  animation: `${shimmer} 5s infinite linear`,
  background: "linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)",
  backgroundSize: "100% 100%",
  backgroundRepeat: "repeat",
  transition: "0.3s backgroundRepeat ease-in-out",
  borderRadius: "4px",
}));

export const SkeletonButton = styled("div")(() => ({
  position: "relative",
  backgroundColor: "#ff5b00",
  animation: `${shimmer} 5s infinite linear`,
  background:
    "linear-gradient(to right, #ff5b00 8%, #ff5b0050 18%, #ff5b00 33%)",
  backgroundSize: "100% 100%",
  backgroundRepeat: "repeat",
  transition: "0.3s backgroundRepeat ease-in-out",
  borderRadius: "4px",
}));
