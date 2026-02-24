import { Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import "./HomeRightSidebar.css";
import { InfoSquareFill } from "react-bootstrap-icons";
import { Alert } from "react-bootstrap";
const HomeRightSidebar = function () {
  const [showAll, setShowAll] = useState(false);
  const [info, setInfo] = useState(false);

  const news = [
    {
      titolo: "Milano Cortina ha definito un nuovo standard",
      link: "https://www.linkedin.com/news/story/milano-cortina-ha-definito-un-nuovo-standard-7024852/",
      info: "21 ore fa • 414 lettori",
    },
    {
      titolo: "Numeri e trend di Sanremo 2026",
      link: "https://www.linkedin.com/news/story/numeri-e-trend-di-sanremo-2026-8427322/",
      info: "3 ore fa • 173 lettori",
    },
    {
      titolo: "Le competenze in crescita nel 2026",
      link: "https://www.linkedin.com/news/story/le-competenze-in-crescita-nel-2026-7039572/",
      info: "3 ore fa",
    },
    {
      titolo: "Enel investirà nelle Rinnovabili",
      link: "https://www.linkedin.com/news/story/enel-investir%C3%A0-nelle-rinnovabili-7040964/",
      info: "18 ore fa",
    },
    {
      titolo: "Cosa ci lascerà Milano Cortina",
      link: "https://www.linkedin.com/news/story/cosa-ci-lascer%C3%A0-milano-cortina-7031820/",
      info: "20 ore fa • 8.674 lettori",
    },
    {
      titolo: "Via libera al decreto bollette",
      link: "https://www.linkedin.com/news/story/via-libera-al-decreto-bollette-7028612/",
      info: "5 giorni fa • 1.519 lettori",
    },
    {
      titolo: "Usa: dazi al 15% per tutti",
      link: "https://www.linkedin.com/news/story/usa-dazi-al-15-per-tutti-7038172/",
      info: "4 ore fa • 912 lettori",
    },
    {
      titolo: "Zeekr debutta in Italia",
      link: "https://www.linkedin.com/news/story/zeekr-debutta-in-italia-8416130/",
      info: "1 giorno fa • 588 lettori",
    },
    {
      titolo: "È stata l'Olimpiade delle atlete italiane",
      link: "https://www.linkedin.com/news/story/%C3%A8-stata-lolimpiade-delle-atlete-italiane-7030412/",
      info: "1 giorno fa • 677 lettori",
    },
  ];

  const visibleNews = showAll ? news : news.slice(0, 5);

  return (
    <div className="px-3 ">
      <Row>
        <Col lg="2">
          <div className=" position-relative ">
            {" "}
            <h3>LinkedIn Notizie</h3>
            <InfoSquareFill
              className="position-absolute pointer"
              style={{
                // left: "290px",
                right: "8px",
                top: "8px",
              }}
              onClick={() => setInfo(true)}
            />
            {/* div per alert */}
            <div>
              {info === true && (
                <div
                  className="position-absolute"
                  style={{
                    // left: "290px",
                    right: "30px",
                    top: "-1px",
                  }}>
                  <Alert
                    onClose={() => setInfo(false)}
                    dismissible
                    className="py-1">
                    <p className="m-0">
                      Queste sono le principali notizie e conversazioni del
                      giorno. Scopri come vengono selezionate.
                    </p>
                  </Alert>
                </div>
              )}
            </div>
            <h5 className="text-secondary">Storie principali</h5>
            <ul className="p-0">
              {visibleNews.map((item, index) => (
                <li key={index} className="glow-btn list-unstyled mb-2">
                  <a href={item.link}>
                    <div>
                      <h5 className="text-truncate m-0 fw-semibold">
                        {item.titolo}
                      </h5>
                    </div>
                    <span>{item.info}</span>
                  </a>
                </li>
              ))}
            </ul>
            {/* tasto mostra altro */}
            {news.length > 5 && (
              <Button
                variant="link"
                className="p-0 text-dark fw-semibold"
                onClick={() => setShowAll(!showAll)}>
                {showAll ? "Mostra meno ▲" : "Mostra altro ▼"}
              </Button>
            )}
          </div>

          {/* div immagine */}
          <div>
            <a href="https://www.linkedin.com/jobs/">
              <img
                src="https://media.licdn.com/media/AAYAAQTPAAgAAQAAAAAAADBJg6kiYYJxTUOBq1MuLPcNcQ.png"
                alt="linke"
                className="img-fluid rounded-4 pointer mt-3 "
              />
            </a>
          </div>
          {/* mini footer */}
          <div
            id="miniFooter"
            className="d-flex flex-wrap  justify-content-center mt-2">
            <a href="#" className="me-3 ">
              informazioni
            </a>
            <a href="#" className="me-3">
              Accessibilità
            </a>
            <a href="#" className="me-3">
              Centro assistenza{" "}
            </a>
            <a href="#" className="me-3">
              Privacy e condizioni ▼
            </a>
            <a href="#" className="me-3">
              Opzioni per gli annunci pubblicitari
            </a>
            <a href="#" className="me-3">
              Pubblicità
            </a>
            <a href="#" className="me-3">
              Servizi alle aziende ▼
            </a>
            <a href="#" className="me-3">
              Scarica l'app Linkedin
            </a>
            <a href="#" className="me-3">
              Altro
            </a>

            <div className="d-flex justify-content-center mt-3">
              {" "}
              <h6 style={{ color: "#0a66c2", fontWeight: "bold" }}>
                Linked
                <span
                  style={{
                    backgroundColor: "#0a66c2",
                    color: "#fff",
                    padding: "0 4px",
                    borderRadius: "3px",
                  }}>
                  in
                </span>
              </h6>
              <h6 className="ms-1"> LinkedIn Corporation © 2026</h6>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeRightSidebar;
