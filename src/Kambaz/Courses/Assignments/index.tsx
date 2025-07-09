import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaSearch, FaPlus, FaEllipsisV } from "react-icons/fa";
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckMark";

interface Assignment {
  id: number;
  title: string;
  available: string;
  due: string;
  points: number;
}

const assignments: Assignment[] = [
  {
    id: 123,
    title: "A1",
    available: "Available: Sep 1 at 12:00am",
    due: "Due: Sep 15 at 11:59pm",
    points: 100,
  },
  {
    id: 124,
    title: "A2",
    available: "Available: Sep 8 at 12:00am",
    due: "Due: Sep 22 at 11:59pm",
    points: 100,
  },
  {
    id: 125,
    title: "A3",
    available: "Available: Sep 15 at 12:00am",
    due: "Due: Sep 29 at 11:59pm",
    points: 100,
  },
];

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex mb-3 align-items-center">
        <InputGroup className="me-auto" style={{ maxWidth: "350px" }}>
          <InputGroup.Text className="bg-white border-end-0">
            <FaSearch />
          </InputGroup.Text>
          <FormControl
            placeholder="Search for Assignments"
            className="border-start-0"
          />
        </InputGroup>

        <div className="float-end">
          <Button variant="secondary" className="me-2 text-nowrap">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" className="text-nowrap">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <div className="bg-light border p-3 mb-3 d-flex justify-content-between align-items-center">
        <h4 className="fw-bold mb-0">ASSIGNMENTS</h4>
        <div className="d-flex align-items-center float-end">
          <span className="badge px-4 py-2 bg-secondary">40% of Total</span>
          <FaPlus className="ms-2" />
          <FaEllipsisV className="ms-2" />
        </div>
      </div>

      <ListGroup className="rounded-0">
        {assignments.map((a) => (
          <ListGroup.Item
            key={a.id}
            className="wd-assignment-list-item p-3 d-flex align-items-start"
          >
            <BsGripVertical className="me-3 fs-4 text-muted" />

            <div className="flex-fill">
              <a
                href={`#/Kambaz/Courses/1234/Assignments/${a.id}`}
                className="d-block fw-bold text-decoration-none text-black"
              >
                {a.title}
              </a>
              <div className="text-muted small">
                {a.available} | <strong>{a.due}</strong> | {a.points} pts
              </div>
            </div>

            <div className="d-flex align-items-center ms-2 float-end">
              <GreenCheckmark />
              <FaEllipsisV className="ms-2" />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
