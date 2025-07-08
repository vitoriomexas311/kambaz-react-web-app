import { FaCaretDown } from "react-icons/fa";

export default function Modules() {
  return (
    <div>
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title d-flex align-items-center">
            <FaCaretDown className="me-2" /> Week 1
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title d-flex align-items-center">
                <FaCaretDown className="me-2" /> LEARNING OBJECTIVES
              </span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title d-flex align-items-center">
            <FaCaretDown className="me-2" /> Week 2
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title d-flex align-items-center">
                <FaCaretDown className="me-2" /> LEARNING OBJECTIVES
              </span>
              <ul className="wd-content">
                <li className="wd-content-item">HTML Basics</li>
                <li className="wd-content-item">CSS Fundamentals</li>
                <li className="wd-content-item">Building Your First Webpage</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title d-flex align-items-center">
            <FaCaretDown className="me-2" /> Week 3
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title d-flex align-items-center">
                <FaCaretDown className="me-2" /> LEARNING OBJECTIVES
              </span>
              <ul className="wd-content">
                <li className="wd-content-item">js Intro!</li>
                <li className="wd-content-item">DOM Manipulation</li>
                <li className="wd-content-item">Event Handling</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
