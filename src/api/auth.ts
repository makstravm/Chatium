import { POST } from "services/HTTPService";
import {
  IDataUpdateProfile,
  IEmailAndPassword,
  IRequestAuthValues,
  IResponseSignIn,
  IResponseSignUp,
} from "types";

export const signInApi = (value: IEmailAndPassword) =>
  POST<IResponseSignIn, IRequestAuthValues>(
    `${process.env.FIREBASE_AUTH_API_PATH}signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    { ...value, returnSecureToken: true }
  );

export const signUpApi = (value: IEmailAndPassword) =>
  POST<IResponseSignUp, IRequestAuthValues>(
    `${process.env.FIREBASE_AUTH_API_PATH}signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    { ...value, returnSecureToken: true }
  );

export const updateProfileApi = (value: IDataUpdateProfile) =>
  POST<unknown, IDataUpdateProfile>(
    `${process.env.FIREBASE_AUTH_API_PATH}update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    value
  );
