export interface IFormField {
  id: string;
  name: string;
  type: string;
  label: string;
}

export interface ILoginInitialValue {
  email: string;
  password: string;
}

export interface IRegistrationInitialValue {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
