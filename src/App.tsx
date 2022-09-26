import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesUrls } from "./constants/routes";
import Authorization from "./pages/Authorization";

const { HOME } = RoutesUrls;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Authorization />}>
        <Route path={HOME} element={<div>Log in</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
