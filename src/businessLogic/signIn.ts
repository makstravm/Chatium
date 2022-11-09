import { signInApi } from "api/signIn";
import { AxiosError } from "axios";
import { ErrorMessage } from "constants/errorMessage";
import { handleError } from "helpers/handleError";
import { saveTokenInStorage } from "helpers/storeToken";
import { IError, ISignIn, FormikSignInValuesType } from "types";

export const signIn = async ({
  email,
  password,
  isRememberUser,
}: FormikSignInValuesType): Promise<ISignIn> => {
  try {
    const { data } = await signInApi({
      email,
      password,
    });

    saveTokenInStorage(isRememberUser, data.refreshToken);

    return { user: data, error: null };
  } catch (err) {
    if (err instanceof AxiosError<{ error: IError }>) {
      const error = handleError(err);

      return { error, user: null };
    }

    return { error: { message: ErrorMessage.DEFAULT }, user: null };
  }
};
