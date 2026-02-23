import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import ExperiencesBanner from "./components/ExperiencesBanner";

function App() {
  return (
    <>
      <Container className="mt-5">
        <ExperiencesBanner />
      </Container>
    </>
  );
}

export default App;
