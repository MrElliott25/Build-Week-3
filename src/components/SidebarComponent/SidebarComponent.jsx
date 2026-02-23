import { Col, Row } from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import SidebarCardComponent from "./SidebarCardComponent/SidebarCardComponent";
import "./SidebarComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../assets/media/placeholder.jpg";
import { FiArrowRight, FiEdit2 } from "react-icons/fi";
import SecondarySidebarCardComponent from "./SecondarySidebarCardComponent/SecondarySidebarCardComponent";
import SuggestedPagesComponent from "./SuggestPagesComponent/SuggestedPagesComponent";

function SidebarComponent() {
  const profiles = [
    {
      name: "Luca Ferri",
      description: "TechNova Solutions",
      img: img,
    },
    {
      name: "Giulia Conti",
      description: "ByteWave Systems",
      img: img,
    },
    {
      name: "Alessandro Moretti",
      description: "CyberNetica Labs",
      img: img,
    },
    {
      name: "Martina Rinaldi",
      description: "DataSphere Technologies",
      img: img,
    },
  ];

  const affiliates = [
    {
      name: "Marco Rossi",
      description: "Senior Frontend Developer",
      img: img,
    },
    {
      name: "Elena Bianchi",
      description: "UX/UI Designer",
      img: img,
    },
    {
      name: "Davide Esposito",
      description: "DevOps Engineer",
      img: img,
    },
    {
      name: "Sara Romano",
      description: "Data Scientist",
      img: img,
    },
    {
      name: "Andrea Galli",
      description: "Backend Developer",
      img: img,
    },
    {
      name: "Chiara Ferrara",
      description: "Cybersecurity Analyst",
      img: img,
    },
  ];

  const suggestedPages = [
    {
      name: "Agenzia delle Entrate",
      description: "Pubblica amministrazione",
      follower: "415.556 follower",
      img: img,
    },
    {
      name: "Poste Italiane",
      description: "Trasporti, logistica, supply chain e stoccaggio",
      follower: "838.695 follower",
      img: img,
    },
  ];

  return (
    <>
      <div className="sidebar border rounded mb-3 shadow-sm">
        <Row className="m-2">
          <Col className="d-flex justify-content-between">
            <h5 className="fontWeight">Lingua del profilo</h5>
            <FiEdit2 size={23} className="pointer" />
          </Col>

          <Col xs={12}>
            <p className="textColorGray m-0 ">Italiano</p>
            <hr />
          </Col>
        </Row>

        <Row className="m-2">
          <Col className="d-flex justify-content-between">
            <h5 className="fontWeight">Profilo Pubblico e URL</h5>
            <FiEdit2 size={23} className="pointer" />
          </Col>

          <Col>
            <a href="#" className="textColorGray m-0 text-decoration-none">
              www.linkedin.com/in/stefano-gabriele-nitti-837322211
            </a>
          </Col>
        </Row>
      </div>
      <div className="sidebar border rounded mb-3 shadow-sm">
        <Row className="py-3 ps-3">
          <Col>
            <h6 className="OtherProfilesText fontWeight mb-0">Altri profili consultati</h6>
            <Col className="d-flex align-items-center ">
              <FaEye size={18} className="me-2 eye" />
              <p className="mb-0 solo-per-te textColorGray ">Solo per te</p>
            </Col>

            {profiles.map((card, index) => {
              return (
                <SidebarCardComponent
                  key={index}
                  name={card.name}
                  description={card.description}
                  index={index}
                  url={card.img}
                ></SidebarCardComponent>
              );
            })}
          </Col>
        </Row>
      </div>
      <div className="sidebar border rounded mb-3 shadow-sm">
        <Row className="ps-3 pt-3">
          <Col className="text-center">
            <h6 className="OtherProfilesText fontWeight mb-0">Persone che potresti conoscere</h6>
            <Col className="d-flex align-items-center">
              <p className="mb-0 solo-per-te textColorGray">Dalla tua azienda</p>
            </Col>

            {affiliates.map((card, index) => {
              return (
                <SecondarySidebarCardComponent
                  key={index}
                  name={card.name}
                  description={card.description}
                  index={index}
                  url={card.img}
                ></SecondarySidebarCardComponent>
              );
            })}
          </Col>
        </Row>
        <Col xs={12} className=" mostraTutto text-center mt-2">
          <hr className="m-0" />
          <h6 className="mb-0 p-2 pointer">
            Mostra tutto <FiArrowRight />
          </h6>
        </Col>
      </div>
      <div className="sidebar border rounded mb-3 shadow-sm">
        <Row className="ps-3 pt-3">
          <Col className="text-center">
            <h6 className="OtherProfilesText fontWeight mb-0">Potrebbero interessarti</h6>
            <Col className="d-flex align-items-center">
              <p className="mb-0 solo-per-te textColorGray">Pagine per te</p>
            </Col>

            {suggestedPages.map((card, index) => {
              return (
                <SuggestedPagesComponent
                  key={index}
                  name={card.name}
                  description={card.description}
                  index={index}
                  url={card.img}
                ></SuggestedPagesComponent>
              );
            })}
          </Col>
        </Row>
        <Col xs={12} className=" mostraTutto text-center mt-2">
          <hr className="m-0" />
          <h6 className="mb-0 p-2 pointer">
            Mostra tutto <FiArrowRight />
          </h6>
        </Col>
      </div>
    </>
  );
}

export default SidebarComponent;
