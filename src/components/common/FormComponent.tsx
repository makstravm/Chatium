import React, { FC } from "react";
import { Form, Formik, FormikProps } from "formik";

import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  TextField,
} from "@mui/material";

import PasswordField from "./PasswordField";
import { FieldsTypes } from "constants/fieldsTypes";

import { FormikValuesType, IFormProps } from "./types";

const { TEXT } = FieldsTypes;

const FormComponent: FC<IFormProps> = ({
  initialValues,
  validationSchema,
  formFields,
  buttonTitle,
  onSubmit,
  labelCheckBox,
  isLoading,
}) => (
  <Paper elevation={6} sx={{ borderRadius: "15px", paddingTop: "35px" }}>
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
        <Form>
          <Grid container justifyContent="center" spacing={2}>
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
              sx={{ height: "38px", p: 1, width: "86px" }}
              disabled={isLoading || (!isValid && !dirty)}
            >
              {(!isLoading && buttonTitle) || (
                <CircularProgress color="inherit" size="1.5rem" />
              )}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  </Paper>
);

export default FormComponent;
