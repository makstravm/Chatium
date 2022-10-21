import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { FirebaseError } from "firebase/app";
import { UserInfo } from "@firebase/auth-types";
import {
  browserLocalPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { RoutesUrls } from "constants/routes";
import { FormikSubmitType } from "types";

const { HOME } = RoutesUrls;

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signIn: builder.mutation<UserInfo | FirebaseError, FormikSubmitType>({
      async queryFn({
        values: { email, password, checkbox: rememberMe },
        navigate,
      }) {
        const auth = getAuth();

        try {
          const response = await signInWithEmailAndPassword(
            auth,
            email as string,
            password as string
          );

          await setPersistence(
            auth,
            rememberMe ? browserLocalPersistence : browserSessionPersistence
          );
          navigate(HOME);

          return { data: response.user };
        } catch (err) {
          return { error: err as FirebaseError };
        }
      },
    }),
    signUp: builder.mutation<UserInfo | FirebaseError, FormikSubmitType>({
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

export const { useSignInMutation, useSignUpMutation, useLogOutMutation } =
  userApi;
