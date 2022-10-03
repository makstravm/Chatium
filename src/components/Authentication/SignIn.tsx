import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import FormComponent from "components/common/FormComponent";

import { loginInitialValue } from "constants/forms/loginInitialValue";
import { loginFormFields } from "constants/forms/loginFormsFields";
import { RoutesUrls } from "constants/routes";

import { useSignInMutation } from "store/slices/userSlice";

import { loginValidationSchema } from "helpers/loginValidationSchema";

const SignIn = () => {
  const [signIn, { isLoading, error, isError }] = useSignInMutation();

  return (
    <>
      <Box pt={1} pb={3}>
        <Typography variant="h5" component="h5" fontWeight={700} align="center">
          Sign in
        </Typography>
        <Typography variant="body1" component="div" align="center">
          Sign in to continue to Chatium.
        </Typography>
      </Box>
      <FormComponent
        initialValues={loginInitialValue}
        onSubmit={signIn}
        formFields={loginFormFields}
        buttonTitle="Sign In"
        validationSchema={loginValidationSchema}
        labelCheckBox={<span>Remember me</span>}
        isLoading={isLoading}
        errorMessage={error}
        isError={isError}
      />
      <Box pt={3} pb={1}>
        <Typography variant="body1" component="div" align="center">
          Don&apos;t have an account ?&#32;
          <Link to={RoutesUrls.SIGN_UP}>Signup now</Link>
        </Typography>
      </Box>
    </>
  );
};

export default SignIn;
