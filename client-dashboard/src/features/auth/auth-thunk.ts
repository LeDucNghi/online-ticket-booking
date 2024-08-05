import { SignInPayload, SignUpPayload } from "../../models";
import { alert, cookies } from "../../utils";

import { AppThunk } from "../../app/store";
import { authService } from "../../services/auth-service";

export const signin =
  (params: SignInPayload): AppThunk =>
  async () => {
    try {
      const res = await authService.signin(params);

      console.log("🚀 ~ res:", res);

      if (res) {
        cookies.setCookie("user", res.access_token);

        alert({
          content: `Sign In successfully 🥳`,
          position: "top-center",
          type: "success",
        });
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
