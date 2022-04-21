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
    <div className="profile-container">
      <div>
        <BookList />
      </div>
    </div>
  );
}

export default Profile;
