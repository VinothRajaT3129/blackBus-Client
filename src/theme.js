// src/theme/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5", // Change to your desired primary color
    },
    secondary: {
      main: "#f50057", // Change to your desired secondary color
    },
    background: {
      default: "#f5f5f5", // Default background color
      paper: "#ffffff", // Paper background color
    },
    text: {
      primary: "#333333", // Primary text color
      secondary: "#666666", // Secondary text color
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif", // Change to your desired font family
    h1: {
      fontSize: "2rem",
      fontWeight: "600",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "600",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: "600",
    },
    body1: {
      fontSize: "1rem",
      color: "#444444", // Change body text color
    },
  },
});

export default theme;
