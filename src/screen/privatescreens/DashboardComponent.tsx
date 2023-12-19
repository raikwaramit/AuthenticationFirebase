import { CircularProgress } from "@mui/material";
import { Suspense, lazy } from "react";

export interface ILazyLoadingProps {}

const LazyComponent = lazy(() => addDelay(import("./LazyComponent")));

export default function DashboardComponent(props: ILazyLoadingProps) {
  return (
    <div className="flex-col justify-center m-5 rounded-lg outline">
      <div className="text-3xl text-center my-5"> Dashboard screen</div>
      <div className="flex flex-wrap justify-center m-auto items-center">
        <div className="m-5" key={1}>
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5" key={1}>
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5" key={2}>
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5" key={3}>
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5" key={4}>
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5" key={5}>
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5" key={6}>
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5" key={7}>
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
        <div className="m-5" key={8}>
          <Suspense fallback={<CircularProgress variant="indeterminate" />}>
            <LazyComponent />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function addDelay(promise: any) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
}
