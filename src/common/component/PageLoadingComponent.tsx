import { CircularProgress } from "@mui/material";
import * as React from "react";

export interface IPageLoadingComponentProps {}

export default function PageLoadingComponent(
  props: IPageLoadingComponentProps
) {
  return (
    <div className=" h-full w-full justify-center items-center flex ">
      <CircularProgress variant="indeterminate" />
    </div>
  );
}
