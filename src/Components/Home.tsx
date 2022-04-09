import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <h1>New Here? Signup to enter</h1>
        <Link to={"/signup"}>Signup</Link>
      </div>
      <div>
        <h1>Returning User?</h1>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
}

export default Home;
