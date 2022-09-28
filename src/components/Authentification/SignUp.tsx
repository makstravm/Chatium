import React from "react";

import FormComponent from "components/common/FormComponent";

import { FormikValuesType } from "components/common/types";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RoutesUrls } from "constants/routes";
import { registerValidationSchema } from "helpers/registrationValidationSchema";
import {
  registrationFormFields,
  registrationInitialValue,
} from "constants/forms/registrationFormsFields";

const SignUp = () => (
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
      onSubmit={(value: FormikValuesType) => value}
      formFields={registrationFormFields}
      buttonTitle="Sign Up"
      validationSchema={registerValidationSchema}
    />
    <Box pt={3} pb={1}>
      <Typography variant="body1" component="div" align="center">
        Already have an account ?<Link to={RoutesUrls.SIGN_IN}>Signin</Link>
      </Typography>
    </Box>
  </>
);

export default SignUp;
