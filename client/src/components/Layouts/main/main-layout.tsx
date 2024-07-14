import "./main-layout.scss";

import * as React from "react";

import { Banner } from "@/components/common/banner/banner";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export interface IMainLayoutProps {
	children: React.ReactNode;

	bannerBg: string;

	banner: "main" | "plan";

	bannerChildren?: React.ReactNode;

	bannerTitle: string;
	bannerSubtitle?: string;
}

export async function MainLayout({
	children,
	bannerBg,
	banner,
	bannerChildren,
	bannerSubtitle,
	bannerTitle,
}: IMainLayoutProps) {
	const session = await getServerSession(options);

	return (
		<>
			<Banner
				bannerSubtitle={bannerSubtitle}
				bannerTitle={bannerTitle}
				type={banner}
				bannerBg={bannerBg}
			>
				{bannerChildren}
			</Banner>

			<div className="relative top-full pt-[6.25rem]" style={{ backgroundColor: "#001232" }}>
				{children}
			</div>
		</>
	);
}
