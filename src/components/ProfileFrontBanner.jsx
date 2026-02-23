import { Container, Row, Col } from "react-bootstrap";
import "./ProfileFrontBanner.css";
import { useState } from "react";
import { ArrowRight } from "react-bootstrap-icons";

const ProfileFrontBanner = function () {
  const [referenza, setReferenza] = useState("ricevute");
  const [interessi, setInteressi] = useState("aziende");

  return (
    <Container>
      <Row>
        <Col>
          <div className="border mt-3">
            <div className="position-relative">
              {/* immagine di sfondo */}
              <img
                src="https://www.nieddittas.it/wp-content/uploads/2024/04/differenza-tra-mare-e-oceano.jpg"
                alt="sea"
                className="img-fluid w-100"
                style={{ height: "200px", objectFit: "cover" }}
              />
              {/* immagine profilo  */}
              <img
                src="https://t2informatik.de/en/wp-content/uploads/sites/2/2022/01/user-smartpedia-t2informatik.png"
                alt="user"
                className="rounded-circle border border-white position-absolute"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  bottom: "-60px",
                  left: "3%",
                }}
              />
            </div>

            <div className="p-3 pt-5">
              <div className="d-lg-flex">
                <div className="pt-2">
                  {/* nome e cognome */}
                  <h2>Stefano Casasola</h2>
                  {/* esperienze */}
                  <p className="mb-1">
                    Founder & Software Developer @ Nucleode SRL - Educator @
                    EPICODE - IT Consultant
                  </p>
                </div>
                {/* ul per mettere aziende o studi frequentati */}
                <ul className="ms-lg-auto list-unstyled mb-2 mb-lg-0">
                  <li>
                    <a href="#" className=" a-blue">
                      EPICODE
                    </a>
                  </li>
                  <li>
                    <a href="#" className=" a-blue">
                      Università degli Studi di Udine
                    </a>
                  </li>
                </ul>
              </div>
              {/* area */}
              <p>
                Gorizia, Friuli-Venezia Giulia, Italia{" "}
                <a href="#" className="text-decoration-none">
                  Informazioni di contatto
                </a>
              </p>
              {/* bottoni nella prima scheda */}
              <button className="btn rounded-pill me-2 px-3 py-1 btn-primary">
                Collegati
              </button>
              <button className="btn rounded-pill me-2 px-3 py-1 btn-outline-primary">
                Messaggio
              </button>
              <button className="btn rounded-pill me-2 px-3 py-1 btn-outline-dark">
                Altro
              </button>
            </div>
          </div>
          {/* informazioni */}
          <div className="border mt-3 p-3">
            <h2>Informazioni</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          {/* attività */}
          <div className="border mt-3 p-3 pb-0">
            <h2>Attività</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <hr />
            <button
              type="button"
              className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
              <h5 className="mb-0">
                Mostra tutte le attività <ArrowRight />
              </h5>
            </button>
          </div>
          {/* foermazione */}
          <div className="border mt-3 p-3">
            <h2>Formazione</h2>
          </div>
          {/* licenze certificazioni */}
          <div className="border mt-3 p-3">
            <h2>Licenze e certificazioni</h2>
          </div>
          {/* volontariato */}
          <div className="border mt-3 p-3">
            <h2>Volontariato</h2>
          </div>
          {/* competenze */}
          <div className="border mt-3 p-3">
            <h2>Competenze</h2>
            <button
              type="button"
              className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
              <h5 className="mb-0">
                Mostra tutte le competenze <ArrowRight />
              </h5>
            </button>
          </div>
          {/* referenze */}
          <div className="border mt-3 p-3">
            <h2>Referenze</h2>
            <div>
              <button
                type="button"
                className="border-0 py-2 glow-btn m-1 bg-bianco mb-2 "
                onClick={() => setReferenza("ricevute")}>
                <h5 className="m-0">Ricevute</h5>
              </button>
              <button
                type="button"
                className="border-0 py-2 glow-btn m-1 bg-bianco mb-2 "
                onClick={() => setReferenza("scritte")}>
                <h5 className="m-0">Scritte</h5>
              </button>
              <hr />
            </div>
            <div>
              {" "}
              {/* ricevute */}
              {referenza === "ricevute" && (
                <div>
                  <div className="d-flex">
                    {" "}
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQHSBhlNPGgFfQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1731257845638?e=1773273600&v=beta&t=TzqQcb_0CTzIQXsz0eo9S8we0hbCrkn8FLsLGacFJTQ"
                      alt="user"
                      className="rounded-circle border border-white me-2 "
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <div>
                      <h3>
                        <a href="#" className="a-blue">
                          Roberta Maatera
                        </a>
                      </h3>
                      <p>
                        Ho avuto il privilegio di partecipare al bootcamp presso
                        Strive School (EPICODE) sotto la guida del docente
                        Stefano Casasola e posso affermare che la sua
                        competenza, professionalità e dedizione sono state
                        determinanti per il mio percorso di apprendimento. Il
                        suo approccio didattico è stato sempre chiaro,
                        strutturato e orientato alla pratica, il che mi ha
                        permesso di sviluppare rapidamente le competenze
                        necessarie per entrare nel mondo della programmazione
                        web. Mi ha motivato costantemente a dare il massimo,
                        fornendo feedback costruttivi che mi hanno permesso di
                        crescere sia dal punto di vista tecnico che personale.
                        Oltre alla sua conoscenza approfondita delle tecnologie,
                        ha saputo creare un ambiente di apprendimento stimolante
                        e inclusivo, dove ogni studente si è sentito supportato
                        e incoraggiato a superare le proprie difficoltà. Sono
                        grata per tutto ciò che ho imparato grazie a lui e,
                        senza dubbio, raccomando vivamente la sua guida a
                        chiunque voglia intraprendere un percorso nel mondo del
                        coding.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    {" "}
                    <img
                      src="https://media.licdn.com/dms/image/v2/C4D03AQHc4qBmvdXLYw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1613932805797?e=1773273600&v=beta&t=vQPGYSTrJjsNhhAiaS6_MKkQi-uEFWKSEssyVHF2itw"
                      alt="user"
                      className="rounded-circle border border-white me-2 "
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <div>
                      <h3>
                        <a href="#" className="a-blue">
                          Vardan Galstyan
                        </a>
                      </h3>
                      <p>
                        I strongly believe that despite the professional skills,
                        human values are the most important. But when a person
                        is both professional and has tons of other values, thats
                        what makes him/her a unique asset in any team. For
                        anyone who has to read this reccommendation, I have to
                        say don't waste a second, because your professional
                        search is going to end here and now.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {/* scritte */}
              {referenza === "scritte" && (
                <div>
                  <div className="d-flex">
                    {" "}
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4D03AQHSBhlNPGgFfQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1731257845638?e=1773273600&v=beta&t=TzqQcb_0CTzIQXsz0eo9S8we0hbCrkn8FLsLGacFJTQ"
                      alt="user"
                      className="rounded-circle border border-white me-2 "
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <div>
                      <h3>
                        <a href="#" className="a-blue">
                          Roberta Maatera
                        </a>
                      </h3>
                      <p>
                        Ho avuto il privilegio di partecipare al bootcamp presso
                        Strive School (EPICODE) sotto la guida del docente
                        Stefano Casasola e posso affermare che la sua
                        competenza, professionalità e dedizione sono state
                        determinanti per il mio percorso di apprendimento. Il
                        suo approccio didattico è stato sempre chiaro,
                        strutturato e orientato alla pratica, il che mi ha
                        permesso di sviluppare rapidamente le competenze
                        necessarie per entrare nel mondo della programmazione
                        web.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    {" "}
                    <img
                      src="https://media.licdn.com/dms/image/v2/D4E03AQEX38noLc6VTQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1694008229420?e=1773273600&v=beta&t=ObI1D-mbtTr4uc3d4Ht_uKGHBij_npJEwP8yO0tmdv0"
                      alt="user"
                      className="rounded-circle border border-white me-2 "
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <div>
                      <h3>
                        <a href="#" className="a-blue">
                          El Hassane Sahraoui
                        </a>
                      </h3>
                      <p>
                        Durante il suo percorso formativo in EPICODE, Hassan ha
                        sempre dimostrato una grande voglia di apprendere ed
                        inesauribile tenacia, argomento dopo argomento. Sempre
                        costante nell'esecuzione e nelle consegne, ha appreso
                        con ritmo le tematiche proposte durante il corso. Nei
                        lavori di squadra si è dimostrato un membro serio e
                        affidabile nei team in cui è stato inserito, capace di
                        collaborare al meglio al fine di ottenere un risultato
                        collettivo.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* pubblicazioni */}
          <div className="border mt-3 p-3">
            <h2>Pubblicazioni</h2>
          </div>
          ù{/* lingue */}
          <div className="border mt-3 p-3">
            <h2>Lingue</h2>
          </div>
          {/* interessi */}
          <div className="border mt-3 p-3">
            <h2>Interessi</h2>
            <div>
              <button
                type="button"
                className="border-0 py-2 glow-btn m-1 bg-bianco mb-2 "
                onClick={() => setInteressi("aziende")}>
                <h5 className="m-0">Aziende</h5>
              </button>
              <button
                type="button"
                className="border-0 py-2 glow-btn m-1 bg-bianco mb-2 "
                onClick={() => setInteressi("gruppi")}>
                <h5 className="m-0">Gruppi</h5>
              </button>
              <button
                type="button"
                className="border-0 py-2 glow-btn m-1 bg-bianco mb-2 "
                onClick={() => setInteressi("scuole o università")}>
                <h5 className="m-0">Scuole o università</h5>
              </button>
              <hr />
              <div></div>
            </div>
            {/* aziende */}
            {interessi === "aziende" && (
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex">
                        {" "}
                        <img
                          src="https://media.licdn.com/dms/image/v2/C4D0BAQHUcu98SZ2TVw/company-logo_100_100/company-logo_100_100/0/1630576446368/tesla_motors_logo?e=1773273600&v=beta&t=gwFwCwt2dHd3vlsRl6_mL3bKFwDVpRDnsMCfdsjzFkU"
                          alt="tesla"
                          style={{ width: "50px", height: "50px" }}
                          className="me-3 "
                        />
                        <div>
                          {" "}
                          <h6>Tesla</h6>
                          <p>12.321.987 follower</p>
                          <button
                            type="button"
                            className="rounded-pill px-2 py-1">
                            segui
                          </button>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="col-6">
                      <div className="d-flex">
                        <img
                          src="https://media.licdn.com/dms/image/v2/C560BAQEbqLQ-JE0vdQ/company-logo_100_100/company-logo_100_100/0/1630604387686/spacex_logo?e=1773273600&v=beta&t=oXG_38Q_r_2Lzi-0YLRaE_DYa0kzeWHwTcHE3-n9Tqc"
                          alt="SpaceX"
                          style={{ width: "50px", height: "50px" }}
                          className="me-3 "
                        />
                        <div>
                          {" "}
                          <h6>SpaceX</h6>
                          <p>3.625.912 follower</p>
                          <button
                            type="button"
                            className="rounded-pill px-2 py-1">
                            segui
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
                  <h5 className="mb-0">
                    Mostra tutte le attività <ArrowRight />
                  </h5>
                </button>
              </div>
            )}
            {/* gruppi */}
            {interessi === "gruppi" && (
              <div className="container">
                <div className="row">
                  {" "}
                  <div className="col-6">
                    {" "}
                    <div className="d-flex">
                      {" "}
                      <img
                        src="https://media.licdn.com/dms/image/v2/C4D07AQFK5LmvZWWTGg/group-logo_image-shrink_48x48/group-logo_image-shrink_48x48/0/1630999696851?e=1772467200&v=beta&t=wSrxRKYHgKD8ub_W18AuooStl8Bj1mXREfHAtzFhCm4"
                        alt="JavaScript"
                        style={{ width: "50px", height: "50px" }}
                        className="me-3 "
                      />
                      <div>
                        {" "}
                        <h6>JavaScript</h6>
                        <p>1.523.725 utenti</p>
                        <button
                          type="button"
                          className="rounded-pill px-2 py-1">
                          Iscriviti
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* scuole e università */}
            {interessi === "scuole o università" && (
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      {" "}
                      <div className="d-flex">
                        {" "}
                        <img
                          src="https://media.licdn.com/dms/image/v2/C4E0BAQHYgix-Ynux1A/company-logo_100_100/company-logo_100_100/0/1646830188798/epicodeschool_logo?e=1773273600&v=beta&t=SdEmeCWa119i6Dcu4IMK0M5NaWjqfRgHmkdjwi7OSGA"
                          alt="epicode"
                          style={{ width: "50px", height: "50px" }}
                          className="me-3 "
                        />
                        <div>
                          {" "}
                          <h6>Epicode</h6>
                          <p>21.000 follower</p>
                          <button
                            type="button"
                            className="rounded-pill px-2 py-1">
                            segui
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex">
                        {" "}
                        <img
                          src="https://media.licdn.com/dms/image/v2/C4D0BAQHsVNzsGGD_DQ/company-logo_100_100/company-logo_100_100/0/1635855306390/universit_degli_studi_di_udine_logo?e=1773273600&v=beta&t=TUWk0bI03xHtSYK6VmTQc4pSIFNMwH595Y-BL8mYsP4"
                          alt="università"
                          style={{ width: "50px", height: "50px" }}
                          className="me-3 "
                        />
                        <div>
                          {" "}
                          <h6>Università degli Studi di Udine</h6>
                          <p>60.000 follower</p>
                          <button
                            type="button"
                            className="rounded-pill px-2 py-1">
                            segui
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
                  <h5 className="mb-0">
                    Mostra tutte le attività <ArrowRight />
                  </h5>
                </button>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileFrontBanner;
