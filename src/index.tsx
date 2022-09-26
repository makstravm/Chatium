import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import CssBaseline from "@mui/material/CssBaseline";

import { store } from "store/index";

import App from "./App";

import "./firebase";
import "./style.scss";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);
