import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ThemeContextWrapper from "contexts/ThemeContext";
import App from "./App";
import { store } from "store/index";
import "./firebase";
import "./i18n";
import "./style.scss";

  <StrictMode>
    <Suspense fallback="...is loading">
      <Provider store={store}>
        <ThemeContextWrapper>
          <App />
        <ThemeContextWrapper>
      </Provider>
    </Suspense>
  </StrictMode>
);
