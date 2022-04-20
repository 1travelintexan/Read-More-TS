import Button from "react-bootstrap/Button";
import BookList from "../Components/BookList";
import { useNavigate, Link } from "react-router-dom";
import { User } from "../Interfaces";
import { Dispatch, SetStateAction } from "react";
import { Spinner } from "react-bootstrap";

interface IProps {
  //here you can declare the return type (here is void)
  currentUser: User;
  setUser: Dispatch<SetStateAction<User>>;
}

function Profile({ currentUser, setUser }: IProps) {
  const navigate = useNavigate();
  if (!currentUser) {
    return <Spinner animation="grow" variant="primary" />;
  }
  return (
    <div>
      <div className="profile-container">
        {currentUser ? (
          <h1>Welcome {currentUser.username}!</h1>
        ) : (
          <p>Loading</p>
        )}
        <label style={{ color: "black" }}>Add a Book to your Profile:</label>
        <Link to="/add-book">
          <Button variant="outline-secondary">Add Book</Button>{" "}
        </Link>
        <label style={{ color: "black" }}>
          Update your Profile information:
        </label>
        <Link to="/update-user">
          <Button variant="outline-secondary">Update Profile</Button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default Profile;
