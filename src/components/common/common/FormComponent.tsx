import React, { FC } from "react";
import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import { Form, Formik, FormikProps } from "formik";
import { FormikValuesType, IFormProps } from "./types.";

const FormComponent: FC<IFormProps> = ({
  initialValues,
  validationSchema,
  formFields,
  buttonTitle,
  onSubmit,
}) => (
  <Paper elevation={6} sx={{ borderRadius: "15px" }}>
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
                <TextField
                  name={name}
                  label={label}
                  type={type}
                  size="small"
                  autoComplete="given-name"
                  fullWidth
                  error={!!(touched[name] && errors[name])}
                  helperText={touched[name] && errors[name]}
                  onChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 3, mb: 2 }} textAlign="center">
            <Button
              variant="contained"
              type="submit"
              disabled={!isValid && !dirty}
            >
              {buttonTitle}
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  </Paper>
);

export default FormComponent;
