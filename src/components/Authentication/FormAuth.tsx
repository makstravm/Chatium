import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Form, getIn } from "formik";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import PasswordField from "./PasswordField";
import { ErrorMessage } from "./ErrorMessageAuth";
import { FieldsTypes } from "constants/fieldsTypes";
import { IFormAuthProps } from "types";

const { TEXT } = FieldsTypes;

export const FormAuth: FC<IFormAuthProps> = ({
  formik,
  isLoading,
  buttonTitle,
  formFields,
  errorMessage,
  labelCheckBox,
}) => {
  const { errors, touched, handleChange, isValid, dirty } = formik;

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        pt: 4,
        borderRadius: "15px",
        boxShadow: `0 0 10px 0px ${!errorMessage ? "#404040" : "#c51111"}`,
      }}
    >
      <Form>
        <Grid container justifyContent="center" spacing={2}>
          {errorMessage && (
            <Grid item xs={10}>
              <ErrorMessage errorMessage={errorMessage} />
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
                  error={!!(getIn(touched, name) && getIn(errors, name))}
                  helperText={
                    !!(getIn(touched, name) && getIn(errors, name)) &&
                    t(`auth.validError.${getIn(errors, name)}`)
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
                control={<Checkbox name="checkbox" onChange={handleChange} />}
                label={labelCheckBox}
                componentsProps={{
                  typography: {
                    fontSize: ".9rem",
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
  );
};
