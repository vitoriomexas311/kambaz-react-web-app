import {
  FaBan,
  FaCheckCircle,
  FaFileImport,
  FaShareAlt,
  FaHome,
  FaStream,
  FaBullhorn,
  FaChartBar,
  FaBell,
} from "react-icons/fa";

export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <div className="mb-2">
        <button className="btn btn-secondary rounded-2 me-2">
          <FaBan className="me-2" />
          Unpublish
        </button>
        <button className="btn btn-success rounded-2">
          <FaCheckCircle className="me-2" />
          Publish
        </button>
      </div>
      <div className="mb-2">
        <button className="btn btn-light border rounded-2 w-100">
          <FaFileImport className="me-2" />
          Import Existing Content
        </button>
      </div>
      <div className="mb-2">
        <button className="btn btn-light border rounded-2 w-100">
          <FaShareAlt className="me-2" />
          Import From Commons
        </button>
      </div>
      <div className="mb-2">
        <button className="btn btn-light border rounded-2 w-100">
          <FaHome className="me-2" />
          Choose Home Page
        </button>
      </div>
      <div className="mb-2">
        <button className="btn btn-light border rounded-2 w-100">
          <FaStream className="me-2" />
          View Course Stream
        </button>
      </div>
      <div className="mb-2">
        <button className="btn btn-light border rounded-2 w-100">
          <FaBullhorn className="me-2" />
          New Announcement
        </button>
      </div>
      <div className="mb-2">
        <button className="btn btn-light border rounded-2 w-100">
          <FaChartBar className="me-2" />
          New Analytics
        </button>
      </div>
      <div className="mb-2">
        <button className="btn btn-light border rounded-2 w-100">
          <FaBell className="me-2" />
          View Course Notifications
        </button>
      </div>
    </div>
  );
}
