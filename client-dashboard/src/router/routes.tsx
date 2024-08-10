import { Navigate, createBrowserRouter } from "react-router-dom";

import Blog from "../features/dashboard/pages/blog";
import Content from "../features/dashboard/pages/content";
import Dashboard from "../features/dashboard/pages/dashboard";
import Event from "../features/dashboard/pages/event";
import Report from "../features/dashboard/pages/report";
import { Settings } from "../features/dashboard/pages/settings";
import SignIn from "../features/auth/pages/sign-in";
import Ticket from "../features/dashboard/pages/ticket";
import User from "../features/dashboard/pages/user";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },

  {
    path: "dashboard",
    element: <Dashboard />,

    children: [
      {
        path: "",
        element: <Navigate to="report" />,
      },

      {
        path: "report",
        element: <Report />,
      },

      {
        path: "content",
        element: <Content />,
      },

      {
        path: "tickets",
        element: <Ticket />,
      },

      {
        path: "blog",
        element: <Blog />,
      },

      {
        path: "event",
        element: <Event />,
      },

      {
        path: "users",
        element: <User />,
      },

      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);
