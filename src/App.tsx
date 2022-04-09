import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddBook from "./Components/AddBook";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";
import SignUp from "./Components/Signup";
import { API_URL } from "./config";
import axios from "axios";

const App: FC = () => {
  function handleSignUp(user: { username: string; password: string }) {
    axios
      .post(`${API_URL}/signup`, user, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("there was an error signing up", err);
      });
  }

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<SignUp onSignUp={handleSignUp} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book-list" element={<BookList />} />
      </Routes>
    </div>
  );
};

export default App;
