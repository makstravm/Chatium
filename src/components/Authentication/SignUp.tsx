import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik, FormikProps } from "formik";
import { Box, Grid, Typography } from "@mui/material";
import { FormAuth } from "components/common/FormAuth";
import { registrationFormFields } from "constants/forms/registrationFormsFields";
import { registrationInitialValue } from "constants/forms/registrationInitialValue";
import { RoutesUrls } from "constants/routes";
import { useSignUpMutation } from "store/slices/userSlice";
import { registerValidationSchema } from "lib/schema/registrationValidationSchema";
import { FormikSignUpValuesType } from "types";

const SignUp = () => {
  const [signUp, { isLoading }] = useSignUpMutation();

  const { t } = useTranslation();

  // function is  mocked
  const navigate = useNavigate();

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
        onSubmit={async (values) => await signUp({ values, navigate })} // this is mocked value in this branch
      >
        {(formik: FormikProps<FormikSignUpValuesType>) => (
          <FormAuth
            // this is mocked value in this branch
            errorMessage={"error"}
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
