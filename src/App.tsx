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
import { TOKEN } from "./config";
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

  //did mount useEffect
  useEffect(() => {
    console.log(
      "token",
      TOKEN,
      API_URL,
      process.env.BEARER_TOKEN,
      process.env.REACT_APP_SERVER_URL
    );
    async function getData() {
      try {
        let userResponse = await axios.get(`${API_URL}/user`, {
          withCredentials: true,
        });
        let userDB = {
          _id: userResponse.data._id,
          username: userResponse.data.username,
          imageUrl: userResponse.data.imageUrl,
        };
        setUser(userDB);

        // const headers = {
        //   Accept: "application/json",
        //   Authorization: "Bearer",
        // };
        // const fetchData = async () => {
        //   const rawQuotes = await fetch("https://the-one-api.dev/v2/quote", {
        //     headers: headers,
        //   });
        //   const quotes = await rawQuotes.json();
        //   const quote =
        //     quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
        //   console.log(quote.dialog);
        //   //   const quote =
        //   //     quotes.docs[Math.floor(Math.random() * quotes.docs.length)];
        //   //   console.log("here", quote.dialog);
        // };
        // // const headers = {
        // //   Accept: "application/json",
        // //   Authorization: "Bearer H_ndUBdI-Aqznfi-SVH0",
        // // };

        // // let LOR = await axios.get(`https://the-one-api.dev/v2/quote`, {
        // //   headers: headers,
        // // });
        // // console.log("LOR", LOR.data);
        // fetchData();
      } catch (err) {
        console.log("There was an error on mount", err);
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
