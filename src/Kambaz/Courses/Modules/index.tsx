import { FaCaretDown, FaEllipsisV, FaPlus } from "react-icons/fa";
import { ListGroup } from "react-bootstrap";
import GreenCheckmark from "./GreenCheckMark";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  return (
    <div>
      <div
        id="wd-modules-controls"
        className="d-flex justify-content-end align-items-center mb-3"
      >
        <ModulesControls />
      </div>
      <ListGroup id="wd-modules" className="rounded-0">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title d-flex align-items-center bg-secondary p-3 ps-2">
            <BsGripVertical className="me-2 fs-3" /> Week 1
            <div className="d-flex align-items-center ms-auto">
              <GreenCheckmark />
              <button className="btn btn-link p-0 ms-1">
                <FaPlus />
              </button>
              <button className="btn btn-link p-0 ms-1">
                <FaEllipsisV />
              </button>
            </div>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <span className="wd-title d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
              </span>
              <div className="wd-content-item d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  Introduction to the course
                </div>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
              <div className="wd-content-item d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  Learn what is Web Development
                </div>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title d-flex align-items-center bg-secondary p-3 ps-2">
            <FaCaretDown className="me-2" /> Week 2
            <div className="d-flex align-items-center ms-auto">
              <GreenCheckmark />
              <button className="btn btn-link p-0 ms-1">
                <FaPlus />
              </button>
              <button className="btn btn-link p-0 ms-1">
                <FaEllipsisV />
              </button>
            </div>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <span className="wd-title d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
              </span>
              <div className="wd-content-item d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  HTML Basics
                </div>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
              <div className="wd-content-item d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  CSS Fundamentals
                </div>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
              <div className="wd-content-item d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  Building Your First Webpage
                </div>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title d-flex align-items-center bg-secondary p-3 ps-2">
            <FaCaretDown className="me-2" /> Week 3
            <div className="d-flex align-items-center ms-auto">
              <GreenCheckmark />
              <button className="btn btn-link p-0 ms-1">
                <FaPlus />
              </button>
              <button className="btn btn-link p-0 ms-1">
                <FaEllipsisV />
              </button>
            </div>
          </div>
          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1">
              <span className="wd-title d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES
              </span>
              <div className="wd-content-item d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  JS Introduction!
                </div>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
              <div className="wd-content-item d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  DOM Manipulation
                </div>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
              <div className="wd-content-item d-flex justify-content-between align-items-center py-2">
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  Event Handling
                </div>
                <div className="d-flex align-items-center">
                  <LessonControlButtons />
                </div>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
