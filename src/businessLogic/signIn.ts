import { signInApi } from "api/signIn";
import {
  IUserResponseSignIn,
  FormikValuesType,
  IResponseSignIn,
  ISignInValues,
  IErrorResponse,
} from "types";

export const signIn = async (
  values: FormikValuesType
): Promise<IResponseSignIn> => {
  try {
    const { data } = await signInApi<IUserResponseSignIn, ISignInValues>({
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
