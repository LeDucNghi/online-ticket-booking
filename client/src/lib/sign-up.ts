import { User } from "@/models";
import { authService } from "@/api-client";

export const signup = async (email: string, password: string) => {
	try {
		const res: User = await authService.signup({ email, password });

		return res;
	} catch (error) {
		return error;
	}
};
