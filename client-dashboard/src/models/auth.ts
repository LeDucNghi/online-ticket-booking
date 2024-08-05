import { Ticket } from "./ticket";

export interface AuthState {
  isAuthenticated: boolean;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  password: string;
  username: string;
}

export interface User {
  email: string;
  password?: string;
  avatar: string;
  gender: "male" | "female";
  birthday?: Date;
  created_at?: Date;
  updated_at?: Date;
  preferred_payment_method: string;
  ticket: Ticket[];
  access_token?: string;
}
