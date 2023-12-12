import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromChildren,
} from "react-router-dom";
import { lazy } from "react";
import LazyLoaderComponent from "./LazyLoaderProvider/LazyLoaderProvider";

const App = lazy(() => import("../App"));
const MainScreen = lazy(() => import("../screen/mainscreen/MainScreen"));
const LoginScreen = lazy(() => import("../screen/loginscreen/LoginScreen"));
const SignUpScreen = lazy(() => import("../screen/signupscreen/SignUpScreen"));

/**
 * Router declaration for the demo app before login.
 */
const publicRouter = createBrowserRouter(
  createRoutesFromChildren(
    <Route
      path="/"
      element={
        <LazyLoaderComponent>
          <App />
        </LazyLoaderComponent>
      }
    >
      <Route
        path=""
        element={
          <LazyLoaderComponent>
            <MainScreen />
          </LazyLoaderComponent>
        }
      />
      <Route
        path="login"
        element={
          <LazyLoaderComponent>
            <LoginScreen />
          </LazyLoaderComponent>
        }
      />
      <Route
        path="signup"
        element={
          <LazyLoaderComponent>
            <SignUpScreen />
          </LazyLoaderComponent>
        }
      />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Route>
  )
);

export default publicRouter;
