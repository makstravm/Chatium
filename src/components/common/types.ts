import { SchemaOf } from "yup";
import {
  IFormField,
  ILoginInitialValue,
  IRegistrationInitialValue,
} from "constants/forms/types";
import {
  ILoginValidationSchema,
  IRegisterValidationSchema,
} from "helpers/types";

export type FormikValuesType = Record<string, string>;

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
}
