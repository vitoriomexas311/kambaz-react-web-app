import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3">
      <h3 className="mb-4">Edit Assignment</h3>

      <Form>
        <Form.Group controlId="wd-name" className="mb-3">
          <Form.Label className="fw-bold">Assignment Name</Form.Label>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Form.Group>
        <Form.Group controlId="wd-description" className="mb-4">
          <Form.Label className="fw-bold">Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            defaultValue="The assignment is available online so you submit a link to the landing page of"
          />
        </Form.Group>

        <Row className="mb-3 align-items-center">
          <Form.Label column sm={3} className="fw-bold text-sm-end">
            Points
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="number" defaultValue={100} min={0} />
          </Col>
        </Row>

        <Form.Group controlId="wd-group" className="mb-3">
          <Form.Label className="fw-bold">Assignment Group</Form.Label>
          <Form.Select defaultValue="assignments">
            <option value="assignments">Assignments</option>
            <option value="quizzes">Quizzes</option>
            <option value="exams">Exams</option>
            <option value="projects">Final Projects</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="wd-display-grade-as" className="mb-3">
          <Form.Label className="fw-bold">Display Grade as</Form.Label>
          <Form.Select defaultValue="points">
            <option value="points">Points</option>
            <option value="percentage">Percentage</option>
            <option value="letter-grade">Letter grade</option>
            <option value="complete-incomplete">Pass / Fail</option>
          </Form.Select>
        </Form.Group>

        <div className="border p-3 mb-3">
          <Form.Group controlId="wd-submission-type" className="mb-3">
            <Form.Label className="fw-bold">Submission Type</Form.Label>
            <Form.Select defaultValue="online">
              <option value="online">Online</option>
              <option value="in-person">In Person</option>
              <option value="external-tool">External Tool</option>
              <option value="no-submission">No Submission</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-0">
            <Form.Label className="fw-bold">Online Entry Options</Form.Label>
            <div className="ms-2">
              <Form.Check label="Text Entry" id="wd-text-entry" />
              <Form.Check label="Media Upload" id="wd-media-recordings" />
              <Form.Check label="File Upload" id="wd-file-upload" />
              <Form.Check label="Website URL" id="wd-website-url" />
            </div>
          </Form.Group>
        </div>

        <div className="border p-3 mb-3">
          <Form.Group controlId="wd-assign-to" className="mb-3">
            <Form.Label className="fw-bold">Assign to</Form.Label>
            <Form.Select defaultValue="everyone">
              <option value="everyone">Everyone</option>
              <option value="sections">Sections</option>
              <option value="individuals">Individuals</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3">
            <Col md={4} className="mb-3 mb-md-0">
              <Form.Label className="fw-bold">Due Date</Form.Label>
              <Form.Control type="datetime-local" />
            </Col>
            <Col md={4} className="mb-3 mb-md-0">
              <Form.Label className="fw-bold">Available From</Form.Label>
              <Form.Control type="datetime-local" />
            </Col>
            <Col md={4}>
              <Form.Label className="fw-bold">Available Until</Form.Label>
              <Form.Control type="datetime-local" />
            </Col>
          </Row>
        </div>

        <div className="d-flex gap-2">
          <Button variant="danger">Save</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </Form>
    </div>
  );
}
