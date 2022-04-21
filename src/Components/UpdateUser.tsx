import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { API_URL } from "../config";
import { User } from "../Interfaces";
import { CloseButton, Spinner } from "react-bootstrap";

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
    passwordBtn: false,
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
    <div className="add-book-container">
      <h1>* Update your Information *</h1>
      <form onSubmit={handleUpdateUser} className="update-form">
        <label className="update-label">User Name:</label>
        {showInput.usernameBtn ? (
          <div className="update-input">
            <input
              name="username"
              type="text"
              placeholder="Enter your new username"
              onChange={handleChange}
              value={updatedUser.username}
            />
            <CloseButton name="usernameBtn" onClick={handleCloseInput} />
          </div>
        ) : (
          <div className="flex">
            <h4 className="update-info">{currentUser.username}</h4>
            <Button
              variant="outline-secondary"
              size="sm"
              name="usernameBtn"
              onClick={handleShowForm}
            >
              Update
            </Button>
          </div>
        )}
        <label className="update-label">Email:</label>
        {showInput.emailBtn ? (
          <div className="update-input">
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              value={updatedUser.email}
              onChange={handleChange}
            />
            <CloseButton name="emailBtn" onClick={handleCloseInput} />
          </div>
        ) : (
          <div className="flex">
            <h4 className="update-info">{currentUser.email}</h4>
            <Button
              variant="outline-secondary"
              size="sm"
              name="emailBtn"
              onClick={handleShowForm}
            >
              Update
            </Button>
          </div>
        )}
        <label className="update-label">Password:</label>
        {showInput.passwordBtn ? (
          <div className="update-input">
            <input
              name="password"
              type="password"
              placeholder="Enter your new password"
              onChange={handleChange}
            />
            <CloseButton name="passwordBtn" onClick={handleCloseInput} />
          </div>
        ) : (
          <div>
            <Button
              variant="outline-secondary"
              size="sm"
              name="passwordBtn"
              onClick={handleShowForm}
            >
              Update
            </Button>
          </div>
        )}
        <Button
          variant="success"
          size="lg"
          style={{ marginTop: "30px" }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default UpdateUser;
