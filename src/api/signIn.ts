import { POST } from "services/HTTPService";
import { IRequestAuthValues, IResponseSignIn } from "types";

export const signInApi = async (
  value: Omit<IRequestAuthValues, "returnSecureToken">
) =>
  await POST<IResponseSignIn, IRequestAuthValues>(
    `${process.env.FIREBASE_AUTH_API_PATH}signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    { ...value, returnSecureToken: true }
  );
