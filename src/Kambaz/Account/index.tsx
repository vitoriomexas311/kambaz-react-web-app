import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";

export default function Account() {
  return (
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/Kambaz/Account/Signin" />}
              />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
