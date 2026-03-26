import hackerRankImage from "../../assets/skill certifications/hacker rank background image.webp";
import Certificate from "./Certificate";
import { Container, Row, Col } from "react-bootstrap";
import "./certificate.css";

function CertificatePage() {
  return (
    <section className="courses-section">
      <Container>

        <div className="courses-glass">

          {/* TITLE INSIDE BOX */}
          <h1 className="courses-heading">
            Skill Certifications
          </h1>

          <Row className="g-4">

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Certificate
                logo={hackerRankImage}
                name="Python (Basic)"
                link="https://www.hackerrank.com/certificates/3fe040885931"
              />
            </Col>

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Certificate
                logo={hackerRankImage}
                name="SQL (Basic)"
                link="https://www.hackerrank.com/certificates/aaf8b5acf464"
              />
            </Col>

          </Row>

        </div>

      </Container>
    </section>
  );
}

export default CertificatePage;