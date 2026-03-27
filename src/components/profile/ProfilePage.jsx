import ProfilePic from "./ProfilePic";
import ProfileDetails from "./ProfileDetails";
import { Container, Row, Col } from "react-bootstrap";
import "./profilePage.css";

function ProfilePage(){

  return (

    <Container className="slide-up" fluid id="ProfilePage">

      <Row className="align-items-center">

        <Col xs={12} md={4} className="d-flex justify-content-center">
          <ProfilePic />
        </Col>

        <Col xs={12} md={8}>
          <ProfileDetails />
        </Col>

      </Row>

    </Container>

  )

}

export default ProfilePage;