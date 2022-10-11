import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import ThemeContextWrapper from "contexts/ThemeContext";
import { store } from "store/index";
import "./firebase";
import "./style.scss";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextWrapper>
        <CssBaseline />
        <App />
      </ThemeContextWrapper>
    </Provider>
  </React.StrictMode>
);
