import ProfilePic from "./ProfilePic";
import ProfileDetails from "./ProfileDetails";
import { Container, Row, Col } from "react-bootstrap";
import "./profilePage.css";

function ProfilePage(){

  return (

    <section className="profile-section" id="ProfilePage">

      <Container className="slide-up">

        <Row className="align-items-center">

          <Col xs={12} md={4} className="d-flex justify-content-center">
            <ProfilePic />
          </Col>

          <Col xs={12} md={8}>
            <ProfileDetails />
          </Col>

        </Row>

      </Container>

    </section>

  )

}

export default ProfilePage;