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
