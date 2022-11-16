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

export interface IEmailAndPassword {
  email: string;
  password: string;
}

export interface FormikSignInValuesType extends IEmailAndPassword {
  isRememberUser: boolean;
}

export interface FormikSignUpValuesType extends IEmailAndPassword {
  name: string;
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
