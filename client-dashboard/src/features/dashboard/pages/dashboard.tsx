import { DashboarLayout } from "../../../components/layouts/dashboard/dashboard-layout";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <DashboarLayout>
      <Outlet />
    </DashboarLayout>
  );
}
