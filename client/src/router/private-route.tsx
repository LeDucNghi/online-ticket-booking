import React from "react";
import { redirect } from "react-router-dom";
import { selectAuthUser } from "../features/auth/auth-slice";
import { useAppSelector } from "../app/store";

export interface IPrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: IPrivateRouteProps) {
  const isAuthenticated = useAppSelector(selectAuthUser);

  if (isAuthenticated) {
    return redirect("/");
  } else return <>{children}</>;
}
