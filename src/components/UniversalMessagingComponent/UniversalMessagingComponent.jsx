import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./UniversalMessagingComponent.css";
import img from "../../assets/media/placeholder.jpg";

function UniversalMessagingComponent() {
  return (
    <>
      <Container fluid>
        <Col className="position-fixed messagingMenu  dimentions d-flex align-items-center">
          <Accordion defaultActiveKey="0 ">
            <Accordion.Item eventKey="1">
              <Accordion.Header className="dimentions ">
                <img className=" messagingMenuUserImage" src={img} />
              </Accordion.Header>
              <Accordion.Body className="accordionHeight">
                <div className="accordionHeight"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Container>
    </>
  );
}

export default UniversalMessagingComponent;
