import axios from "axios";
import { API_URL } from "../config";
import { IProps } from "../Interfaces";
import BookList from "../Components/BookList";
import { useNavigate } from "react-router-dom";
import { User } from "../Interfaces";
import UserImage from "./UserImage";
import { useEffect } from "react";

function Profile({ currentUser }: IProps) {
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      let userResponse = await axios.get(`${API_URL}/`);
      console.log("resp", userResponse);
    }
    getData();
  }, []);
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
  //console.log("current user", currentUser);
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
