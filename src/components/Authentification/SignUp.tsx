import React from "react";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import FormComponent from "components/common/FormComponent";

import {
  registrationFormFields,
  registrationInitialValue,
} from "constants/forms/registrationFormsFields";
import { RoutesUrls } from "constants/routes";

import { useSignUpMutation } from "store/slices/userSlice";

import { registerValidationSchema } from "helpers/registrationValidationSchema";

const SignUp = () => {
  const [signUp, { isLoading }] = useSignUpMutation();

  return (
    <>
      <Box pt={1} pb={3}>
        <Typography variant="h5" component="h5" fontWeight={700} align="center">
          Sign up
        </Typography>
        <Typography variant="body1" component="div" align="center">
          Get your Chatium account now. Sign in
        </Typography>
      </Box>
      <FormComponent
        initialValues={registrationInitialValue}
        onSubmit={signUp}
        formFields={registrationFormFields}
        buttonTitle="Sign Up"
        validationSchema={registerValidationSchema}
        labelCheckBox="I agree to the Terms of Services"
        isLoading={isLoading}
      />
      <Box pt={3} pb={1}>
        <Typography variant="body1" component="div" align="center">
          Already have an account ?&#32;
          <Link to={RoutesUrls.SIGN_IN}>Signin</Link>
        </Typography>
      </Box>
    </>
  );
};

export default SignUp;
