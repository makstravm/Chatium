import { signInApi } from "api/signIn";
import {
  FormikValuesType,
  IResponseSignIn,
  IRequestAuthValues,
  IErrorResponse,
  ISignIn,
} from "types";

export const signIn = async (values: FormikValuesType): Promise<ISignIn> => {
  try {
    const { data } = await signInApi<IResponseSignIn, IRequestAuthValues>({
      email: values.email as string,
      password: values.password as string,
      returnSecureToken: true,
    });

    if (!values?.checkbox) {
      sessionStorage.setItem("token", data.refreshToken);
    } else {
      localStorage.setItem("token", data.refreshToken);
    }

    return { user: data, error: null };
  } catch (error) {
    return { error: error as IErrorResponse, user: null };
  }
};
