import { SignInPayload, SignUpPayload } from "../../models";
import { alert, cookies } from "../../utils";

import { AppThunk } from "../../app/store";
import { authService } from "../../services/auth-service";
import { onSignIn } from "./auth-slice";

export const signin =
  (params: SignInPayload): AppThunk =>
  async (dispatch) => {
    try {
      const res = await authService.signin(params);

      if (res) {
        cookies.setCookie("user", res.access_token);

        alert({
          content: `Sign In successfully 🥳`,
          position: "top-center",
          type: "success",
        });

        dispatch(onSignIn(true));
      }
    } catch (error) {
      return alert({
        content: `${error}`,
        position: "top-center",
        type: "error",
      });
    }
  };

export const createUser =
  (params: SignUpPayload): AppThunk =>
  async () => {
    try {
      const res = await authService.createUser(params);
      console.log("🚀 ~ res:", res);
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  };
