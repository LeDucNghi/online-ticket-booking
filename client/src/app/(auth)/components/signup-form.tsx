"use client";

import "./form.scss";

import { SubmitHandler, useForm } from "react-hook-form";

import { CustomCheckbox } from "@/components/common/checkbox/checkbox";
import { InputField } from "@/components/common/input-field/input-field";
import { LoadingButton } from "@mui/lab";
import { signup } from "@/lib/sign-up";
import { useRouter } from "next/navigation";

export interface ISignUpFormProps {}

type Inputs = {
	email: string;
	password: string;
	confirmPassword: string;
};

export default function SignUpForm(props: ISignUpFormProps) {
	const router = useRouter();
	const {
		handleSubmit,
		control,
		formState: { errors, isSubmitting },
	} = useForm<Inputs>({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		await signup(data.email, data.password);

		await router.push(`/auth/signin`);
	};

	return (
		<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
			<InputField
				name="email"
				label="Enter Your Email"
				type="email"
				control={control}
				className="inputfield"
				style={{ marginTop: "1rem" }}
			/>

			<InputField
				name="password"
				label="Password"
				type="password"
				control={control}
				className="inputfield"
				style={{ marginTop: "1rem" }}
			/>

			<InputField
				name="confirmPassword"
				label="Confirm Your Password"
				type="password"
				control={control}
				className="inputfield"
				style={{ marginTop: "1rem" }}
			/>

			<div className="form-checkgroup flex-space-center">
				<CustomCheckbox
					placement="end"
					label="I Agree To The Terms, Privacy Policy And Fees"
					color="#6d7bba"
				/>
			</div>

			<div className="form-submit flex-center w-full">
				<LoadingButton
					className="form-button"
					type="submit"
					loading={isSubmitting}
					variant="contained"
				>
					Sign In
				</LoadingButton>
			</div>
		</form>
	);
}
