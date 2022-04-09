import axios from "axios";
import { API_URL } from "../config";
import BookList from "../Components/BookList";
import { useNavigate } from "react-router-dom";

function Profile() {
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
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Profile;
