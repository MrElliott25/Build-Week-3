import { Col, Row } from "react-bootstrap";
import "./ProfileLeftSecondSectionSidebarComponent.css";

function ProfileLeftSecondSectionSidebarComponent() {
  return (
    <>
      <div className="LeftSidebarSecondSection border rounded shadow-sm w-100">
        <div className="sidebar  mb-3 ">
          <Row className="m-2">
            <Col xs={12} className="d-flex justify-content-center">
              <Col xs={11} className="">
                <Col className="mt-2">
                  <Col>
                    <p className="fontsizeSecondaryDescriptionText ellipsisText bold">Collegamenti</p>
                    <p className="fontsizeSecondaryDescriptionText grey ellipsisText bold ">Espandi la tua rete</p>
                  </Col>
                  <Col className="mt-3">
                    <p className="fontsizeSecondaryDescriptionText ellipsisText bold">Invito</p>
                  </Col>
                </Col>
              </Col>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default ProfileLeftSecondSectionSidebarComponent;
