import Course from "./Course";
import { Container, Row, Col } from "react-bootstrap";
import "./courses.css";

// logos and certificate image.
import courseraImage from "../../assets/course websites/coursera logo.png";

import gitGihubCourse from "../../assets/course websites/git and github certificate.png";
import pythonCrashCourse from "../../assets/course websites/python crash course certificate.png";
import shellScriptingCourse from "../../assets/course websites/Linux commands and shell scripting.png";


function CoursesPage() {
  return (
    <section className="courses-section" id="CoursesPage">
      <Container>

        <div className="courses-glass">

          {/* TITLE INSIDE BOX */}
          <h1 className="courses-heading">
            Course Certificates
          </h1>

          <Row className="g-4">

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Course
                logo={pythonCrashCourse}
                name="Python Crash Course"
                link="https://coursera.org/share/70683ed55f3b8467e1e9672258e5e379"
              />
            </Col>

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Course
                logo={gitGihubCourse}
                name="Introduction to Git and GitHub"
                link="https://coursera.org/share/9e0b244e602f31b0df23b18c26151089"
              />
            </Col>

            <Col xs={12} sm={6} md={4} lg={3} className="d-flex justify-content-center">
              <Course
                logo={shellScriptingCourse}
                name="Linux Commands and Shell Scripting"
                link="https://coursera.org/share/109c87e8cc2a8564af8f77a96b0fa1f6"
              />
            </Col>

          </Row>

        </div>

      </Container>
    </section>
  );
}

export default CoursesPage;