import { Card } from "react-bootstrap";
import "./certificate.css";

function Certificate({ name, logo, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="certificate-wrapper"
    >
      <Card className="certificate-card text-center h-100">
        <Card.Img variant="top" src={logo} className="certificate-img" />

        <Card.Body className="d-flex flex-column">
          <Card.Title className="certificate-title">
            {name}
          </Card.Title>

          <span className="certificate-link mt-auto">
            Certificate and Credentials
          </span>
        </Card.Body>
      </Card>
    </a>
  );
}

export default Certificate;