import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AuthState } from "../../models";
import { RootState } from "../../app/store";

const initialState: AuthState = {
  isAuthenticated: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,

  reducers: {
    authenticatedUser(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { authenticatedUser } = auth.actions;

export const selectAuthUser = (state: RootState) => state.auth.isAuthenticated;

export const authReducer = auth.reducer;
