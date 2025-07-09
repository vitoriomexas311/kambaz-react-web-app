import { Link } from "react-router-dom";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="p-4">
      <Card className="shadow-sm">
        <Card.Body>
          <div className="d-flex align-items-center mb-4">
            <FaUserCircle className="fs-1 me-3 text-secondary" />
            <div>
              <h4 className="mb-0">Profile</h4>
            </div>
          </div>

          <Form>
            <Form.Group controlId="wd-username" className="mb-3">
              <Form.Label className="fw-bold">Username</Form.Label>
              <Form.Control defaultValue="alice" />
            </Form.Group>

            <Form.Group controlId="wd-password" className="mb-3">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control type="password" defaultValue="123" />
            </Form.Group>

            <Form.Group controlId="wd-first-name" className="mb-3">
              <Form.Label className="fw-bold">First Name</Form.Label>
              <Form.Control defaultValue="Vitorio" />
            </Form.Group>

            <Form.Group controlId="wd-last-name" className="mb-3">
              <Form.Label className="fw-bold">Last Name</Form.Label>
              <Form.Control defaultValue="Mexas" />
            </Form.Group>

            <Form.Group controlId="wd-dob" className="mb-3">
              <Form.Label className="fw-bold">Date of Birth</Form.Label>
              <Form.Control type="date" defaultValue="2004-09-11" />
            </Form.Group>

            <Form.Group controlId="wd-email" className="mb-3">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control type="email" defaultValue="vitorio@mexas.cool" />
            </Form.Group>

            <Form.Group controlId="wd-role" className="mb-4">
              <Form.Label className="fw-bold">Role</Form.Label>
              <Form.Select defaultValue="FACULTY">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </Form.Select>
            </Form.Group>

            <div className="d-flex gap-2 align-items-center">
              <Button variant="danger">Save</Button>
              <Button variant="secondary">Cancel</Button>
              <Link
                to="/Kambaz/Account/Signin"
                className="ms-auto text-decoration-none"
              >
                Sign out
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
