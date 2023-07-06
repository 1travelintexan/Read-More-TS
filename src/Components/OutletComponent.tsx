import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
function OutletComponent({ children }: any) {
  return (
    <div className="outlet-page">
      <Navbar />
      {children}
      <Outlet />
    </div>
  );
}

export default OutletComponent;
