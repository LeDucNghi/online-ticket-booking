"use client";

import * as React from "react";

import { SessionProvider } from "next-auth/react";

export interface IAuthProviderProps {
	children: React.ReactNode;
}

export default function AuthProvider({ children }: IAuthProviderProps) {
	return <SessionProvider>{children}</SessionProvider>;
}
