import { NavLink, useParams } from "react-router-dom";
export default function CourseNavigation() {
  const { cid } = useParams<{ cid: string }>();
  const base = `/Kambaz/Courses/${cid}`;
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "fw-bold text-danger" : "text-primary";

  return (
    <div id="wd-courses-navigation" className="d-flex flex-column">
      <NavLink
        to={`${base}/Home`}
        className={linkClass}
        id="wd-course-home-link"
      >
        Home
      </NavLink>
      <NavLink
        to={`${base}/Modules`}
        className={linkClass}
        id="wd-course-modules-link"
      >
        Modules
      </NavLink>
      <NavLink
        to={`${base}/Piazza`}
        className={linkClass}
        id="wd-course-piazza-link"
      >
        Piazza
      </NavLink>
      <NavLink
        to={`${base}/Zoom`}
        className={linkClass}
        id="wd-course-zoom-link"
      >
        Zoom
      </NavLink>
      <NavLink
        to={`${base}/Assignments`}
        className={linkClass}
        id="wd-course-assignments-link"
      >
        Assignments
      </NavLink>
      <NavLink
        to={`${base}/Quizzes`}
        className={linkClass}
        id="wd-course-quizzes-link"
      >
        Quizzes
      </NavLink>
      <NavLink
        to={`${base}/Grades`}
        className={linkClass}
        id="wd-course-grades-link"
      >
        Grades
      </NavLink>
      <NavLink
        to={`${base}/People`}
        className={linkClass}
        id="wd-course-people-link"
      >
        People
      </NavLink>
    </div>
  );
}
