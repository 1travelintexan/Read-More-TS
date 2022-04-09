import { useState } from "react";

interface FuncProps {
  //here you can declare the return type (here is void)
  onSignUp: (props: { username: string; password: string }) => void;
}

function SignUp({ onSignUp = () => {} }: FuncProps) {
  const [user, setUser] = useState({ username: "", password: "" });

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
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>Sign Up!</button>
      </form>
    </div>
  );
}

export default SignUp;
