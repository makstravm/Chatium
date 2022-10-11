import { useContext, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import SignIn from "components/Authentication/SignIn";
import SignUp from "components/Authentication/SignUp";
import { ThemeContext } from "contexts/ThemeContext";
import { RoutesUrls } from "constants/routes";
import Authorization from "pages/Authorization";
import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";

const { SIGN_IN, SIGN_UP } = RoutesUrls;

const App = () => {
  const { themeMode } = useContext(ThemeContext);

  const theme = useMemo(
    () => createTheme(themeMode === "dark" ? darkTheme : lightTheme),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<Authorization />}>
            <Route path={SIGN_IN} element={<SignIn />} />
            <Route path={SIGN_UP} element={<SignUp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
