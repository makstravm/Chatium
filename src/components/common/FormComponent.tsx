import { FC } from "react";
import { Form, Formik, FormikProps } from "formik";

import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  TextField,
} from "@mui/material";

import PasswordField from "./PasswordField";
import { FieldsTypes } from "constants/fieldsTypes";

import handlerErrorMessage from "helpers/handlerErrorMessage";

import { FormikValuesType, IFormProps } from "./types";
import { FirebaseError } from "firebase/app";

const { TEXT } = FieldsTypes;

const FormComponent: FC<IFormProps> = ({
  initialValues,
  validationSchema,
  formFields,
  buttonTitle,
  onSubmit,
  labelCheckBox,
  isLoading,
  errorMessage,
  isError,
}) => (
  <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => onSubmit(values)}
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
                <Alert variant="outlined" severity="error">
                  {handlerErrorMessage(errorMessage as FirebaseError)}
                </Alert>
              </Grid>
            )}
            {formFields.map(({ id, name, type, label }) => (
              <Grid key={id} item xs={10}>
                {(type === TEXT && (
                  <TextField
                    name={name}
                    label={label}
                    type={type}
                    size="small"
                    fullWidth
                    error={!!(touched[name] && errors[name])}
                    helperText={touched[name] && errors[name]}
                    onChange={handleChange}
                  />
                )) || (
                  <PasswordField
                    name={name}
                    label={label}
                    type={type}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                  />
                )}
              </Grid>
            ))}
            <Grid item xs={10}>
              <FormControl error={!!(touched?.checkbox && errors?.checkbox)}>
                <FormControlLabel
                  control={<Checkbox name="checkbox" onChange={handleChange} />}
                  label={labelCheckBox}
                  componentsProps={{ typography: { fontSize: ".9em" } }}
                />
                {!!touched?.checkbox && (
                  <FormHelperText id="component-error-text">
                    {errors?.checkbox}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, pb: 2 }} textAlign="center">
            <Button
              variant="outlined"
              type="submit"
              sx={{ minWidth: "86px" }}
              disabled={isLoading || (!isValid && !dirty)}
            >
              {(!isLoading && buttonTitle) || (
                <CircularProgress color="inherit" size="1.5rem" />
              )}
            </Button>
          </Box>
        </Form>
      </Box>
    )}
  </Formik>
);

export default FormComponent;
