import { Col, Container, Row } from "react-bootstrap";
import HomepageFrontBanner from "./HomepageFrontBanner/HomepageFrontBanner";
import HomeRightSidebar from "./HomeRightSidebar";
import ProfileLeftSidebarComponent from "./ProfileLeftSidebarComponent/ProfileLeftSidebarComponent";

const Homepage = function () {
  return (
    <Container className=" mt-4 pb-5">
      <Row>
        <Col xs="12" lg="3" className=" my-4 my-lg-0">
          <ProfileLeftSidebarComponent />
        </Col>

        <Col xs="12" lg="6">
          <HomepageFrontBanner />
        </Col>

        <Col xs="12" lg="3">
          <HomeRightSidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
