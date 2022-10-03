import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { UserInfo } from "@firebase/auth-types";

import { FormikValuesType } from "components/common/types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signIn: builder.mutation<UserInfo | FirebaseError, FormikValuesType>({
      async queryFn({ email, password }) {
        const auth = getAuth();

        try {
          const response = await signInWithEmailAndPassword(
            auth,
            email as string,
            password as string
          );

          return { data: response.user };
        } catch (err) {
          return { error: err as FirebaseError };
        }
      },
    }),
    signUp: builder.mutation<UserInfo | FirebaseError, FormikValuesType>({
      async queryFn({ name, email, password }) {
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

export const { useSignInMutation, useSignUpMutation, useLogOutMutation } =
  userApi;
