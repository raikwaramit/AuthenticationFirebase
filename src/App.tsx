import "./App.css";
import { Outlet } from "react-router-dom";
import NavigationComponent from "./common/component/NavigationBar";

function App() {
  return (
    <div>
      <div>
        <NavigationComponent />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
