import { IError } from "./error";
import { IEmailAndPassword } from "./formAuth";

export interface ISignIn {
  user: IResponseSignIn | null;
  error: IError | null;
}

export interface ISignUp {
  user: IResponseSignUp | null;
  error: IError | null;
}

export interface IRequestAuthValues extends IEmailAndPassword {
  returnSecureToken: boolean;
}

export interface IResponseSignIn extends IResponseSignUp {
  displayName: string;
}

export interface IResponseSignUp {
  idToken: string;
  localId: string;
  email: string;
  refreshToken: string;
}

export interface IDataUpdateProfile {
  idToken: string;
  displayName: string;
  photoUrl?: string;
}
