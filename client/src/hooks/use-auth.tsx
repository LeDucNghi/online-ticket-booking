import { SignInPayload } from "@/models";
import { authApi } from "@/api-client";

export default function useAuth() {
	async function signin(signinPayload: SignInPayload) {
		const res = await authApi.signin(signinPayload);

		return res;
	}

	return {
		signin,
	};
}
