import bookImage from "../images/booksLogo.png";
import { User } from "../Interfaces";

interface IProps {
  currentUser: User;
}

function Navbar({ currentUser }: IProps) {
  console.log("navbar props", currentUser);
  return (
    <div className="navbar">
      <img className="logo" src={bookImage} alt="books logo" />
      <div className="nav-container">
        <h1>KindleFlix</h1>
      </div>
      <div>
        {currentUser.imageUrl ? (
          <img
            src={currentUser.imageUrl}
            alt="profile pic"
            style={{ height: "100px" }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
