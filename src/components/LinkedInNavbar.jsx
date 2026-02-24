import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Form, Nav, NavDropdown } from "react-bootstrap";
// icone simili a quelle di LinkedIn
import { FaLinkedin, FaHome, FaUserFriends, FaBriefcase, FaCommentDots, FaBell, FaSearch } from "react-icons/fa";

const LinkedInNavbar = () => {
  // FASE DINAMICA (Futuro)
  const location = useLocation();

  const currentUser = {
    name: "Carmelo",
    image: "https://via.placeholder.com/30",
  };

  return (
    <Navbar bg="light" expand="lg" className="border-bottom sticky-top" style={{ backgroundColor: "#fff" }}>
      <Container>
        <Navbar.Brand as={Link} to="/home" className="me-2">
          <FaLinkedin size={40} color="#0a66c2" />
        </Navbar.Brand>

        <div className="px-3">
          <Form className=" d-flex me-auto align-items-center">
            <div className="px-2">
              <FaSearch className=""> </FaSearch>
            </div>
            <Form.Control type="search" placeholder="Cerca" className="bg-tertiary border-0 rounded-5" style={{ minWidth: "250px" }} aria-label="Search" />
          </Form>
        </div>

        {/* LATO DESTRO: Navigazione e Profilo */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center align-items-center">
            <Nav.Link
              as={Link}
              to="/home"
              className={`d-flex flex-column align-items-center mx-2 linkedin-nav-icon ${location.pathname === "/home" ? "active-nav-link" : ""}`}
            >
              <FaHome size={22} />
              <span style={{ fontSize: "12px" }}>Home</span>
            </Nav.Link>

            <Nav.Link
              href="#network"
              className={`d-flex flex-column align-items-center mx-2 linkedin-nav-icon ${location.pathname === "/network" ? "active-nav-link" : ""}`}
            >
              <FaUserFriends size={22} />
              <span style={{ fontSize: "12px" }}>Rete</span>
            </Nav.Link>

            <Nav.Link
              href="#jobs"
              className={`d-flex flex-column align-items-center mx-2 linkedin-nav-icon ${location.pathname === "/jobs" ? "active-nav-link" : ""}`}
            >
              <FaBriefcase size={22} />
              <span style={{ fontSize: "12px" }}>Lavoro</span>
            </Nav.Link>

            <Nav.Link
              href="#messaging"
              className={`d-flex flex-column align-items-center mx-2 linkedin-nav-icon ${location.pathname === "/messaging" ? "active-nav-link" : ""}`}
            >
              <FaCommentDots size={22} />
              <span style={{ fontSize: "12px" }}>Messaggistica</span>
            </Nav.Link>

            <Nav.Link
              href="#notifications"
              className={`d-flex flex-column align-items-center mx-2 linkedin-nav-icon ${location.pathname === "/notifications" ? "active-nav-link" : ""}`}
            >
              <FaBell size={22} />
              <span style={{ fontSize: "12px" }}>Notifiche</span>
            </Nav.Link>

            {/* ZONA PROFILO - Qui andranno i dati dell'API */}

            <div className="d-flex flex-column align-items-center justify-content-center mx-3 border-start  ps-3">
              <img src={currentUser.image} alt="profile" style={{ width: "24px", height: "24px", borderRadius: "50%", objectFit: "cover" }} />
              <NavDropdown title="Tu" id="basic-nav-dropdown" style={{ fontSize: "12px" }}>
                <NavDropdown.Item as={Link} to="/profile">
                  Visualizza Profilo ({currentUser.name})
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#settings">Impostazioni</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LinkedInNavbar;
