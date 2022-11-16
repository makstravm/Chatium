import { AxiosError } from "axios";
import { ErrorMessage } from "constants/errorMessage";
import { signUpApi, updateProfileApi, saveUserToRTBaseApi } from "api";
import { handleError } from "helpers/handleError";
import { setTokenInStorage } from "helpers/storeToken";
import { FormikSignUpValuesType, IError, ISignUp } from "types";

export const signUp = async ({
  name,
  email,
  password,
}: Omit<FormikSignUpValuesType, "confirmPassword">): Promise<ISignUp> => {
  try {
    const { data } = await signUpApi({
      email,
      password,
    });

    await updateProfileApi({
      idToken: data.idToken,
      displayName: name,
    });

    await saveUserToRTBaseApi(
      {
        name,
        email,
      },
      data.localId
    );

    setTokenInStorage(data.refreshToken);

    return { user: data, error: null };
  } catch (err) {
    if (err instanceof AxiosError<{ error: IError }>) {
      const error = handleError(err);

      return { error, user: null };
    }

    return { error: { message: ErrorMessage.DEFAULT }, user: null };
  }
};
