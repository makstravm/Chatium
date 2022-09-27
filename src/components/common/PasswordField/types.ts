import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";
import { FormikValuesType } from "../types.";

export interface IPasswordField {
  name: string;
  label: string;
  type: string;
  errors: FormikErrors<FormikValuesType>;
  touched: FormikTouched<FormikValuesType>;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}
