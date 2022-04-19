import bookImage from "../images/booksLogo.png";
import { User } from "../Interfaces";

interface IProps {
  currentUser: User;
}

function Navbar({ currentUser }: IProps) {
  return (
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
  );
}

export default Navbar;
