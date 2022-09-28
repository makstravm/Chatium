import React from "react";

import FormComponent from "components/common/FormComponent";

import {
  loginFormFields,
  loginInitialValue,
} from "constants/forms/loginFormsFields";

import { loginValidationSchema } from "helpers/loginValidationSchema";

import { FormikValuesType } from "components/common/types";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RoutesUrls } from "constants/routes";

const SignIn = () => (
  <>
    <Box pt={1} pb={3}>
      <Typography variant="h5" component="h5" fontWeight={700} align="center">
        Sign in
      </Typography>
      <Typography variant="body1" component="div" align="center">
        Sign in to continue to Chatvia.
      </Typography>
    </Box>
    <FormComponent
      initialValues={loginInitialValue}
      onSubmit={(value: FormikValuesType) => value}
      formFields={loginFormFields}
      buttonTitle="Sign In"
      validationSchema={loginValidationSchema}
    />
    <Box pt={3} pb={1}>
      <Typography variant="body1" component="div" align="center">
        Don&apos;t have an account ?{" "}
        <Link to={RoutesUrls.SIGN_UP}>Signup now</Link>
      </Typography>
    </Box>
  </>
);

export default SignIn;
