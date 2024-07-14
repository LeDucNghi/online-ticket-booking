"use client";

import "./header.scss";

import { headerLinks, images } from "@/constants";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
	const pathname = usePathname();
	const router = useRouter();

	const [isActive, setIsActive] = useState(false);

	const onScroll = () => {
		const { scrollY } = window;

		if (scrollY > 0) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, []);

	if (pathname?.startsWith("/sign")) return;
	else
		return (
			<div className={`${isActive ? "active" : ""} w-full header-container flex-center`}>
				<div className="header-wrapper flex-space-center">
					<Link href="/" className="header-logo">
						<Image src={images.logo} alt="logo" className="logo" />
					</Link>

					<ul className="menu flex-center py-3 px-1">
						{headerLinks.map((link, key) => {
							return (
								<li className="menu-item" key={key}>
									<Link className={pathname === link.link ? "active" : ""} href={link.link}>
										{link.name}
									</Link>
								</li>
							);
						})}

						<li className="menu-item">
							<Button variant="contained" onClick={() => router.push("/signin")}>
								{/* {session ? "sign out" : "sign in"} */}
								sign in
							</Button>
						</li>
					</ul>
				</div>
			</div>
		);
}
