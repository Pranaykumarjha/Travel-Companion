import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StylesThemeProvider } from "@mui/styles";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <StylesThemeProvider theme={theme}>
        <App />
      </StylesThemeProvider>
    </MuiThemeProvider>
  </React.StrictMode>
);
