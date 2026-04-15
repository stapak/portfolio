import './App.css'
import ProfilePage from './components/profile/ProfilePage';
import SkillPage from './components/skills/SkillsPage';
import CoursesPage from './components/course/CoursesPage';
import CertificatePage from './components/certifications/CertificatePage';
import ProjectsPage from './components/Projects/ProjectsPage';
import UtilitiesPage from './components/utilities/UtilitiesPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="py-4">
      <Header />

      <ProfilePage />

      <hr className="my-5 "/>

      <SkillPage />

      <hr className="my-5"/>

      <ProjectsPage />

      <hr className="my-5"/>

      <UtilitiesPage />

      <hr className="my-5"/>

      <CertificatePage />

      <hr className="my-5"/>
     
      <CoursesPage />

      <Footer />

    </Container>
  );
}

export default App;