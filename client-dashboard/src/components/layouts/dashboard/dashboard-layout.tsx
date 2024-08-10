import "./dashboard-layout.scss";

import { DashboardSide } from "../../../features/dashboard/components/dashboard-side/dashboard-side";
import React from "react";
import { SideBar } from "../../../features/dashboard/components/side-bar/side-bar";
import { useTitle } from "../../../hooks";

export interface IDashboarLayoutProps {
  children: React.ReactNode;
}

export function DashboarLayout({ children }: IDashboarLayoutProps) {
  useTitle({ title: "Bolero Dashboard" });

  return (
    <div className="dashboard-layout">
      <SideBar />

      <DashboardSide>{children}</DashboardSide>
    </div>
  );
}
