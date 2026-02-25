import { Link, useLocation } from "react-router-dom";
import { Navbar, Container, Form, Nav, NavDropdown } from "react-bootstrap";
// icone simili a quelle di LinkedIn
import {
  FaLinkedin,
  FaHome,
  FaUserFriends,
  FaBriefcase,
  FaCommentDots,
  FaBell,
  FaSearch,
} from "react-icons/fa";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const LinkedInNavbar = () => {
  // FASE DINAMICA
  const location = useLocation();
  const IconSize = 20;

  // questo andrà sostituito con: const currentUser = useSelector((state) => state.user);
  const currentUser = {
    name: "Carmelo",
    image: "https://via.placeholder.com/30",
  };

  const navItems = [
    { path: "/home", Icon: FaHome, label: "Home" },
    { path: "/network", Icon: FaUserFriends, label: "Rete" },
    { path: "/jobs", Icon: FaBriefcase, label: "Lavoro" },
    { path: "/messaging", Icon: FaCommentDots, label: "Messaggistica" },
    { path: "/notifications", Icon: FaBell, label: "Notifiche" },
  ];

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={location.pathname === "/" ? "d-none" : "border-bottom sticky-top"}
      style={{ backgroundColor: "#fff", minHeight: "52px" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/home" className="me-2">
          <FaLinkedin size={36} color="#0a66c2" />
        </Navbar.Brand>

        <div className="px-3">
          <Form className="d-flex me-auto align-items-center">
            <div className="px-2 text-secondary">
              <FaSearch size={16} />
            </div>
            <Form.Control
              type="search"
              placeholder="Cerca"
              className="bg-tertiary border-0 rounded-5"
              style={{ minWidth: "250px" }}
              aria-label="Search"
            />
          </Form>
        </div>

        {/* LATO DESTRO: Navigazione e Profilo */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center align-items-center">
            {/* --- IL TRITATUTTO DEI NAV.LINK --- */}
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={Link}
                to={item.path}
                className={`d-flex flex-column align-items-center mx-2 py-1 linkedin-nav-icon ${location.pathname === item.path ? "active-nav-link" : ""}`}
              >
                <item.Icon size={IconSize} />
                <span style={{ fontSize: "12px" }}>{item.label}</span>
              </Nav.Link>
            ))}

            {/* ZONA PROFILO */}
            <div className="d-flex flex-column align-items-center mx-2 linkedin-nav-icon position-relative">
              <img
                src={currentUser.image}
                alt="profile"
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "-4px",
                }}
              />
              <NavDropdown title="Tu" id="basic-nav-dropdown" style={{ fontSize: "12px" }}>
                <NavDropdown.Item as={Link} to="/profile/me">
                  Visualizza Profilo ({currentUser.name})
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#settings">Impostazioni</NavDropdown.Item>
              </NavDropdown>
            </div>

            {/* ZONA PER LE AZIENDE */}
            <div
              className="d-flex flex-column align-items-center justify-content-center mx-3 border-start ps-3 linkedin-nav-icon"
              style={{ cursor: "pointer" }}
            >
              <TfiLayoutGrid3Alt size={IconSize} className="mb-1" />
              <span style={{ fontSize: "12px" }}>Per le aziende</span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default LinkedInNavbar;
