import { User } from "../Interfaces";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate, Link } from "react-router-dom";
import bookLogo from "../images/booksLogo.png";
interface IProps {
  currentUser: User;
}

function Navbar() {
  const navigate = useNavigate();
  const currentUser = { imageUrl: "", username: "" };

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
    <>
      <div className="navbar">
        <h4 id="logo">Kindleflix</h4>
        <div>
          {currentUser.imageUrl ? (
            <img
              src={currentUser.imageUrl}
              alt="profile pic"
              className="profile-image"
            />
          ) : (
            <img src={bookLogo} alt="profile pic" className="profile-image" />
          )}
        </div>
      </div>
      <div className="banner">
        <div>
          <Link to="/profile">
            <Button variant="outline-light">Profile Page</Button>
          </Link>
          <Link to="/add-book">
            <Button variant="outline-light">Add Book</Button>
          </Link>
          <Link to="/update-user">
            <Button variant="outline-light">Update Profile</Button>
          </Link>
        </div>

        <div>
          <Link to="/profile-image">
            <Button variant="outline-light">Profile Image</Button>
          </Link>
          <Button variant="danger" id="logout" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
