import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import SinglePost from "./SinglePost";
import NewPostSection from "./NewPostSection";
import CreatePost from "./CreatePost";

const HomepageFrontBanner = function () {
  const [showModal, setShowModal] = useState(false);

  return (
    <Row>
      <Col></Col>
      <Col className="d-flex flex-column align-items-center">
        <NewPostSection onOpen={() => setShowModal(true)} />
        <CreatePost show={showModal} onClose={() => setShowModal(false)} />
        <SinglePost />
      </Col>
      <Col></Col>
    </Row>
  );
};

export default HomepageFrontBanner;
