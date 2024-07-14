import { SignInPayload, User } from "@/models";

import axiosClient from "./axios-client";

export const authApi = {
	signin(signinPayload: SignInPayload): Promise<User> {
		return axiosClient.post(`/auth/signin`, signinPayload);
	},

	signup(signinPayload: SignInPayload): Promise<User> {
		return axiosClient.post(`/auth/signup`, signinPayload);
	},
};
