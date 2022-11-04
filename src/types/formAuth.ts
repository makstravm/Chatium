import { SchemaOf } from "yup";
import {
  IFormField,
  ILoginInitialValue,
  ILoginValidationSchema,
  IRegisterValidationSchema,
  IRegistrationInitialValue,
} from "types";

export type FormikValuesType = FormikSignInValuesType | FormikSignUpValuesType;

export interface FormikSignInValuesType {
  email: string;
  password: string;
  rememberMe: boolean;
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

export interface IFormProps {
  initialValues: FormikValuesType;
  formFields: IFormField[];
  buttonTitle: string;
  onSubmit: (values: FormikValuesType) => void;
  validationSchema: SchemaOf<ValidationSchemaTypes>;
  labelCheckBox?: string;
  isLoading: boolean;
  errorMessage: string | null;
}
