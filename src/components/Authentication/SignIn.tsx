import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik, FormikProps } from "formik";
import { Box, Grid, Typography } from "@mui/material";
import { FormAuth } from "components/common/FormAuth";
import { loginInitialValue } from "constants/forms/loginInitialValue";
import { loginFormFields } from "constants/forms/loginFormsFields";
import { RoutesUrls } from "constants/routes";
import { signIn } from "businessLogic/signIn";
import { loginValidationSchema } from "lib/schema/loginValidationSchema";
import { FormikSignInValuesType } from "types";

export const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleOnSubmit = async ({
    email,
    password,
    isRememberUser,
  }: FormikSignInValuesType) => {
    setIsLoading(true);
    const { user, error } = await signIn({
      email,
      password,
      isRememberUser,
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
          {t("auth.signIn.title")}
        </Typography>
        <Typography variant="body1" component="div" align="center">
          {t("auth.signIn.subtitle")}
        </Typography>
      </Box>
      <Formik
        initialValues={loginInitialValue}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => await handleOnSubmit(values)}
      >
        {(formik: FormikProps<FormikSignInValuesType>) => (
          <FormAuth
            errorMessage={errorMessage}
            formFields={loginFormFields}
            buttonTitle={t("auth.signIn.buttonTitle")}
            labelCheckBox={t("auth.signIn.checkBoxRemember")}
            isLoading={isLoading}
            formik={formik}
          />
        )}
      </Formik>
      <Grid container spacing={1} justifyContent={"center"} pt={3} pb={1}>
        <Grid item>
          <Typography variant="body1" component="div" align="center">
            {t("auth.signIn.footerText")}
          </Typography>
        </Grid>
        <Grid item>
          <Link to={RoutesUrls.SIGN_UP}>{t("auth.signIn.footerLink")}</Link>
        </Grid>
      </Grid>
    </>
  );
};
