import courseraImage from "../../assets/course websites/coursera logo.png";
import Course from "./Course";
import { Container, Row, Col } from "react-bootstrap";
import "./courses.css";

function CoursesPage() {
  return (
    <section className="courses-section">
      <Container>

        <div className="courses-glass">

          {/* TITLE INSIDE BOX */}
          <h1 className="courses-heading">
            Courses Completed by Me
          </h1>

          <Row className="g-4">

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Course
                logo={courseraImage}
                name="Python Crash Course"
                link="https://coursera.org/share/70683ed55f3b8467e1e9672258e5e379"
              />
            </Col>

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Course
                logo={courseraImage}
                name="Introduction to Git and GitHub"
                link="https://coursera.org/share/9e0b244e602f31b0df23b18c26151089"
              />
            </Col>

          </Row>

        </div>

      </Container>
    </section>
  );
}

export default CoursesPage;