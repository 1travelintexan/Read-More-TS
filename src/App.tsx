import { FC, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBook from "./Components/AddBook";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import SignUp from "./Components/Signup";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { API_URL } from "./config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "./Interfaces";

const App: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({ username: "", _id: 0 });

  function handleSignUp(user: { username: string; password: string }) {
    axios
      .post(`${API_URL}/signup`, user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .then(() => {
        navigate("/profile");
      })
      .catch((err) => {
        console.log("there was an error signing up", err);
      });
  }

  function handleLogin(user: { username: string; password: string }) {
    axios
      .post(`${API_URL}/login`, user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        navigate("/profile");
      })
      .catch((err) => {
        console.log("there was an error signing up", err);
        navigate("/login");
      });
  }
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/profile" element={<Profile currentUser={user} />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-list" element={<BookList />} />
      </Routes>
    </div>
  );
};

export default App;
