import { Col, Row } from "react-bootstrap";
import "./ProfileLeftThirdSectionSidebarComponent.css";
import { FaBookmark, FaCalendar, FaRegNewspaper, FaUsers } from "react-icons/fa";
import { Calendar } from "react-bootstrap-icons";

function ProfileLeftThirdSectionSidebarComponent() {
  return (
    <>
      <div className="LeftSidebarSecondSection border rounded shadow-sm w-100">
        <div className="sidebar  mb-3 ">
          <Row className="m-2">
            <Col xs={12} className="d-flex justify-content-center">
              <Col xs={11} className="">
                <Col className="mt-2">
                  <Col className="d-flex mt-3 pointer">
                    <FaBookmark size={24} />
                    <p className="fontsizeSecondaryDescriptionText ellipsisText bold ms-3 ">Collegamenti</p>
                  </Col>
                  <Col className="d-flex mt-3 pointer">
                    <FaUsers size={24} />
                    <p className="fontsizeSecondaryDescriptionText ellipsisText bold ms-3 ">Espandi la tua rete</p>
                  </Col>

                  <Col className="d-flex mt-3 pointer">
                    <FaRegNewspaper size={24} />
                    <p className="fontsizeSecondaryDescriptionText ellipsisText bold ms-3 ">Invito</p>
                  </Col>

                  <Col className="d-flex mt-3 pointer">
                    <FaCalendar size={24} />
                    <p className="fontsizeSecondaryDescriptionText ellipsisText bold ms-3 ">Eventi</p>
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

export default ProfileLeftThirdSectionSidebarComponent;
