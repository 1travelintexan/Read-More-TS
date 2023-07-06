import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { API_URL } from "../config";
import { User } from "../Interfaces";
import { Spinner } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

interface IProps {
  currentUser: User;
}
function UpdateUser({ currentUser }: IProps) {
  const [updatedUser, setUpdatedUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [showInput, setShowInput] = useState({
    usernameBtn: false,
    emailBtn: false,
  });

  const handleChange = (e: any) => {
    let value = e.target.value;
    setUpdatedUser({ ...updatedUser, [e.target.name]: value });
  };
  const handleUpdateUser = async (e: any) => {
    console.log("updated user", updatedUser);
    let updatedUserDB = axios.post(`${API_URL}/update`, updatedUser, {
      withCredentials: true,
    });
    console.log((await updatedUserDB).data, "update");
  };

  const handleShowForm = (e: any) => {
    let name = e.target.name;
    setShowInput({ ...showInput, [name]: true });
  };

  const handleCloseInput = (e: any) => {
    let name = e.target.name;
    setShowInput({ ...showInput, [name]: false });
  };
  if (!currentUser) {
    return <Spinner animation="grow" variant="primary" />;
  }
  return (
    <div className="landing-page">
      <h1> Update </h1>
      <form onSubmit={handleUpdateUser} className="form">
        <label className="login-label">User Name:</label>
        {showInput.usernameBtn ? (
          <div className="update-info-row">
            <input
              name="username"
              type="text"
              placeholder="New username"
              onChange={handleChange}
              value={updatedUser.username}
            />
            <CloseButton
              style={{ backgroundColor: "red" }}
              name="usernameBtn"
              onClick={handleCloseInput}
            />
          </div>
        ) : (
          <div className="update-info-row">
            <h4 className="update-info">{currentUser.username}</h4>
            <button
              id="show-update-input"
              onClick={handleShowForm}
              name="usernameBtn"
            >
              Update
            </button>
          </div>
        )}
        <label className="login-label">Email:</label>
        {showInput.emailBtn ? (
          <div className="update-info-row">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <CloseButton
              style={{ backgroundColor: "red" }}
              name="emailBtn"
              onClick={handleCloseInput}
            />
          </div>
        ) : (
          <div className="update-info-row">
            <h4 className="update-info">{currentUser.email}</h4>
            <button
              id="show-update-input"
              onClick={handleShowForm}
              name="emailBtn"
            >
              Update
            </button>
          </div>
        )}
        <label className="login-label">Password:</label>
        <div className="update-info-row">
          <input
            name="password"
            type="password"
            placeholder="New Password"
            onChange={handleChange}
          />
        </div>
        <button className="signup-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateUser;
