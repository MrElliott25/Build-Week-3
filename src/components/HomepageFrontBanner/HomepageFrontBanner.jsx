import { Col, Container, Row } from "react-bootstrap";
import SinglePost from "./SinglePost";
import NewPostSection from "./NewPostSection";

const HomepageFrontBanner = function () {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col className="d-flex flex-column align-items-center">
          <NewPostSection />
          <SinglePost />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default HomepageFrontBanner;
