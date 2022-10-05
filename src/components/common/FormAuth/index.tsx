import { FC } from "react";
import { Form, Formik, FormikProps } from "formik";
import { FirebaseError } from "firebase/app";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import PasswordField from "../PasswordField";
import { FieldsTypes } from "constants/fieldsTypes";
import handlerErrorMessage from "helpers/handlerErrorMessage";
import style from "./FormAuth.module.scss";
import { FormikValuesType, IFormProps } from "types";

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
                  <div className={style.errorMessage}>
                    {handlerErrorMessage(errorMessage as FirebaseError)}
                  </div>
                </Alert>
              </Grid>
            )}
            {formFields.map(({ id, name, type, label }) => (
              <Grid key={id} item xs={10}>
                {type === TEXT ? (
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
                ) : (
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
            {labelCheckBox && (
              <Grid item xs={10}>
                <FormControlLabel
                  control={<Checkbox name="checkbox" onChange={handleChange} />}
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
              sx={{
                minWidth: "86px",
              }}
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

export default FormAuth;
