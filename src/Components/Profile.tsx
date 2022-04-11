import axios from "axios";
import { API_URL } from "../config";
import BookList from "../Components/BookList";
import { useNavigate } from "react-router-dom";
import { User } from "../Interfaces";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  //here you can declare the return type (here is void)
  currentUser: User;
  setUser: Dispatch<SetStateAction<User>>;
}

function Profile({ currentUser, setUser }: IProps) {
  const navigate = useNavigate();

  function handleUserImage(event: any) {
    event.preventDefault();
    let image = event.target.imageUrl.files[0];
    let imageFormData = new FormData();
    imageFormData.append("imageUrl", image);

    async function sendImage() {
      let updatedUser = await axios.post(`${API_URL}/upload`, imageFormData, {
        withCredentials: true,
      });
      console.log("saved", updatedUser.data);
      let _id = updatedUser.data._id;
      let username = updatedUser.data.username;
      let imageUrl = updatedUser.data.imageUrl;

      setUser({
        _id,
        username,
        imageUrl,
      });
    }
    sendImage();
  }

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
        {/* {currentUser.imageUrl ? (
          <img
            src={currentUser.imageUrl}
            alt="profile pic"
            style={{ height: "100px" }}
          /> */}
        {/* ) : null} */}
        {currentUser ? (
          <h1>Welcome {currentUser.username}!</h1>
        ) : (
          <p>Loading</p>
        )}
        <button onClick={handleLogout}>Logout</button>
      </div>

      <div>
        <h3>Update your User Image:</h3>
        <form
          onSubmit={handleUserImage}
          method="post"
          encType="multipart/form-data"
        >
          <input type="file" accept="image/png, image/jpg" name="imageUrl" />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default Profile;
