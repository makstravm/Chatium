import { NavigateFunction } from "react-router-dom";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { FirebaseError } from "firebase/app";
import { UserInfo } from "@firebase/auth-types";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signOut,
  updateProfile,
} from "firebase/auth";
import { RoutesUrls } from "constants/routes";
import { FormikValuesType } from "types";

const { HOME } = RoutesUrls;

interface MockType {
  values: FormikValuesType;
  navigate: NavigateFunction;
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signUp: builder.mutation<UserInfo | FirebaseError, MockType>({
      // this any is mocked. this method will been remove later
      async queryFn({ values: { name, email, password }, navigate }) {
        const auth = getAuth();

        try {
          const response = await createUserWithEmailAndPassword(
            auth,
            email as string,
            password as string
          );

          await updateProfile(response.user, {
            displayName: name as string,
          });

          await setPersistence(auth, browserSessionPersistence);
          navigate(HOME, { replace: true });

          return { data: response?.user };
        } catch (err) {
          return { error: err as FirebaseError };
        }
      },
    }),
    logOut: builder.mutation({
      async queryFn(arg) {
        try {
          const response = await signOut(arg);

          return { data: response };
        } catch (err) {
          return { error: err };
        }
      },
    }),
  }),
});

export const { useSignUpMutation, useLogOutMutation } = userApi;
