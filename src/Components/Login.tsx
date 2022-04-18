import { useState } from "react";

interface FuncProps {
  //here you can declare the return type (here is void)
  onLogin: (props: { username: string; password: string }) => void;
}

function Login({ onLogin = () => {} }: FuncProps) {
  const [user, setUser] = useState({ username: "", password: "" });

  function handleChange(e: any) {
    let value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
  }
  function handleLogin(e: any) {
    e.preventDefault();
    onLogin(user);
  }
  return (
    <div className="landing-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="form">
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
        <label htmlFor="password" style={{ color: "black" }}>
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <button>Login!</button>
      </form>
    </div>
  );
}

export default Login;
