import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import axios from "axios";

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: {
					type: "email",
				},

				password: {
					type: "password",
				},
			},

			async authorize(credentials) {
				if (credentials) {
					try {
						const res = await axios.post("http://localhost:3001/auth/signin", {
							email: credentials.email,
							password: credentials.password,
						});

						return res.data;
					} catch (error) {
						console.log("🚀 ~ authorize ~ error:", error);
					}
				} else {
					return null;
				}
			},
		}),
	],
	pages: {
		signIn: "/signin",
	},
};
