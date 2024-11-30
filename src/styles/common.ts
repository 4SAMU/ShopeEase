import { IconButton, styled } from "@mui/material";

export const MainWrapper = styled("main")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  minHeight: "calc(100vh - 60px + 200px)",
  padding: "20px 300px",
}));

export const CustomIconButton = styled(IconButton)(({ theme }) => ({
  padding: "5px",
  ":hover": {
    backgroundColor: theme.palette.background.paper,
  },
}));
