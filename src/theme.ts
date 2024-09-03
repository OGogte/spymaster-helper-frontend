import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#ff4081",
    },
    // You can add a custom color palette like this
    custom: {
      black: "#000000",
    },
  },
  shape: {
    borderRadius: 8,
  },
});

export default theme;
