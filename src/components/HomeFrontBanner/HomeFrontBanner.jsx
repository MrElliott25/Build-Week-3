import { Col, Row } from "react-bootstrap";
import SinglePost from "./SinglePost";
import NewPostSection from "./NewPostSection";

const HomeFrontBanner = function () {
  return (
    <Row>
      <Col xs={8}>
        <NewPostSection />
        <SinglePost />
      </Col>
    </Row>
  );
};

export default HomeFrontBanner;
