import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { signOut } from "firebase/auth";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
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

export const { useLogOutMutation } = userApi;
