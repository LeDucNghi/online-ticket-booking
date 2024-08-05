import { Navigate, createBrowserRouter } from "react-router-dom";

import Dashboard from "../features/dashboard/pages/dashboard";
import Report from "../features/dashboard/pages/report";
import SignIn from "../features/auth/pages/sign-in";

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
    ],
  },
]);
