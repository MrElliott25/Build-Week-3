import { Col, Row } from "react-bootstrap";
import ProfileLeftSecondSectionSidebarComponent from "./ProfileLeftSecondSectionSidebarComponent/ProfileLeftSecondSectionSidebarComponent";
import "./ProfileLeftSidebarComponent.css";
import ProfileLeftSidebarHeaderComponent from "./ProfileLeftSidebarHeaderComponent/ProfileLeftSidebarHeaderComponent";
import ProfileLeftThirdSectionSidebarComponent from "./ProfileLeftThirdSectionSidebarComponent/ProfileLeftThirdSectionSidebarComponent";

function ProfileLeftSidebarComponent() {
  const profileUser = {
    name: "Stefano Gabriele Nitti",
    occupation: " 267° Papa della Chiesa cattolica",
    provenance: "Monopoli, Puglia",
  };

  return (
    <Row className=" g-3 w-100">
      <Col xs={12} className=" d-flex justify-content-center">
        <ProfileLeftSidebarHeaderComponent name={profileUser.name} occupation={profileUser.occupation} provenance={profileUser.provenance} />
      </Col>
      <Col xs={12} className="mt-3 d-flex justify-content-center">
        <ProfileLeftSecondSectionSidebarComponent />
      </Col>
      <Col xs={12} className="mt-3 d-flex justify-content-center">
        <ProfileLeftThirdSectionSidebarComponent />
      </Col>
    </Row>
  );
}

export default ProfileLeftSidebarComponent;
