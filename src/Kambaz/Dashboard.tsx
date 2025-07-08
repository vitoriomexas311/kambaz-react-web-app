import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";

interface Course {
  title: string;
  description: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "CS1234 React JS",
    description: "Full Stack software developer",
    image: "/images/mem1.jpeg",
  },
  {
    title: "CS5678 Python for Beginners",
    description: "Snake charming for the modern age",
    image: "/images/meme2.png",
  },
  {
    title: "CS9012 Java Programming",
    description: "Coffee-fueled coding adventures",
    image: "/images/meme3.png",
  },
  {
    title: "CS3456 JavaScript Basics",
    description: "Making websites do the cha-cha",
    image: "/images/meme4.jpg",
  },
  {
    title: "CS7890 HTML & CSS",
    description: "Building websites like a digital architect",
    image: "/images/meme5.jpeg",
  },
  {
    title: "CS2345 Database Design",
    description: "Where data goes to make friends",
    image: "/images/meme6.jpeg",
  },
  {
    title: "CS6789 Version Control",
    description: "Time travel for your code",
    image: "/images/meme7.jpg",
  },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course, idx) => (
            <Col
              key={idx}
              className="wd-dashboard-course d-flex"
              style={{ width: "300px" }}
            >
              <Card className="flex-fill h-100">
                <Link
                  to="/Kambaz/Courses/1234/Home"
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src={course.image}
                    width="100%"
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.title}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
