import { Header } from "components/Header/Header";
import {Outlet} from "react-router-dom";

export function App() {

  return (
    <div>
      <Header />
      <div style={{ padding: 50 }}>
          <Outlet />
      </div>
    </div>
  );
}
