import { Accordion, Col, Container, Row } from "react-bootstrap";
import "./UniversalMessagingComponent.css";
import img from "../../assets/media/placeholder.jpg";
import { IoIosArrowDown, IoIosArrowUp, IoIosMore } from "react-icons/io";
import { LuSquarePen } from "react-icons/lu";
import imgChat from "../../assets/media/chatbg.png";
import { IoSearch } from "react-icons/io5";
import { VscSettings } from "react-icons/vsc";

function UniversalMessagingComponent() {
  return (
    <>
      <Container fluid>
        <Col className="position-fixed messagingMenu  dimentions d-flex align-items-center">
          <Accordion className="customAccordion" defaultActiveKey="">
            <Accordion.Item eventKey="1">
              <Accordion.Header className="dimentions p-0">
                <Col className="d-flex justify-content-around">
                  <Col xs={7} className="d-flex align-items-center pb-2">
                    <img className=" messagingMenuUserImage" src={img} />
                    <p className="m-0 messageTextAccordion ps-2 ">Messaggistica</p>
                  </Col>

                  <Col xs={4} className="d-flex justify-content-around align-items-center">
                    <IoIosMore size={18} />
                    <LuSquarePen size={15} />

                    <div className="accordion-toggle-icon">
                      <IoIosArrowDown size={20} className="icon-open" />
                      <IoIosArrowUp size={20} className="icon-closed" />
                    </div>
                  </Col>
                </Col>
              </Accordion.Header>
              <Accordion.Body className="accordionHeight">
                <div className="accordionHeight text-center ">
                  <Col xs={12} className="d-flex flex-column justify-content-center align-items-center py-2">
                    <Col xs={11}>
                      <div className="input-group chatSearch">
                        <span className="input-group-text border-end-0 chatSearchBar">
                          <IoSearch className="pointer" />
                        </span>
                        <input
                          className="form-control border-start-0 border-end-0 chatSearchBar focus"
                          type="text"
                          placeholder="Cerca Messaggi"
                        />
                        <span className="input-group-text border-start-0 chatSearchBar">
                          <VscSettings className="pointer" />
                        </span>
                      </div>
                    </Col>

                    <img src={imgChat} className="align-self-center my-3" />

                    <Col xs={11} className="text-center">
                      <h4>Ancora nessun messaggio</h4>
                    </Col>

                    <Col xs={11} className="text-center flex-wrap">
                      <p>Entra in contatto e dai il via a una conversazione per far decollare la tua carriera</p>
                    </Col>
                    <Col xs={11} className="text-center flex-wrap">
                      <button className="btn btn-outline-dark rounded-pill px-3 py-1 sendMessageButton">
                        <p className="sendMessageButtonText m-0">Invia un messaggio</p>
                      </button>
                    </Col>
                  </Col>
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
