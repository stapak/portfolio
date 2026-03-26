import './App.css'
import ProfilePage from './components/profile/ProfilePage';
import SkillPage from './components/skills/SkillsPage';
import CoursesPage from './components/course/CoursesPage';
import CertificatePage from './components/certifications/CertificatePage';

import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="py-5">

      <ProfilePage />

      <hr className="my-5"/>

      <SkillPage />

      <hr className="my-5"/>

      <CertificatePage />

      <hr className="my-5"/>
     
       <CoursesPage />

    </Container>
  );
}

export default App;