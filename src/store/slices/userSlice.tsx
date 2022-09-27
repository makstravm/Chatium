import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { UserInfo } from "@firebase/auth-types";

import { ISignInData } from "./types";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    signIn: builder.mutation<UserInfo | FirebaseError, ISignInData>({
      async queryFn({ email, password }) {
        const auth = getAuth();

        try {
          const response = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          return { data: response.user };
        } catch (err) {
          return { data: err as FirebaseError };
        }
      },
    }),
    signUp: builder.mutation<UserInfo | FirebaseError, ISignInData>({
      async queryFn(arg) {
        const auth = getAuth();

        try {
          const response = await createUserWithEmailAndPassword(
            auth,
            arg.email,
            arg.password
          );

          return { data: response?.user };
        } catch (err) {
          return { data: err as FirebaseError };
        }
      },
    }),
    logOut: builder.mutation({
      async queryFn(arg) {
        try {
          const response = await signOut(arg);

          return { data: response };
        } catch (err) {
          return { data: err };
        }
      },
    }),
  }),
});

export const { useSignInMutation, useLogOutMutation } = userApi;
