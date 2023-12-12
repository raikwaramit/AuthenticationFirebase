import * as React from "react";
import DashboardComponent from "./DashboardComponent";

export interface IDashboardScreenProps {}

export default function DashboardScreen(props: IDashboardScreenProps) {
  return (
    <div>
      <DashboardComponent />
    </div>
  );
}
