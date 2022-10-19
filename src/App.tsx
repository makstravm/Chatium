import { useContext, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import SignIn from "components/Authentication/SignIn";
import SignUp from "components/Authentication/SignUp";
import ProtectedRoute from "components/ProtectedRoute";
import { ThemeContext } from "contexts/ThemeContext";
import AuthContextWrapper from "contexts/AuthContex";
import { RoutesUrls } from "constants/routes";
import { Theme } from "constants/themeMode";
import Authorization from "pages/Authorization";
import { lightTheme } from "themes/lightTheme";
import { darkTheme } from "themes/darkTheme";
import Layout from "pages/Layout";

const { SIGN_IN, SIGN_UP } = RoutesUrls;

const App = () => {
  const { themeMode } = useContext(ThemeContext);

  const theme = useMemo(
    () => createTheme(themeMode === Theme.DARK ? darkTheme : lightTheme),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <AuthContextWrapper>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Authorization />}>
              <Route path={SIGN_IN} element={<SignIn />} />
              <Route path={SIGN_UP} element={<SignUp />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path={"/"} element={<Layout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthContextWrapper>
    </ThemeProvider>
  );
};

export default App;
