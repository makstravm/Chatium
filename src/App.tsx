import { useContext, useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import SignIn from "components/Authentication/SignIn";
import SignUp from "components/Authentication/SignUp";
import { ThemeContext } from "contexts/ThemeContext";
import { RoutesUrls } from "constants/routes";
import Authorization from "pages/Authorization";
import { grey } from "@mui/material/colors";

const { SIGN_IN, SIGN_UP } = RoutesUrls;

const App = () => {
  const { themeMode } = useContext(ThemeContext);

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: ["-apple-system", "Public Sans", "sans-serif"].join(","),
          allVariants: { color: grey[900] },
        },
        palette: {
          mode: "light",
          background: { default: grey.A100 },
          primary: {
            main: grey.A400,
          },
          secondary: {
            main: grey[900],
          },
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={theme}>
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
