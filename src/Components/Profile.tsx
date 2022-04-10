import axios from "axios";
import { API_URL } from "../config";
import BookList from "../Components/BookList";
import { useNavigate } from "react-router-dom";
import { User } from "../Interfaces";
import UserImage from "./UserImage";
interface IProps {
  //here you can declare the return type (here is void)
  currentUser: User;
}

function Profile({ currentUser }: IProps) {
  const navigate = useNavigate();
  async function handleLogout() {
    let response = await axios.post(
      `${API_URL}/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    navigate("/");
    console.log("Logout response", response);
  }
  return (
    <div>
      <div>
        {currentUser.username ? (
          <h1>Welcome {currentUser.username}!</h1>
        ) : (
          <p>Loading</p>
        )}
        <button onClick={handleLogout}>Logout</button>
        <UserImage />
      </div>
    </div>
  );
}

export default Profile;
