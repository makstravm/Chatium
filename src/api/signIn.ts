import { AxiosResponse } from "axios";
import { POST } from "services/HTTPService";

export const signInApi = async <T, V>(value: V): Promise<AxiosResponse<T>> => {
  const result = await POST<T, V>(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    value
  );

  return result;
};
