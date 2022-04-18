import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBook from "./Components/AddBook";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import SignUp from "./Components/Signup";
import Home from "./Components/Home";
import Login from "./Components/Login";
import ProfileImage from "./Components/ProfileImage";
import { API_URL } from "./config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "./Interfaces";
import { IBook } from "./Interfaces";
import "bootstrap/dist/css/bootstrap.min.css";

const App: FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    username: "",
    _id: 0,
    imageUrl: "",
  });
  const [books, setBooks] = useState<IBook[]>();

  useEffect(() => {
    async function getData() {
      try {
        let userResponse = await axios.get(`${API_URL}/user`, {
          withCredentials: true,
        });
        console.log("component did mount response", userResponse.data);
        let username = userResponse.data.username;
        let _id = userResponse.data._id;
        let imageUrl = userResponse.data.imageUrl;

        setUser({ username, imageUrl, _id });
      } catch (err) {
        console.log("There was an error", err);
      }
    }
    getData();
  }, []);

  function handleSignUp(user: { username: string; password: string }) {
    axios
      .post(`${API_URL}/signup`, user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        navigate("/profile");
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
        console.log("login data", res.data);
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
      <Navbar currentUser={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/profile"
          element={<Profile currentUser={user} setUser={setUser} />}
        />
        <Route
          path="/profile-image"
          element={<ProfileImage setUser={setUser} />}
        />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-list" element={<BookList />} />
      </Routes>
    </div>
  );
};

export default App;
