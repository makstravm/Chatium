import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "components/Authentication/SignIn";
import SignUp from "components/Authentication/SignUp";
import { RoutesUrls } from "./constants/routes";
import Authorization from "./pages/Authorization";
import { ThemeProvider } from "@mui/material";

const { SIGN_IN, SIGN_UP } = RoutesUrls;

const App = () => {
  const theme = 0;

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
