import { Button, Col, Row } from "react-bootstrap";
import "./SidebarCardComponent.css";
import { Link } from "react-router-dom";

function SidebarCardComponent({ name, description, url, index }) {
  const profileUrl = `/profile/${name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <>
      <Row className="pt-3">
        <Col className="d-flex align-items-start">
          <img className="profileSidebarCardPlaceholder" src={url} alt={name} />
          <div className="ms-3 text-start">
            <p className="sidebarUpdates fontWeight m-0">
              {name} presso {description}
            </p>
            <Button as={Link} to={profileUrl} variant="" className="buttonSidebar py-1 text-black rounded-5 mt-2">
              Visualizza
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>{index < 3 ? <hr /> : null}</Col>
      </Row>
    </>
  );
}

export default SidebarCardComponent;
