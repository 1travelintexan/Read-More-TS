import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../config";
import BookList from "../Components/BookList";
import { useNavigate, Link } from "react-router-dom";
import { User } from "../Interfaces";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  //here you can declare the return type (here is void)
  currentUser: User;
  setUser: Dispatch<SetStateAction<User>>;
}

function Profile({ currentUser, setUser }: IProps) {
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
      <div className="banner">
        <Link to="/profile-image">
          <Button variant="outline-secondary">Profile Image</Button>{" "}
        </Link>
        <button id="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="profile-container">
        {currentUser ? (
          <h1>Welcome {currentUser.username}!</h1>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
