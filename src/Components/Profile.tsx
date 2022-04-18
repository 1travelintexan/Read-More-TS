import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../config";
import BookList from "../Components/BookList";
import { useNavigate, Link } from "react-router-dom";
import { User } from "../Interfaces";
import { Dispatch, SetStateAction, useEffect } from "react";

interface IProps {
  //here you can declare the return type (here is void)
  currentUser: User;
  setUser: Dispatch<SetStateAction<User>>;
}

function Profile({ currentUser, setUser }: IProps) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       let userResponse = await axios.get(`${API_URL}/profile`, {
  //         withCredentials: true,
  //       });
  //       console.log("profile response", userResponse.data);
  //       let username = userResponse.data.username;
  //       let _id = userResponse.data._id;
  //       let imageUrl = userResponse.data.image;

  //       setUser({ username, imageUrl, _id });
  //     } catch (err) {
  //       console.log("There was an error", err);
  //     }
  //   }
  //   getData();
  // }, []);

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
      <div>
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
