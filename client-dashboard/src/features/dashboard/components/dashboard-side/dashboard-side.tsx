import "./dashboard-side.scss";

import * as React from "react";

export interface IDashboardSideProps {
  children: React.ReactNode;
}

export function DashboardSide({ children }: IDashboardSideProps) {
  return <div className="dashboard-side-container">{children}</div>;
}
