import { User } from "@firebase/auth-types";
import { FirebaseError } from "firebase/app";

export interface IResponseSignIn {
  user: User | null;
  error: FirebaseError | null;
}

export interface ISignInValues {
  email: string;
  password: string;
  returnSecureToken: boolean;
}
