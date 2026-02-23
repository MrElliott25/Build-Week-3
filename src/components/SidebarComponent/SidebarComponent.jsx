import { Col, Row } from "react-bootstrap";
import { FaEye, FaLinkedin } from "react-icons/fa";
import SidebarCardComponent from "./SidebarCardComponent/SidebarCardComponent";
import "../SidebarComponent/"

function SidebarComponent() {
  const profiles = [
  {
    name: "Luca Ferri",
    description: "TechNova Solutions"
  },
  {
    name: "Giulia Conti",
    description: "ByteWave Systems"
  },
  {
    name: "Alessandro Moretti",
    description: "CyberNetica Labs"
  },
  {
    name: "Martina Rinaldi",
    description: "DataSphere Technologies"
  }
];

  return (
    <>
      <Row>
        <Col>
    <h4>Altri profili consultati</h4>
    <Col className="d-flex align-items-center">
        <FaEye className="me-2" />
        <p className="mb-0">Solo per te</p>
      </Col>
     
        {profiles.map((card,index)=>{
            return <SidebarCardComponent key={index} card={card}></SidebarCardComponent>
        })}
        </Col>
      </Row>
      
    </>
  );
}

export default SidebarComponent;
