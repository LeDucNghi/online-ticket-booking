import { AppThunk } from "../../app/store";
import { SignInPayload } from "../../models";
import { alert } from "../../utils";
import { authService } from "../../services/auth-service";

export const signin =
  (params: SignInPayload): AppThunk =>
  async () => {
    try {
      const res = await authService.signin(params);
      console.log("🚀 ~ signin ~ res:", res);
    } catch (error) {
      return alert({
        content: `${error}`,
        position: "top-center",
        type: "error",
      });
    }
  };
