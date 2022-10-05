import { ChangeEvent } from "react";
import { FormikErrors, FormikTouched } from "formik";
import { FormikValuesType } from "../FormAuth/types";

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
