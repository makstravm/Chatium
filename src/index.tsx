import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ThemeContextWrapper from "contexts/ThemeContext";
import App from "./App";
import { store } from "store/index";
import "./firebase";
import "./style.scss";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextWrapper>
        <App />
      </ThemeContextWrapper>
    </Provider>
  </React.StrictMode>
);
