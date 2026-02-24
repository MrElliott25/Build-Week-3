import { Col } from "react-bootstrap";
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
    <>
      <Col>
        <ProfileLeftSidebarHeaderComponent
          name={profileUser.name}
          occupation={profileUser.occupation}
          provenance={profileUser.provenance}
        />
      </Col>
      <Col className="mt-3">
        <ProfileLeftSecondSectionSidebarComponent />
      </Col>
      <Col className="mt-3">
 <ProfileLeftThirdSectionSidebarComponent />
      </Col>
    </>
  );
}

export default ProfileLeftSidebarComponent;
