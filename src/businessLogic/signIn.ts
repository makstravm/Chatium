import { User } from "@firebase/auth-types";
import { signInApi } from "api/signIn";
import { FirebaseError } from "firebase/app";
import { FormikValuesType } from "types";
import { IResponseSignIn, ISignInValues } from "types/signIn";

export const signIn = async (
  values: FormikValuesType
): Promise<IResponseSignIn> => {
  try {
    const { data } = await signInApi<User, ISignInValues>({
      email: values.email as string,
      password: values.password as string,
      returnSecureToken: true,
    });

    return { user: data, error: null };
  } catch (error) {
    return { error: error as FirebaseError, user: null };
  }
};
