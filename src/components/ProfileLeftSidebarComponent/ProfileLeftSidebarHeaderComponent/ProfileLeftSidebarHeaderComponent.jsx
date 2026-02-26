import { Col, Image, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { useSelector } from "react-redux";

function ProfileLeftSidebarHeaderComponent({ name, occupation, provenance }) {
  const currentImg = useSelector((state) => state.user.user.image);
  return (
    <div className="LeftSidebarHeader border rounded-top shadow-sm w-100">
      <div className=" rounded-top mb-3 shadow-sm background height">
        <Row className="justify-content-center g-0">
          <Col xs={10} className="profileSidebarCardSecondSection position-relative px-0 mt-3">
            <Image src={currentImg} alt="placeholder" className="profileSidebarCardPlaceholder object-fit-cover" />

            <div className="mt-2">
              <h3 className="bold ellipsisText">{name}</h3>
              <p className="fontsizeDescriptionText ellipsisText">{occupation}</p>
              <p className="fontsizeDescriptionText grey ellipsisText">{provenance}</p>

              <div className="mt-3 pe-2 experienceText">
                <p className="ps-4 m-0 experienceTextDetails bold grey">Esperienza</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ProfileLeftSidebarHeaderComponent;
