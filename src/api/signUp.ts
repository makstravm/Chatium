import { POST, PUT } from "services/HTTPService";
import { IRequestAuthValues, IResponseSignUp } from "types";

export const signUpApi = (value: V) =>
  POST<IResponseSignUp, Omit<IRequestAuthValues, "returnSecureToken">>(
    `${process.env.FIREBASE_AUTH_API_PATH}signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    { ...value, returnSecureToken: true }
  );

export const updateUserAuthDBApi = (value) =>
  POST(
    `${process.env.FIREBASE_AUTH_API_PATH}update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    { ...value, returnSecureToken: true }
  );
  
export const  getUser =()
export const saveUserToRTBaseApi = (value) =>
  PUT<IResponseSignIn, IRequestAuthValues>(
    `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}-default-rtdb.europe-west1.firebasedatabase.app/users.json`,
    value
  );
  
// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]