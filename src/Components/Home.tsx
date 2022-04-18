import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="landing-page">
      <div className="landing-page-div">
        <h1>Returning User?</h1>
        <Link to={"/login"} id="link">
          <h3>Login</h3>
        </Link>
      </div>
      <h6>-OR-</h6>
      <div className="landing-page-div">
        <h1>New Here?</h1>
        <Link to={"/signup"} id="link">
          <h3>Signup</h3>
        </Link>
      </div>
    </div>
  );
}

export default Home;
