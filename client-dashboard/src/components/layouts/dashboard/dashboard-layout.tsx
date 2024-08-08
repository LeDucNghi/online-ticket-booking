import "./dashboard-layout.scss";

import { Navigate } from "react-router-dom";
import React from "react";
import { SideBar } from "../../../features/dashboard/components/side-bar/side-bar";
import { cookies } from "../../../utils";
import { selectSignInStatus } from "../../../features/auth/auth-slice";
import { useAppSelector } from "../../../app/store";
import { useTitle } from "../../../hooks";

export interface IDashboarLayoutProps {
  children: React.ReactNode;
}

export function DashboarLayout({ children }: IDashboarLayoutProps) {
  useTitle({ title: "Bolero Dashboard" });

  const authenticatedUser = cookies.getCookie("user");
  const isSignedIn = useAppSelector(selectSignInStatus);

  if (!isSignedIn || !authenticatedUser) return <Navigate to="/" />;

  return (
    <div className="dashboard-layout">
      <SideBar />

      {children}
    </div>
  );
}
