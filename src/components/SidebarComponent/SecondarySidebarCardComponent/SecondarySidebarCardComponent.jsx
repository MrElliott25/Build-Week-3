import { Button, Col, Row } from "react-bootstrap";
import "./SecondarySidebarCardComponent.css";
import { ShieldCheck } from "react-bootstrap-icons";
import { FaUserPlus } from "react-icons/fa";

function SecondarySidebarCardComponent({ name, description, url, index }) {

  return (
    <>
      <Row>
        <Col className="d-flex pt-3">
          <div className="text-start">
            <img className="profileSidebarCardPlaceholder" src={url} alt={name} />
          </div>
          <div className="text-start">
            <p className="sidebarUpdates m-0 ms-3 fontWeight ">
              {name} <ShieldCheck size={18} className="ms-1" />
            </p>
            <p className="sidebarUpdates m-0 ms-3 secondaryCardDescriptionText">
              {description}
            </p>
            <div className="d-flex ms-3 mt-2">
              <Button variant="" className="buttonSidebar bg-white fontWeight rounded-5 py-1 ">
                <FaUserPlus size={18} /> Collegati
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          {index <5 ?<hr className="mb-0" />: null}
        </Col>
      </Row>
    </>
  );
}

export default SecondarySidebarCardComponent;