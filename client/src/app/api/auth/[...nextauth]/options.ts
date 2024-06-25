import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

export const options: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "username:",
					type: "text",
					placeholder: "your cool username",
				},

				password: {
					label: "your password:",
					type: "password",
					placeholder: "your cool password",
				},
			},

			async authorize(credentials) {
				const user = { id: "1", name: "Nghi", password: "nextauth" };

				if (credentials?.username === user.name && credentials?.password === user.password) {
					return user;
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
