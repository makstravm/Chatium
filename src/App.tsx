import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "components/Authentification/SignIn";

import { RoutesUrls } from "./constants/routes";

import Authorization from "./pages/Authorization";

const { HOME } = RoutesUrls;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Authorization />}>
        <Route path={HOME} element={<SignIn />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
