export interface ILoginValidationSchema {
  email: string;
  password: string;
}
export interface IRegisterValidationSchema {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
