import { User } from "./auth";

export interface JwtPayload {
  $isNew: boolean;
  exp: number;
  iat: number;

  _doc: User;
}
