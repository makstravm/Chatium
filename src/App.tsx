import { useContext, useMemo } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { SignIn } from "components/Authentication/SignIn";
import SignUp from "components/Authentication/SignUp";
import ProtectedRoute from "components/ProtectedRoute";
import { ThemeContext } from "src/context/ThemeContext";
import { AuthProviderWrapper } from "src/context/AuthContext";
import { RoutesUrls } from "constants/routes";
import { Theme } from "constants/themeMode";
import Layout from "pages/Layout";
import Authorization from "pages/Authorization";
import { lightTheme } from "themes/lightTheme";
import { darkTheme } from "themes/darkTheme";

const { MAIN, SIGN_IN, SIGN_UP, SUCCESS_SIGN_IN } = RoutesUrls;

const App = () => {
  const { themeMode } = useContext(ThemeContext);

  const theme = useMemo(
    () => createTheme(themeMode === Theme.DARK ? darkTheme : lightTheme),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <AuthProviderWrapper>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<Authorization />}>
              <Route path={SIGN_IN} element={<SignIn />} />
              <Route path={SIGN_UP} element={<SignUp />} />
            </Route>
            <Route path={MAIN} element={<ProtectedRoute />}>
              <Route path={SUCCESS_SIGN_IN} element={<Navigate to={MAIN} />} />
              <Route path={MAIN} element={<Layout />} />
              <Route path="*" element={<Navigate to={MAIN} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProviderWrapper>
    </ThemeProvider>
  );
};

export default App;
