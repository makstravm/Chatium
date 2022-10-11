import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import FormAuth from "components/common/FormAuth";
import { registrationFormFields } from "constants/forms/registrationFormsFields";
import { registrationInitialValue } from "constants/forms/registrationInitialValue";
import { RoutesUrls } from "constants/routes";
import { useSignUpMutation } from "store/slices/userSlice";
import { registerValidationSchema } from "lib/schema/registrationValidationSchema";

const SignUp = () => {
  const [signUp, { isLoading, error, isError }] = useSignUpMutation();

  const { t } = useTranslation();

  return (
    <>
      <Box pt={1} pb={3}>
        <Typography variant="h5" component="h5" fontWeight={700} align="center">
          {t("auth.signUp.title")}
        </Typography>
        <Typography variant="body1" component="div" align="center">
          {t("auth.signUp.subtitle")}
        </Typography>
      </Box>
      <FormAuth
        initialValues={registrationInitialValue}
        onSubmit={signUp}
        formFields={registrationFormFields}
        buttonTitle={t("auth.signUp.buttonTitle")}
        validationSchema={registerValidationSchema}
        isLoading={isLoading}
        errorMessage={error}
        isError={isError}
      />
      <Grid container spacing={1} justifyContent={"center"} pt={3} pb={1}>
        <Grid item>
          <Typography variant="body1" component="div" align="center">
            {t("auth.signUp.footerText")}
          </Typography>
        </Grid>
        <Grid item>
          <Link to={RoutesUrls.SIGN_IN}>{t("auth.signUp.footerLink")}</Link>
        </Grid>
      </Grid>
      <Box pt={3} pb={1}></Box>
    </>
  );
};

export default SignUp;
