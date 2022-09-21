import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { store } from "store/index";

import App from "./App";

import "./firebase";
import "./style.scss";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
