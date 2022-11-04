import { AxiosResponse } from "axios";
import { POST } from "services/HTTPService";

export const signInApi = async <T, V>(value: V): Promise<AxiosResponse<T>> => {
  const result = await POST<T, V>(
    `${process.env.FIREBASE_AUTH_API}signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
    value
  );

  return result;
};
