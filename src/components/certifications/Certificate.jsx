import { Card } from "react-bootstrap";
import "./certificate.css";

function Certificate({ name, logo, link }) {
  return (
    <Card className="certificate-card text-center h-100">
      <Card.Img variant="top" src={logo} className="certificate-img" />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="certificate-title">
          {name}
        </Card.Title>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate-link mt-auto"
        >
          Certificate and Credentials
        </a>
      </Card.Body>
    </Card>
  );
}

export default Certificate;