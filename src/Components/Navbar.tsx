import { User } from "../Interfaces";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { API_URL } from "../config";
import { useNavigate, Link } from "react-router-dom";
import defaultUser from "../images/default-user.png";
import { useEffect, useState } from "react";
interface IProps {
  currentUser: User;
}

function Navbar() {
  const navigate = useNavigate();
  const currentUser = { imageUrl: "", username: "" };
  const [urlLocation, setUrlLocation] = useState("");

  useEffect(() => {
    console.log(
      "here is your location",
      window.location.href.split("/").slice(-1)[0]
    );
    setUrlLocation(window.location.href.split("/").slice(-1)[0]);
  }, []);

  async function handleLogout() {
    let response = await axios.post(
      `${API_URL}/api/logout`,
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
            <img
              src={defaultUser}
              alt="profile pic"
              className="profile-image"
            />
          )}
        </div>
      </div>
      <div className="banner">
        <div>
          {urlLocation === "profile" ? null : (
            <Link to="/profile">
              <Button variant="outline-light">Profile Page</Button>
            </Link>
          )}
          <Link to="/add-book">
            <Button variant="outline-light" style={{ margin: "10px" }}>
              Add Book
            </Button>
          </Link>
          <Link to="/update-user">
            <Button variant="outline-light" style={{ margin: "10px" }}>
              Update Profile
            </Button>
          </Link>
        </div>
        <Button variant="danger" id="logout" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </>
  );
}

export default Navbar;
