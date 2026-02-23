import { Button, Image } from "react-bootstrap";
import { Diamond, Pen, Plus } from "react-bootstrap-icons";

const ExperiencesBanner = function () {
  return (
    <div className=" p-3 rounded border border-black border-opacity-10">
      {/* Intestazione sezione */}
      <div className=" d-flex justify-content-between align-items-center mb-2">
        <h3>Formazione</h3>
        <div className=" d-flex gap-3">
          <Button variant="light">
            <Plus size={25}></Plus>
          </Button>
          <Button variant="light">
            <Pen size={20}></Pen>
          </Button>
        </div>
      </div>
      {/* Fine intestazione */}

      {/* Card esperienza */}
      <div className=" d-flex gap-3 mt-3">
        <Image src="https://placecats.com/100/100" style={{ maxHeight: "75px" }}></Image>
        <div>
          {/* Compagnia */}
          <h4>Epicode srl</h4>
          {/* Ruolo */}
          <h6 className=" fw-light">Fullstack Developer Student</h6>

          {/* startDate + endDate */}
          {/* nel linkedin originale viene specificata anche la durata. Ma non è un dato che restituisce l'API
            Dovremmo calcolarlo noi da startDate ed endDate */}
          <h6 className=" fw-light text-muted mb-4" style={{ fontSize: "0.8rem" }}>
            <span>November 2025</span> - <span>May 2026</span> <span>&bull; 6 months</span>
          </h6>

          {/* Descrizione */}
          <p className=" text-muted">Corso Fullstack developer full time con Stefano Casasola.</p>

          {/* Competenze */}
          <div className="mb-2 d-flex align-items-center">
            <Diamond className="me-2" size={12} />
            <p className="mb-0 fw-bold" style={{ fontSize: "0.8rem" }}>
              Html, Css, JS, React + 5 competenze
            </p>
          </div>
        </div>
      </div>
      {/* Fine Card esperienza */}
      <hr style={{ opacity: "0.1" }} />

      {/* Card esperienza */}
      <div className=" d-flex gap-3 mt-3">
        <Image src="https://placecats.com/200/200" style={{ maxHeight: "75px" }}></Image>
        <div>
          {/* Compagnia */}
          <h4>Pizzeria Gino</h4>
          {/* Ruolo */}
          <h6 className=" fw-light">Infornatore di pizze</h6>

          {/* startDate + endDate */}
          {/* nel linkedin originale viene specificata anche la durata. Ma non è un dato che restituisce l'API
            Dovremmo calcolarlo noi da startDate ed endDate */}
          <h6 className=" fw-light text-muted mb-4" style={{ fontSize: "0.8rem" }}>
            <span>Settembre 2022</span> - <span>May 2023</span> <span>&bull; 8 months</span>
          </h6>

          {/* Descrizione */}
          <p className=" text-muted">Addetto infornamento e cottura pizze</p>

          {/* Competenze */}
          <div className="mb-2 d-flex align-items-center">
            <Diamond className="me-2" size={12} />
            <p className="mb-0 fw-bold" style={{ fontSize: "0.8rem" }}>
              Cottura pizza, aggiungere legna, maestria con la pala + 1 competenza
            </p>
          </div>
        </div>
      </div>
      {/* Fine Card esperienza */}

      <hr style={{ opacity: "0.1" }} />

      {/* Card esperienza */}
      <div className=" d-flex gap-3 mt-3">
        <Image src="https://placecats.com/400/400" style={{ maxHeight: "75px" }}></Image>
        <div>
          {/* Compagnia */}
          <h4>Sium</h4>
          {/* Ruolo */}
          <h6 className=" fw-light">Siummatore Senior</h6>

          {/* startDate + endDate */}
          {/* nel linkedin originale viene specificata anche la durata. Ma non è un dato che restituisce l'API
            Dovremmo calcolarlo noi da startDate ed endDate */}
          <h6 className=" fw-light text-muted mb-4" style={{ fontSize: "0.8rem" }}>
            <span>November 2023</span> - <span>May 2024</span> <span>&bull; 6 months</span>
          </h6>

          {/* Descrizione */}
          <p className=" text-muted">Facevo il sium per goliardia</p>

          {/* Competenze */}
          <div className="mb-2 d-flex align-items-center">
            <Diamond className="me-2" size={12} />
            <p className="mb-0 fw-bold" style={{ fontSize: "0.8rem" }}>
              Sium + altre 5 competenze
            </p>
          </div>
        </div>
      </div>
      {/* Fine Card esperienza */}
    </div>
  );
};

export default ExperiencesBanner;
