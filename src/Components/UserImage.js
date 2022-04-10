import axios from "axios";
import { API_URL } from "../config";

function UserImage() {
  async function handleUserImage(e) {
    e.preventDefault();
    let image = e.target.imageUrl.files[0];
    let imageFormData = new FormData();
    imageFormData.append("userImage", image);
    console.log("here is the image before", imageFormData, image);
    let imageResponse = await axios.post(`${API_URL}/upload`, imageFormData, {
      withCredentials: true,
    });
    console.log("response from db", imageResponse);
  }
  return (
    <div>
      <form
        method="POST"
        onSubmit={handleUserImage}
        encType="multipart/form-data"
      >
        <input type="file" name="imageUrl" accept="image/png, image/jpg" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserImage;
