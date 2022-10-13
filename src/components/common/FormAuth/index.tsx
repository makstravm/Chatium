import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Form, Formik, FormikProps } from "formik";
import { FirebaseError } from "firebase/app";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import PasswordField from "../PasswordField";
import ErrorMessage from "../ErrorMessage";
import { FieldsTypes } from "constants/fieldsTypes";
import { FormikValuesType, IFormProps } from "types";
import { useNavigate } from "react-router-dom";

const { TEXT } = FieldsTypes;

const FormAuth: FC<IFormProps> = ({
  initialValues,
  validationSchema,
  formFields,
  buttonTitle,
  onSubmit,
  labelCheckBox,
  isLoading,
  errorMessage,
  isError,
}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => onSubmit({ values, navigate })}
    >
      {({
        errors,
        touched,
        handleChange,
        isValid,
        dirty,
      }: FormikProps<FormikValuesType>) => (
        <Box
          sx={{
            pt: 4,
            borderRadius: "15px",
            boxShadow: `0 0 10px 0px ${!isError ? "#404040" : "#c51111"}`,
          }}
        >
          <Form>
            <Grid container justifyContent="center" spacing={2}>
              {isError && (
                <Grid item xs={10}>
                  <ErrorMessage errorMessage={errorMessage as FirebaseError} />
                </Grid>
              )}
              {formFields.map(({ id, name, type }) => (
                <Grid key={id} item xs={10}>
                  {type === TEXT ? (
                    <TextField
                      name={name}
                      label={t(`auth.formLabels.${name}`)}
                      type={type}
                      size="small"
                      fullWidth
                      error={!!(touched[name] && errors[name])}
                      helperText={
                        !!(touched[name] && errors[name]) &&
                        t(`auth.validError.${errors[name] as string}`)
                      }
                      onChange={handleChange}
                    />
                  ) : (
                    <PasswordField
                      name={name}
                      label={t(`auth.formLabels.${name}`)}
                      type={type}
                      errors={errors}
                      touched={touched}
                      handleChange={handleChange}
                    />
                  )}
                </Grid>
              ))}
              {labelCheckBox && (
                <Grid item xs={10}>
                  <FormControlLabel
                    control={
                      <Checkbox name="checkbox" onChange={handleChange} />
                    }
                    label={labelCheckBox}
                    componentsProps={{
                      typography: {
                        fontSize: ".9em",
                      },
                    }}
                  />
                </Grid>
              )}
            </Grid>
            <Box
              sx={{
                mt: 2,
                pb: 2,
              }}
              textAlign="center"
            >
              <Button
                variant="outlined"
                type="submit"
                color="secondary"
                sx={{
                  minWidth: "86px",
                }}
                disabled={isLoading || (!isValid && !dirty)}
              >
                {!isLoading ? (
                  buttonTitle
                ) : (
                  <CircularProgress color="inherit" size="1.5rem" />
                )}
              </Button>
            </Box>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default FormAuth;
