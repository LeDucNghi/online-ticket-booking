"use client";

import "./form.scss";

import * as yup from "yup";

import { SubmitHandler, useForm } from "react-hook-form";

import { CustomCheckbox } from "@/components/common/checkbox/checkbox";
import { InputField } from "@/components/common/input-field/input-field";
import Link from "next/link";
import { LoadingButton } from "@mui/lab";
import { SignInPayload } from "@/models";
import { signIn } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";

export interface ISignInFormProps {}

export function SignInForm(props: ISignInFormProps) {
	const schema = yup.object().shape({
		email: yup
			.string()
			.required("Please enter email")
			.min(4, "Email is required to have at least 4 characters"),

		password: yup
			.string()
			.required("Please enter password")
			.min(6, "Password is required to have at least 6 characters"),
	});

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
	} = useForm<SignInPayload>({
		defaultValues: {
			email: "",
			password: "",
		},

		resolver: yupResolver(schema),
	});

	const onSubmit: SubmitHandler<SignInPayload> = async (data) => {
		await signIn("credentials", {
			redirect: true,
			callbackUrl: "http://localhost:3000/",
			email: data.email,
			password: data.password,
		});
	};

	return (
		<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
			<InputField
				name="email"
				label="Enter Your Email"
				type="text"
				control={control}
				className="inputfield"
				style={{ marginTop: "1rem" }}
			/>

			<InputField
				name="password"
				label="Password"
				type="password"
				className="inputfield"
				control={control}
				style={{ marginTop: "1rem" }}
			/>

			<div className="form-checkgroup flex-space-center">
				<CustomCheckbox placement="end" label="remember password" color="#6d7bba" />
				&nbsp;
				<Link href="/forget">Forget Password</Link>
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
