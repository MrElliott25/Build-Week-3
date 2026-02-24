import { Col, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import "./ProfileLeftSidebarHeaderComponent.css";
import img from "../../../assets/media/placeholderProfile.jpg";

function ProfileLeftSidebarHeaderComponent({ name, occupation, provenance }) {
  return (
    <>
      <div className="LeftSidebarHeader border rounded shadow-sm">
        <div className="sidebar  rounded height mb-3 shadow-sm background">
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              
              <Col xs={10} className="profileSidebarCardSecondSection">
                <img src={img} alt="placeholder" className="profileSidebarCardPlaceholder" />
                <Col className="mt-2">
                  <h3 className="bold ellipsisText ">{name}</h3>
                  <p className="fontsizeDescriptionText ellipsisText">{occupation}</p>
                  <p className="fontsizeDescriptionText grey ellipsisText">{provenance}</p>
                  <Col xs={12} className=" mt-3 pe-2 experienceText">
                    <p className="ps-4 m-0 experienceTextDetails bold grey ">Esperienza</p>
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

export default ProfileLeftSidebarHeaderComponent;
