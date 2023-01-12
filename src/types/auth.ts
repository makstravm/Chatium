import { IdUserType, IError } from "types";

export interface ISignIn {
  user: IResponseSignIn | null;
  error: IError | null;
}

export interface IEmailAndPassword {
  email: string;
  password: string;
}

export interface IRequestAuthValues extends IEmailAndPassword {
  returnSecureToken: boolean;
}

export interface IResponseSignIn {
  localId: IdUserType;
  email: string;
  displayName: string;
  idToken: string;
  refreshToken: string;
}
