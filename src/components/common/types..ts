import { SchemaOf } from "yup";
import {
  IFormField,
  ILoginInitialValue,
  IRegistrationInitialValue,
} from "src/constants/forms/types";
import {
  ILoginValidationSchema,
  IRegisterValidationSchema,
} from "src/helpers/types";

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
