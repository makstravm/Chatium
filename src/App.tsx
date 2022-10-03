import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "components/Authentication/SignIn";

import { RoutesUrls } from "./constants/routes";

import Authorization from "./pages/Authorization";
import SignUp from "components/Authentication/SignUp";

const { SIGN_IN, SIGN_UP } = RoutesUrls;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Authorization />}>
        <Route path={SIGN_IN} element={<SignIn />} />
        <Route path={SIGN_UP} element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
