import { Card } from "react-bootstrap";
import "./courses.css";

function Course({ name, logo, link }) {
  return (
    <Card className="course-card text-center h-100">
      <Card.Img variant="top" src={logo} className="course-img" />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="course-title">
          {name}
        </Card.Title>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="course-link mt-auto"
        >
          Certificate and Credentials
        </a>
      </Card.Body>
    </Card>
  );
}

export default Course;