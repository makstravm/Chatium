import React from "react";

import FormComponent from "components/common/FormComponent";

import {
  loginFormFields,
  loginInitialValue,
} from "constants/forms/loginFormsFields";

import { loginValidationSchema } from "helpers/loginValidationSchema";

import { FormikValuesType } from "components/common/types";

const SignIn = () => {
  return (
    <div>
      <FormComponent
        initialValues={loginInitialValue}
        onSubmit={(value: FormikValuesType) => value}
        formFields={loginFormFields}
        buttonTitle="Sign In"
        validationSchema={loginValidationSchema}
      />
    </div>
  );
};

export default SignIn;
