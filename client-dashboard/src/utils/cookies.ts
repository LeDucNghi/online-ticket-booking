import Cookies from "js-cookie";
import { JwtPayload } from "../models";
import { jwtDecode } from "jwt-decode";

export const cookies = {
  setCookie(name: string, value: any, options?: Cookies.CookieAttributes) {
    Cookies.set(name, JSON.stringify(value), options);
  },

  getCookie(name: string) {
    const token = Cookies.get(name)!;

    if (token) {
      const user = jwtDecode<JwtPayload>(token);

      return user;
    }

    return undefined;
  },

  removeCookie(name: string) {
    Cookies.remove(name);
  },
};
