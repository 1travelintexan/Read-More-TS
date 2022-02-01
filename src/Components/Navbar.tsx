import React from "react";
import bookImage from "../images/booksLogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={bookImage} alt="books logo" />
      <div className="nav-container">
        <h1>KindleFlix</h1>
      </div>
    </div>
  );
}

export default Navbar;
