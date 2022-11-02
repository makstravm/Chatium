import { IErrorResponse } from "./error";
import { IUserResponseSignIn } from "./user";

export interface IResponseSignIn {
  user: IUserResponseSignIn | null;
  error: IErrorResponse | null;
}

export interface ISignInValues {
  email: string;
  password: string;
  returnSecureToken: boolean;
}
