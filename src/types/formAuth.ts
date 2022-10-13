import { NavigateFunction } from "react-router-dom";
import { SchemaOf } from "yup";
import {
  IFormField,
  ILoginInitialValue,
  ILoginValidationSchema,
  IRegisterValidationSchema,
  IRegistrationInitialValue,
} from "types";

export interface FormikValuesType {
  [key: string]: string | boolean;
}

export interface FormikSubmitType {
  values: FormikValuesType;
  navigate: NavigateFunction;
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
  onSubmit: (values: FormikSubmitType) => void;
  validationSchema: SchemaOf<ValidationSchemaTypes>;
  labelCheckBox?: string;
  isLoading: boolean;
  errorMessage?: string | unknown;
  isError: boolean;
}
