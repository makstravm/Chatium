import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import FormAuth from "components/common/FormAuth";
import { loginInitialValue } from "constants/forms/loginInitialValue";
import { loginFormFields } from "constants/forms/loginFormsFields";
import { RoutesUrls } from "constants/routes";
import { useSignInMutation } from "store/slices/userSlice";
import { loginValidationSchema } from "lib/schema/loginValidationSchema";

const SignIn = () => {
  const [signIn, { isLoading, error, isError }] = useSignInMutation();

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
      <FormAuth
        initialValues={loginInitialValue}
        onSubmit={signIn}
        formFields={loginFormFields}
        buttonTitle={t("auth.signIn.buttonTitle")}
        validationSchema={loginValidationSchema}
        labelCheckBox={t("auth.signIn.checkBoxRemember")}
        isLoading={isLoading}
        errorMessage={error}
        isError={isError}
      />
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

export default SignIn;
