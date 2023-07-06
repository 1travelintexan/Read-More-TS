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
  console.log("current user profile", currentUser);
  if (!currentUser) {
    return <Spinner animation="grow" variant="primary" />;
  }

  return (
    <div className="profile-container">
      <h1 className="profile-greetings">
        Welcome {currentUser ? currentUser.username : null}
      </h1>
      <div>
        <BookList />
      </div>
    </div>
  );
}

export default Profile;
