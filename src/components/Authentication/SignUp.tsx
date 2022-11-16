import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik, FormikProps } from "formik";
import { Box, Grid, Typography } from "@mui/material";
import { FormAuth } from "components/Authentication/FormAuth";
import { registrationFormFields } from "constants/forms/registrationFormsFields";
import { registrationInitialValue } from "constants/forms/registrationInitialValue";
import { RoutesUrls } from "constants/routes";
import { signUp } from "businessLogic/signUp";
import { registerValidationSchema } from "lib/schema/registrationValidationSchema";
import { FormikSignUpValuesType } from "types";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleOnSubmit = async ({
    email,
    password,
    name,
  }: FormikSignUpValuesType) => {
    setIsLoading(true);
    const { user, error } = await signUp({
      email,
      password,
      name,
    });

    if (user) {
      navigate(RoutesUrls.HOME);
    }
    if (error?.message) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  };

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
      <Formik
        initialValues={registrationInitialValue}
        validationSchema={registerValidationSchema}
        onSubmit={handleOnSubmit}
      >
        {(formik: FormikProps<FormikSignUpValuesType>) => (
          <FormAuth
            errorMessage={errorMessage}
            formFields={registrationFormFields}
            buttonTitle={t("auth.signUp.buttonTitle")}
            isLoading={isLoading}
            formik={formik}
          />
        )}
      </Formik>
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
