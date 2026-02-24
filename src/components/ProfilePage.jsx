import { Container, Row, Col } from "react-bootstrap";
import ProfileFrontBanner from "./ProfileFrontBanner";
import SidebarComponent from "./SidebarComponent/SidebarComponent";

const ProfilePage = () => {
  return (
    <Container className="m-auto pt-3">
      <Row className="g-2 justify-content-center">
        <Col md={8}>
          <Row>
            <Col xs={12}>
              <ProfileFrontBanner />
            </Col>
          </Row>
        </Col>
        <Col>
          <SidebarComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
