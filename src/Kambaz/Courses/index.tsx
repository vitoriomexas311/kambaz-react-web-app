import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { FaAlignJustify } from "react-icons/fa";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import KambazNavigation from "../Navigation";
import { Navigate, Route, Routes } from "react-router";
export default function Courses() {
  // States showing us wehther we should show the kambaz or course navigation
  const [showKambazNav, setShowKambazNav] = useState(false);
  const [showCourseNav, setShowCourseNav] = useState(false);

  return (
    <div id="wd-courses">
      <h2 className="text-danger d-flex align-items-center justify-content-between">
        <span className="d-flex align-items-center">
          <FaAlignJustify
            role="button"
            className="me-3 fs-4 mb-1 d-md-none"
            onClick={() => setShowKambazNav(true)}
          />
          Course 1234
        </span>
        <FaAlignJustify
          role="button"
          className="fs-4 mb-1 d-xl-none"
          onClick={() => setShowCourseNav(true)}
        />
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-xl-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route
              path="Piazza"
              element={
                <a
                  href="https://piazza.com/class/mchnh9kzzbu35p"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Piazza</h2>
                </a>
              }
            />
            <Route path="Zoom" element={<h2>Zoom</h2>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h2>Quizzes</h2>} />
            <Route path="Grades" element={<h2>Grades</h2>} />
            <Route path="People" element={<h2>People</h2>} />
          </Routes>
        </div>
      </div>
      <Offcanvas
        show={showKambazNav}
        onHide={() => setShowKambazNav(false)}
        placement="start"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Kambaz Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <KambazNavigation />
        </Offcanvas.Body>
      </Offcanvas>
      <Offcanvas
        show={showCourseNav}
        onHide={() => setShowCourseNav(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Course Navigation</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <CourseNavigation />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
