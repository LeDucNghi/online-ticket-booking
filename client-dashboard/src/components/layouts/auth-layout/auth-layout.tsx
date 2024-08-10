import "./auth-layout.scss";

import * as React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { Navigate } from "react-router-dom";
import { cookies } from "../../../utils";
import { selectSignInStatus } from "../../../features/auth/auth-slice";
import { useAppSelector } from "../../../app/store";
import { useTitle } from "../../../hooks";

export interface IAuthLayoutProps {
  children: React.ReactNode;

  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: IAuthLayoutProps) {
  useTitle({ title: "Bolero Dashboard | Sign In" });

  const isSignedIn = useAppSelector(selectSignInStatus);
  const authenticatedUser = cookies.getCookie("user");

  if (isSignedIn || authenticatedUser) return <Navigate to="/dashboard" />;

  return (
    <div className="auth-layout">
      <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>

          <Text size="sm"> {subtitle} </Text>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {children}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
