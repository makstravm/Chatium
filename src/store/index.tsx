import { configureStore } from "@reduxjs/toolkit";
import { userRuesducer } from "store/slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userRuesducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
