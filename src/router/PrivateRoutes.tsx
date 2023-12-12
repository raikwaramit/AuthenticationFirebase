import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import App from "../App";
import DashboardScreen from "../screen/privatescreens/DashBoardScreen";
import LazyLoaderComponent from "./LazyLoaderProvider/LazyLoaderProvider";

/**
 * Router declaration for the demo app after login.
 */
const privateRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={
        <LazyLoaderComponent>
          <App />
        </LazyLoaderComponent>
      }
    >
      <Route path="" element={<Navigate to="dashboard" replace />} />
      <Route
        path="dashboard"
        element={
          <LazyLoaderComponent>
            <DashboardScreen />
          </LazyLoaderComponent>
        }
      />
      <Route path="*" element={<Navigate to="dashboard" replace />} />
    </Route>
  )
);

export default privateRouter;
