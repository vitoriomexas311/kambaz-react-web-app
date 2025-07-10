import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="mb-2 form-control"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="mb-2 form-control"
      />
      <Link
        id="wd-signin-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2"
      >
        Sign in{" "}
      </Link>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}
