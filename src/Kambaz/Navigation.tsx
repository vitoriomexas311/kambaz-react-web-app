import { ListGroup } from "react-bootstrap";
import {
  AiOutlineCalendar,
  AiOutlineDashboard,
  AiOutlineExperiment,
  AiOutlineInbox,
} from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaBookSolid } from "react-icons/lia";
import { Link, useLocation } from "react-router-dom";

export default function KambazNavigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-absolute
            bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/logo.svg" width="75px" className="bg-white" />
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Account"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Account") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            isActive("/Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account{" "}
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Dashboard"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Dashboard")
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <AiOutlineDashboard
          className={`fs-1 ${
            isActive("/Dashboard") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Dashboard{" "}
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Courses"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Courses") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <LiaBookSolid
          className={`fs-1 ${
            isActive("/Courses") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Courses{" "}
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Calendar"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Calendar") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <AiOutlineCalendar
          className={`fs-1 ${
            isActive("/Calendar") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Calendar{" "}
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Inbox"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Inbox") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <AiOutlineInbox
          className={`fs-1 ${
            isActive("/Inbox") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Inbox{" "}
      </ListGroup.Item>
      <ListGroup.Item
        to="/Labs"
        as={Link}
        className={`text-center border-0 ${
          isActive("/Labs") ? "bg-white text-danger" : "bg-black text-white"
        }`}
      >
        <AiOutlineExperiment
          className={`fs-1 ${isActive("/Labs") ? "text-danger" : "text-white"}`}
        />
        <br />
        Labs{" "}
      </ListGroup.Item>
    </ListGroup>
  );
}
