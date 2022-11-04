import { signInApi } from "api/signIn";
import {
  IResponseSignIn,
  IRequestAuthValues,
  IErrorResponse,
  ISignIn,
  FormikSignInValuesType,
} from "types";

export const signIn = async (
  values: FormikSignInValuesType
): Promise<ISignIn> => {
  try {
    const { data } = await signInApi<IResponseSignIn, IRequestAuthValues>({
      email: values.email,
      password: values.password,
      returnSecureToken: true,
    });

    if (!values?.rememberMe) {
      sessionStorage.setItem("token", data.refreshToken);
    } else {
      localStorage.setItem("token", data.refreshToken);
    }

    return { user: data, error: null };
  } catch (error) {
    return { error: error as IErrorResponse, user: null };
  }
};
