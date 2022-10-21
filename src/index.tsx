import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import ThemeContextWrapper from "src/context/ThemeContext";
import App from "./App";
import { store } from "store/index";
import "./firebase";
import "./i18n";
import "./style.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback="...is loading">
      <Provider store={store}>
        <ThemeContextWrapper>
          <App />
        </ThemeContextWrapper>
      </Provider>
    </Suspense>
  </StrictMode>
);
