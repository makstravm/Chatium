import { IError } from "./error";

export interface ISignIn {
  user: IResponseSignIn | null;
  error: IError | null;
}

export interface IRequestAuthValues {
  email: string;
  password: string;
}

export interface IResponseSignIn {
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  refreshToken: string;
}
