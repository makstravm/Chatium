import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "components/Authentification/SignIn";

import { RoutesUrls } from "./constants/routes";

import Authorization from "./pages/Authorization";
import SignUp from "components/Authentification/SignUp";

const { HOME, SIGN_IN, SIGN_UP } = RoutesUrls;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Authorization />}>
        <Route path={HOME} element={<SignIn />} />
        <Route path={SIGN_IN} element={<SignIn />} />
        <Route path={SIGN_UP} element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
