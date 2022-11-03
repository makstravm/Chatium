import { IErrorResponse } from "./error";

export interface ISignIn {
  user: IResponseSignIn | null;
  error: IErrorResponse | null;
}

export interface IRequestAuthValues {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export interface IResponseSignIn {
  kind: string;
  localId: string;
  email: string;
  displayName: string;
  idToken: string;
  registered: boolean;
  refreshToken: string;
  expiresIn: string;
}
