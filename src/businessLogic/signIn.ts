import { signInApi } from "api/signIn";
import { saveTokenInStorage } from "src/helpers/storeToken";
import { IErrorResponse, ISignIn, FormikSignInValuesType } from "types";

export const signIn = async ({
  email,
  password,
  rememberMe,
}: FormikSignInValuesType): Promise<ISignIn> => {
  try {
    const { data } = await signInApi({
      email,
      password,
      returnSecureToken: true,
    });

    saveTokenInStorage(rememberMe, data.refreshToken);

    return { user: data, error: null };
  } catch (error) {
    return { error: error as IErrorResponse, user: null };
  }
};
