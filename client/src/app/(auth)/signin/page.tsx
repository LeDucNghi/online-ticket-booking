import { GetServerSideProps, Metadata } from "next";

import AuthLayout from "@/components/Layouts/auth/auth-layout";
import { SignInForm } from "../components/signin-form";

export interface ISignInProps {}

export const metadata: Metadata = {
	title: "Bolero | Sign In",
	description: `Sign in to experience the best quality cinema at Bolero theaters nationwide. Information page summarizing showtimes and latest movie trailers at Bolero Cinemas Vietnam.`,
};

export default function SignIn(props: ISignInProps) {
	return (
		<AuthLayout page="signin" title="hello" subtitle="welcome back">
			<SignInForm />
		</AuthLayout>
	);
}
