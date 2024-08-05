import axios, { AxiosError } from "axios";

import { cookies } from "../utils";

export const axiosClient = axios.create({
  baseURL: `http://localhost:3001/`,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const user = cookies.getCookie("user");

    if (user) {
      config.headers.Authorization = `Bearer ${user._doc.access_token}`;
    }

    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);
