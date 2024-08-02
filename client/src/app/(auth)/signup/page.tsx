import * as React from "react";

import AuthLayout from "@/components/Layouts/auth/auth-layout";
import { Metadata } from "next";
import SignUpForm from "../components/signup-form";

export interface ISignupPageProps {}

export const metadata: Metadata = {
	title: "Bolero | Sign Up",
	description:
		"Experience the highest quality cinema at Bolero theaters nationwide. Information page summarizing showtimes and latest movie trailers at Bolero Cinemas Vietnam.",
};

export default function SignupPage(props: ISignupPageProps) {
	return (
		<AuthLayout page="signup" title="welcome" subtitle="to bolero">
			<SignUpForm />
		</AuthLayout>
	);
}
