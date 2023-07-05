import Navbar from "./Navbar";
import { User } from "../Interfaces";
interface IProps {
  currentUser: User;
}
function OutletComponent({ children }: any) {
  return (
    <div className="outlet-page">
      <Navbar />
      {children}
    </div>
  );
}

export default OutletComponent;
