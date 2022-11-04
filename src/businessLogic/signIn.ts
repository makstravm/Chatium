import { signInApi } from "api/signIn";
import { saveTokenInStorage } from "src/helpers/storeToken";
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

    saveTokenInStorage(values.rememberMe, data.refreshToken);

    return { user: data, error: null };
  } catch (error) {
    return { error: error as IErrorResponse, user: null };
  }
};
