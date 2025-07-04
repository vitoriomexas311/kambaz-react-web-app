export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <strong>Assignment Name</strong>
      </label>
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />

      <label htmlFor="wd-group">
        <strong>Assignment Group</strong>
      </label>
      <br />
      <select id="wd-group">
        <option value="assignments">Assignments</option>
        <option value="quizzes">Quizzes</option>
        <option value="exams">Exams</option>
        <option value="projects">Final Projects</option>
      </select>
      <br />
      <br />

      <label htmlFor="wd-display-grade-as">
        <strong>Display Grade as</strong>
      </label>
      <br />
      <select id="wd-display-grade-as">
        <option value="points">Points</option>
        <option value="percentage">Percentage</option>
        <option value="letter-grade">Letter grade</option>
        <option value="complete-incomplete">pass/fail</option>
      </select>
      <br />
      <br />

      <label htmlFor="wd-submission-type">
        <strong>Submission Type</strong>
      </label>
      <br />
      <select id="wd-submission-type">
        <option value="online">Online</option>
        <option value="in-person">In person</option>
        <option value="external-tool">External Tool</option>
        <option value="no-submission">No submision needed!</option>
      </select>
      <br />
      <br />

      <div id="wd-online-options" style={{ display: "block" }}>
        <label>
          <strong>Online Entry Options</strong>
        </label>
        <br />
        <input type="checkbox" id="wd-text-entry" />
        <label htmlFor="wd-text-entry">Text Entry</label>
        <br />
        <input type="checkbox" id="wd-media-recordings" />
        <label htmlFor="wd-media-recordings">Media Upload</label>
        <br />
        <input type="checkbox" id="wd-file-upload" />
        <label htmlFor="wd-file-upload">File Upload</label>
        <br />
        <input type="checkbox" id="wd-website-url" />
        <label htmlFor="wd-website-url">Website URL</label>
        <br />
        <br />
      </div>

      <label htmlFor="wd-assign-to">
        <strong>Assign to</strong>
      </label>
      <br />
      <select id="wd-assign-to">
        <option value="everyone">Everyone</option>
        <option value="sections">Sections</option>
        <option value="individuals">Individuals</option>
      </select>
      <br />
      <br />

      <label htmlFor="wd-due-date">
        <strong>Due Date</strong>
      </label>
      <br />
      <input type="datetime-local" id="wd-due-date" />
      <br />
      <br />

      <label htmlFor="wd-available-from">
        <strong>Available From</strong>
      </label>
      <br />
      <input type="datetime-local" id="wd-available-from" />
      <br />
      <br />

      <label htmlFor="wd-available-until">
        <strong>Available Until</strong>
      </label>
      <br />
      <input type="datetime-local" id="wd-available-until" />
      <br />
      <br />

      <textarea
        id="wd-description"
        rows={8}
        cols={80}
        style={{ resize: "vertical", minHeight: "200px" }}
      >
        The assignment is available online so you submit a link to the landing
        page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
      </table>
    </div>
  );
}
