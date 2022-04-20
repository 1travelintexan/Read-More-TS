import axios from "axios";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { API_URL } from "../config";
import { User } from "../Interfaces";

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
    let updatedUserDB = axios.post(`${API_URL}/update`, updatedUser, {
      withCredentials: true,
    });
    console.log((await updatedUserDB).data, "update");
  };

  const handleShowForm = (e: any) => {
    let name = e.target.name;
    console.log("clicked", name);
    setShowInput({ ...showInput, [name]: true });
  };
  return (
    <div className="updateUser-page">
      <h2>Update your Information:</h2>
      <form onSubmit={handleUpdateUser} className="form-container">
        <label style={{ color: "black" }}>User Name:</label>
        {showInput.usernameBtn ? (
          <input
            name="username"
            type="text"
            placeholder="Enter your new username"
            onChange={handleChange}
          />
        ) : (
          <div>
            <p>{currentUser.username}</p>
            <Button
              variant="outline-secondary"
              name="usernameBtn"
              onClick={handleShowForm}
            >
              Update
            </Button>
          </div>
        )}
        <label style={{ color: "black" }}>Email:</label>
        {showInput.emailBtn ? (
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
        ) : (
          <div>
            <p>{currentUser.email}</p>
            <Button
              variant="outline-secondary"
              name="emailBtn"
              onClick={handleShowForm}
            >
              Update
            </Button>
          </div>
        )}
        <label style={{ color: "black" }}>Password:</label>
        {showInput.passwordBtn ? (
          <input
            name="password"
            type="password"
            placeholder="Enter your new password"
            onChange={handleChange}
          />
        ) : (
          <div>
            <Button
              variant="outline-secondary"
              name="passwordBtn"
              onClick={handleShowForm}
            >
              Update
            </Button>
          </div>
        )}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UpdateUser;
