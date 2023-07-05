import { useState } from "react";
import { Link } from "react-router-dom";
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
        <label htmlFor="username" className="login-label">
          Username:
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Samwell Tarly"
          onChange={handleChange}
        />
        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          type="password"
          name="password"
          placeholder="******"
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
      <h6>
        New to Kindlix?
        <Link to={"/signup"} id="link">
          Signup
        </Link>
      </h6>
    </div>
  );
}

export default Login;
