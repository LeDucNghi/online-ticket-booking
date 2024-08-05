import { SignInPayload, SignUpPayload, User } from "../models";

import { axiosClient } from "./api-client";

export const authService = {
  signin(params: SignInPayload): Promise<User> {
    return axiosClient.post("/auth/signin", params);
  },

  createUser(params: SignUpPayload): Promise<User> {
    return axiosClient.post("/auth/signup", params);
  },
};
