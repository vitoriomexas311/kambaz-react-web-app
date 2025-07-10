import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";

export default function Kambaz() {
  return (
    <div id="wd-kambaz" className="position-relative">
      <KambazNavigation />
      <div>
        {/* // style={{ marginLeft: "140px" }} */}

        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Courses/:cid/*" element={<Courses />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
