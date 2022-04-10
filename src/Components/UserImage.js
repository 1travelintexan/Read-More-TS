import axios from "axios";
import React from "react";
import { API_URL } from "../config";

function UserImage() {
  async function handleImage(event) {
    event.preventDefault();
    //how to grab the value of the image
    let image = event.target.userImage.files[0];
    let imageFormData = new FormData();
    imageFormData.append("userImage", image);
    let imageResponse = await axios.post(
      `${API_URL}/image-upload`,
      imageFormData,
      { withCredentials: true }
    );
    console.log("response from image route", imageResponse);
  }

  return (
    <div>
      <form onSubmit={handleImage} method="post" encType="multipart/form-data">
        <input type="file" name="userImage" />
        <button>Add Image</button>
      </form>
    </div>
  );
}

export default UserImage;
