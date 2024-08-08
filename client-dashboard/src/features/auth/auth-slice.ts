import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { AuthState } from "../../models";
import { RootState } from "../../app/store";

const initialState: AuthState = {
  isAuthenticated: false,
  isSignedIn: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,

  reducers: {
    authenticatedUser(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },

    onSignIn(state, action: PayloadAction<boolean>) {
      state.isSignedIn = action.payload;
    },
  },
});

export const { authenticatedUser, onSignIn } = auth.actions;

export const selectAuthUser = (state: RootState) => state.auth.isAuthenticated;
export const selectSignInStatus = (state: RootState) => state.auth.isSignedIn;

export const authReducer = auth.reducer;
