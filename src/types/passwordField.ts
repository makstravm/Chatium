import { ChangeEvent } from "react";
import { FormikErrors, FormikTouched } from "formik";
import { FormikSignInValuesType, FormikSignUpValuesType } from "./formAuth";

type PasswordFieldErrorType =
  | FormikErrors<FormikSignInValuesType>
  | FormikErrors<FormikSignUpValuesType>;

type PasswordFieldTouchedType =
  | FormikTouched<FormikSignInValuesType>
  | FormikTouched<FormikSignUpValuesType>;

export interface IPasswordField {
  name: string;
  label: string;
  type: string;
  errors: PasswordFieldErrorType;
  touched: PasswordFieldTouchedType;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
