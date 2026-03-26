import './App.css'
import ProfilePage from './components/profile/ProfilePage';
import SkillPage from './components/skills/SkillsPage';
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="py-5">

      <ProfilePage />

      <hr className="my-5"/>

      <SkillPage />
     
    </Container>
  );
}

export default App;