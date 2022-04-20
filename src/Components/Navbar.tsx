import bookImage from "../images/booksLogo.png";
import { User } from "../Interfaces";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate, Link } from "react-router-dom";
interface IProps {
  currentUser: User;
}

function Navbar({ currentUser }: IProps) {
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
    <>
      <div className="navbar">
        <img className="logo" src={bookImage} alt="books logo" />
        <div>
          <h1>Read a book and chill</h1>
        </div>
        <div>
          {currentUser.imageUrl ? (
            <img
              src={currentUser.imageUrl}
              alt="profile pic"
              className="profile-image"
            />
          ) : null}
        </div>
      </div>
      <div className="banner">
        <Link to="/profile-image">
          <Button variant="outline-secondary">Profile Image</Button>{" "}
        </Link>
        <Button variant="danger" id="logout" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
}

export default Navbar;
