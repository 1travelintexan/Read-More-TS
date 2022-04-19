import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { API_URL } from "../config";
import { User } from "../Interfaces";
import { useNavigate } from "react-router-dom";

interface IProps {
  setUser: Dispatch<SetStateAction<User>>;
}

function ProfileImage({ setUser }: IProps) {
  const navigate = useNavigate();

  function handleUserImage(event: any) {
    event.preventDefault();
    let image = event.target.imageUrl.files[0];
    let imageFormData = new FormData();
    imageFormData.append("imageUrl", image);

    async function sendImage() {
      try {
        let updatedUser = await axios.post(`${API_URL}/upload`, imageFormData, {
          withCredentials: true,
        });
        console.log("saved", updatedUser.data);
        let _id = updatedUser.data._id;
        let username = updatedUser.data.username;
        let imageUrl = updatedUser.data.imageUrl;

        await setUser({
          _id,
          username,
          imageUrl,
        });

        navigate("/profile");
      } catch (err) {
        console.log("There was an error updating your image", err);
      }
    }
    sendImage();
  }

  return (
    <div>
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

export default ProfileImage;
