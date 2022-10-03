import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import FormComponent from "components/common/FormComponent";
import { registrationFormFields } from "constants/forms/registrationFormsFields";
import { registrationInitialValue } from "constants/forms/registrationInitialValue";
import { RoutesUrls } from "constants/routes";
import { useSignUpMutation } from "store/slices/userSlice";
import { registerValidationSchema } from "lib/schema/registrationValidationSchema";

const SignUp = () => {
  const [signUp, { isLoading, error, isError }] = useSignUpMutation();

  return (
    <>
      <Box pt={1} pb={3}>
        <Typography variant="h5" component="h5" fontWeight={700} align="center">
          Sign up
        </Typography>
        <Typography variant="body1" component="div" align="center">
          Get your Chatium account now.
        </Typography>
      </Box>
      <FormComponent
        initialValues={registrationInitialValue}
        onSubmit={signUp}
        formFields={registrationFormFields}
        buttonTitle="Sign Up"
        validationSchema={registerValidationSchema}
        labelCheckBox={
          <span>
            I agree to the <Link to="#"> Terms of Services</Link>
          </span>
        }
        isLoading={isLoading}
        errorMessage={error}
        isError={isError}
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
