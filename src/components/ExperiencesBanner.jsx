import { Button, Form, Row, Col, Spinner, Modal } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { useState, useEffect } from "react";
import { fetchExperiences, generateExperience } from "../utils/fetch";
import { useSelector } from "react-redux";
import SingleExperience from "./SingleExperience";
import { useLocation } from "react-router-dom";

const ExperiencesBanner = function () {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [method, setMethod] = useState("POST");
  const [experienceSonID, setExperienceID] = useState(null);
  const location = useLocation();

  const userID = useSelector((currentState) => {
    return currentState.user._id;
  });

  const experiencesAPI = `https://striveschool-api.herokuapp.com/api/profile/${userID}/experiences`;
  const [allExperiences, setAllExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const data = await fetchExperiences(experiencesAPI);
    setAllExperiences(data);
    console.log(data);
    setIsLoading(false);
  };

  //Funzione che passo ai figli per ripopolare il form al click della penna
  const rehydrateForm = (experience) => {
    setRole(experience.role);
    setCompany(experience.company);

    setStartDate(experience.startDate.slice(0, 7));
    setEndDate(experience.endDate ? experience.endDate.slice(0, 7) : "");

    setArea(experience.area);
    setDescription(experience.description);

    setShowModal(true);
    setMethod("PUT");
  };

  //Recupero i dati al montaggio del componente
  useEffect(() => {
    if (userID) {
      loadData();
    }
  }, [userID]);

  //Funzione per il submit
  const handleSubmit = async () => {
    const newExperience = {
      role,
      company,
      startDate: `${startDate}-01`,
      endDate: endDate ? `${endDate}-01` : null,
      description,
      area,
    };

    await generateExperience(
      newExperience,
      experienceSonID ? `${experiencesAPI}/${experienceSonID}` : experiencesAPI,
      method,
    );
    resetForm();
    await loadData();
    setShowModal(false);
  };

  //Funzione per resettare il form dopo l'invio
  const resetForm = () => {
    setRole("");
    setCompany("");
    setStartDate("");
    setEndDate("");
    setArea("");
    setDescription("");
  };

  return (
    <div className=" p-3 rounded border border-black border-opacity-10 mt-3">
      {/* FORM INSERIMENTO ESPERIENZA */}
      <Modal show={showModal} onHide={() => setShowModal(false)} backdrop="static" centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi esperienza</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5 className="mb-3 fw-bold">Aggiungi esperienza</h5>
          <Form
            id="experienceForm"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <Row>
              {/* ROLE */}
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formRole">
                  <Form.Label className="fw-semibold" style={{ fontSize: "0.9rem" }}>
                    Ruolo
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                    placeholder="Es. Fullstack Developer"
                  />
                </Form.Group>
              </Col>

              {/* COMPANY */}
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formCompany">
                  <Form.Label className="fw-semibold" style={{ fontSize: "0.9rem" }}>
                    Nome Azienda
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={company}
                    onChange={(e) => {
                      setCompany(e.target.value);
                    }}
                    placeholder="Es. EPICODE"
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* STARTDATE */}
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formStartDate">
                  <Form.Label className="fw-semibold">Data di inizio</Form.Label>
                  <Form.Control
                    type="month"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>

              {/* ENDDATE */}
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEndDate">
                  <Form.Label className="fw-semibold">Data di fine</Form.Label>
                  <Form.Control
                    type="month"
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* AREA */}
            <Form.Group className="mb-3" controlId="formArea">
              <Form.Label className="fw-semibold" style={{ fontSize: "0.9rem" }}>
                Località (Area)
              </Form.Label>
              <Form.Control
                type="text"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                }}
                placeholder="Es. Roma, Italia"
              />
            </Form.Group>

            {/* DESCRIPTION */}
            <Form.Group className="mb-4" controlId="formDescription">
              <Form.Label className="fw-semibold" style={{ fontSize: "0.9rem" }}>
                Descrizione
              </Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                rows={3}
                placeholder="Descrivi le tue attività e responsabilità..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          {/* SUBMIT CHE FUNZIONA FUORI DAL FORM PERCHÈ IL MODAL HA UN ID */}
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Annulla
          </Button>
          <Button variant="primary" type="submit" form="experienceForm">
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Intestazione sezione */}
      <div className=" d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Esperienza</h3>
        <div className=" d-flex gap-3">
          <Button variant="light" className={location.pathname === "/profile/me" ? null : "d-none"}>
            <Plus
              size={25}
              onClick={() => {
                resetForm();
                setMethod("POST");
                setShowModal(true);
              }}
            ></Plus>
          </Button>
        </div>
      </div>
      {/* Fine intestazione */}

      {!isLoading ? (
        allExperiences ? (
          allExperiences.map((experience) => {
            return (
              <SingleExperience
                key={experience._id}
                role={experience.role}
                description={experience.description}
                startDate={experience.startDate}
                endDate={experience.endDate}
                company={experience.company}
                id={experience._id}
                API={experiencesAPI + "/"}
                rehydrate={() => rehydrateForm(experience)}
                setID={setExperienceID}
                loadData={loadData}
              />
            );
          })
        ) : (
          <p>Non hai ancora esperienze registrate. Aggiungine qualcuna tramite il Form!</p>
        )
      ) : (
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Caricamento...</span>
        </Spinner>
      )}
    </div>
  );
};

export default ExperiencesBanner;
