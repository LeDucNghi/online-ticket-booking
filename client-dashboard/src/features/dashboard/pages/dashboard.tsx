import { Navigate, Outlet } from "react-router-dom";

import { DashboarLayout } from "../../../components/layouts/dashboard/dashboard-layout";
import { cookies } from "../../../utils";

export default function Dashboard() {
  const authenticatedUser = cookies.getCookie("user");

  if (!authenticatedUser) return <Navigate to="/" />;

  return (
    <DashboarLayout>
      <Outlet />
    </DashboarLayout>
  );
}
