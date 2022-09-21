import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: null,
  nick: null,
  chats: null,
  token: null,
  avatar: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.nick = action.payload.nick;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.avatar = action.payload.avata;
      state.chats = action.payload.chats;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.nick = null;
      state.avatar = null;
      state.chats = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const userRuesducer = userSlice.reducer;
