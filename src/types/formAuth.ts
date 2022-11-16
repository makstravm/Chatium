import {
  IFormField,
  ILoginInitialValue,
  ILoginValidationSchema,
  IRegisterValidationSchema,
  IRegistrationInitialValue,
} from "types";
import { FormikProps } from "formik";

export type FormikValuesType =
  | FormikProps<FormikSignInValuesType>
  | FormikProps<FormikSignUpValuesType>;

export interface FormikSignInValuesType {
  email: string;
  password: string;
  isRememberUser: boolean;
}

export interface FormikSignUpValuesType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type InitialValuesFormType =
  | IRegistrationInitialValue
  | ILoginInitialValue;

export type ValidationSchemaTypes =
  | IRegisterValidationSchema
  | ILoginValidationSchema;

export interface IFormAuthProps {
  formik: FormikValuesType;
  formFields: IFormField[];
  labelCheckBox?: string;
  isLoading: boolean;
  buttonTitle: string;
  errorMessage: string | null;
}
