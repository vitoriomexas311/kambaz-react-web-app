export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="wd-assignments-header">
        <input placeholder="Search for Assignments" id="wd-search-assignment" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
      </div>

      <div className="wd-assignment-group">
        <h3 id="wd-assignments-title">
          <span>ASSIGNMENTS</span>
          <span className="wd-grade-weight">40% of Total</span>
          <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <div className="wd-assignment-content">
              <a
                href="#/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link"
              >
                A1 - ENV + HTML
              </a>
              <div className="wd-assignment-details">
                <div className="wd-available">Available: Sep 1 at 12:00am</div>
                <div className="wd-due-date">
                  <strong>Due: Sep 15 at 11:59pm</strong>
                </div>
                <div className="wd-points">100 pts</div>
                <div className="wd-modules">Multiple Modules</div>
              </div>
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <div className="wd-assignment-content">
              <a
                href="#/Kambaz/Courses/1234/Assignments/124"
                className="wd-assignment-link"
              >
                A2 - CSS + BOOTSTRAP
              </a>
              <div className="wd-assignment-details">
                <div className="wd-available">Available: Sep 8 at 12:00am</div>
                <div className="wd-due-date">
                  <strong>Due: Sep 22 at 11:59pm</strong>
                </div>
                <div className="wd-points">100 pts</div>
                <div className="wd-modules">Multiple Modules</div>
              </div>
            </div>
          </li>
          <li className="wd-assignment-list-item">
            <div className="wd-assignment-content">
              <a
                href="#/Kambaz/Courses/1234/Assignments/125"
                className="wd-assignment-link"
              >
                A3 - JAVASCRIPT + REACT
              </a>
              <div className="wd-assignment-details">
                <div className="wd-available">Available: Sep 15 at 12:00am</div>
                <div className="wd-due-date">
                  <strong>Due: Sep 29 at 11:59pm</strong>
                </div>
                <div className="wd-points">100 pts</div>
                <div className="wd-modules">Multiple Modules</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
