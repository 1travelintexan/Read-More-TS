import { useState } from "react";
import { FuncProps } from "../Interfaces";

function SignUp({ onSignUp = () => {} }: FuncProps) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  function handleChange(e: any) {
    let value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    onSignUp(user);
  }
  return (
    <div className="landing-page">
      <h1>Sign Up!</h1>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="username" style={{ color: "black" }}>
          Username:
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={handleChange}
        />
        <label htmlFor="email" style={{ color: "black" }}>
          Email:
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          onChange={handleChange}
        />
        <label htmlFor="password" style={{ color: "black" }}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <button>Sign Up!</button>
      </form>
    </div>
  );
}

export default SignUp;
