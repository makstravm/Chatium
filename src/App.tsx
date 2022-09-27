import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormComponent from "./components/common/FormComponent";
import { FormikValuesType } from "./components/common/types.";
import {
  loginFormFields,
  loginInitialValue,
} from "./constants/forms/loginFormsFields";
import { RoutesUrls } from "./constants/routes";
import { loginValidationSchema } from "./helpers/loginValidationSchema";
import Authorization from "./pages/Authorization";

const { HOME } = RoutesUrls;

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Authorization />}>
        <Route
          path={HOME}
          element={
            <FormComponent
              initialValues={loginInitialValue}
              onSubmit={(value: FormikValuesType) => value}
              formFields={loginFormFields}
              buttonTitle="Sign In"
              validationSchema={loginValidationSchema}
            />
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
