"use client";

import "./auth-layout.scss";

import * as React from "react";

import { Divider, Icon, IconButton, Paper, Tooltip } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { authSocial } from "@/constants";
import { useRouter } from "next/navigation";

export interface IAuthLayoutProps {
	children: React.ReactNode;

	title: string;
	subtitle: string;

	page: "signin" | "signup";
}

// export async function generateMetadata({ page }: IAuthLayoutProps) {
// 	return {
// 		title: `Bolero | Sign ${page === "signin" ? "In" : "Up"}`,
// 		description: `${
// 			page === "signin"
// 				? `Sign in to experience the best quality cinema at Bolero theaters nationwide. Information page summarizing showtimes and latest movie trailers at Bolero Cinemas Vietnam.`
// 				: "Experience the highest quality cinema at Bolero theaters nationwide. Information page summarizing showtimes and latest movie trailers at Bolero Cinemas Vietnam."
// 		}`,
// 	};
// }

export default function AuthLayout({
	children,
	title,
	subtitle,
	page,
}: IAuthLayoutProps) {
	const router = useRouter();

	return (
		<div className="auth-container flex-center">
			<Tooltip title="Back" arrow>
				<IconButton
					aria-label="delete"
					size="small"
					className="auth-link"
					onClick={() => router.back()}
				>
					<ArrowBackIcon fontSize="inherit" />
				</IconButton>
			</Tooltip>

			<Paper elevation={10} className="auth-card">
				<div className="auth-card-header">
					<span> {title} </span>
					<h2> {subtitle} </h2>
				</div>

				<div className="auth-card-form">{children}</div>

				<div className="auth-card-option flex-center w-full">
					{page === "signin"
						? "Don't have an account?"
						: "Already have an account?"}
					&nbsp;
					<Link href={page === "signin" ? "/signup" : "/signin"}>
						{page === "signin" ? "Sign up now" : "Sign in"}
					</Link>
				</div>

				<Divider className="auth-card-divider"> OR </Divider>

				<ul className="auth-card-social w-full flex-center">
					{authSocial.map((icon, key) => {
						return (
							<li key={key}>
								<IconButton aria-label="delete" className="social-icon">
									<Image src={icon.icon} alt="icon" />
								</IconButton>
							</li>
						);
					})}
				</ul>
			</Paper>
		</div>
	);
}
