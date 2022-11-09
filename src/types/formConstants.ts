export interface IFormField {
  id: string;
  name: string;
  type: string;
}

export interface ILoginInitialValue {
  email: string;
  password: string;
  isRememberUser: boolean;
}

export interface IRegistrationInitialValue {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
