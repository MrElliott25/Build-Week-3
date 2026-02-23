import { Button, Image } from "react-bootstrap";
import { Gem, Pen, Plus } from "react-bootstrap-icons";

const ExperiencesBanner = function () {
  return (
    <div className=" p-3 rounded border border-black border-opacity-10">
      {/* Intestazione sezione */}
      <div className=" d-flex justify-content-between align-items-center">
        <h3 className="mb-0">Esperienza</h3>
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
          {/* Ruolo */}
          <h4>Fullstack Developer Student</h4>
          {/* Compagnia */}
          <h6 className=" fw-light">EPICODE</h6>

          {/* startDate + endDate */}
          {/* nel linkedin originale viene specificata anche la durata. Ma non è un dato che restituisce l'API
            Dovremmo calcolarlo noi da startDate ed endDate */}
          <h6 className=" fw-light text-muted" style={{ fontSize: "0.9rem" }}>
            <span>Nov 2025</span> - <span>May 2026</span> <span>&bull; 6 months</span>
          </h6>
          {/* Area */}
          <h6 className=" fw-light text-muted mb-4" style={{ fontSize: "0.9rem" }}>
            Roma, Italia
          </h6>

          {/* Descrizione */}
          <p className=" text-muted">Corso Fullstack developer full time con Stefano Casasola.</p>
        </div>
      </div>
      {/* Fine Card esperienza */}
      <hr style={{ opacity: "0.1" }} />

      {/* Card esperienza */}
      <div className=" d-flex gap-3 mt-3">
        <Image src="https://placecats.com/200/200" style={{ maxHeight: "75px" }}></Image>
        <div>
          {/* Ruolo */}
          <h4>Pizzaiolo</h4>
          {/* Compagnia */}
          <h6 className=" fw-light">Pizzeria Gino srl</h6>

          {/* startDate + endDate */}
          {/* nel linkedin originale viene specificata anche la durata. Ma non è un dato che restituisce l'API
            Dovremmo calcolarlo noi da startDate ed endDate */}
          <h6 className=" fw-light text-muted" style={{ fontSize: "0.9rem" }}>
            <span>Nov 2025</span> - <span>May 2026</span> <span>&bull; 6 months</span>
          </h6>
          {/* Area */}
          <h6 className=" fw-light text-muted mb-4" style={{ fontSize: "0.9rem" }}>
            Palermo, Italia
          </h6>

          {/* Descrizione */}
          <p className=" text-muted">Addetto cottura pizze e controllo qualità</p>
        </div>
      </div>
      {/* Fine Card esperienza */}
      <hr style={{ opacity: "0.1" }} />

      {/* Card esperienza */}
      <div className=" d-flex gap-3 mt-3">
        <Image src="https://placecats.com/400/400" style={{ maxHeight: "75px" }}></Image>
        <div>
          {/* Ruolo */}
          <h4>Siummatore Senior</h4>
          {/* Compagnia */}
          <h6 className=" fw-light">Sium srl</h6>

          {/* startDate + endDate */}
          {/* nel linkedin originale viene specificata anche la durata. Ma non è un dato che restituisce l'API
            Dovremmo calcolarlo noi da startDate ed endDate */}
          <h6 className=" fw-light text-muted" style={{ fontSize: "0.9rem" }}>
            <span>Nov 2025</span> - <span>May 2026</span> <span>&bull; 6 months</span>
          </h6>
          {/* Area */}
          <h6 className=" fw-light text-muted mb-4" style={{ fontSize: "0.9rem" }}>
            Madeira, Portugal
          </h6>

          {/* Descrizione */}
          <p className=" text-muted">
            Sium Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto ex explicabo laboriosam, enim ipsum assumenda at consequuntur unde
            iusto, illum provident, illo reprehenderit ducimus? Deserunt corrupti labore odio quis.
          </p>
        </div>
      </div>
      {/* Fine Card esperienza */}
    </div>
  );
};

export default ExperiencesBanner;
