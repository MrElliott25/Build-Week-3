import { Image, Button } from "react-bootstrap";
import { Pen, Trash3 } from "react-bootstrap-icons";
import { deleteExperience } from "../utils/fetch";
import { useLocation } from "react-router-dom";

const SingleExperience = (props) => {
  const location = useLocation();

  //Funzione per calcolare la durata dando startDate e endDate
  const calculateDuration = (start, end) => {
    const [startYear, startMonth] = start.split("-").map(Number);

    // Se end è null → lavoro attuale
    const endDate = end ? end : new Date().toISOString().slice(0, 7);
    const [endYear, endMonth] = endDate.split("-").map(Number);

    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) return `${months} mesi`;
    if (months === 0) return `${years} anni`;

    return `${years} anni e ${months} mesi`;
  };

  return (
    <div className=" d-flex gap-3 mt-3">
      <Image src="https://placecats.com/100/100" style={{ maxHeight: "75px" }}></Image>
      <div className="flex-grow-1">
        {/* Ruolo */}
        <div className="d-flex justify-content-between w-100">
          <div className="flex-grow-1">
            <h4>{props.role}</h4>
          </div>
          <div>
            <Button
              variant="light"
              className={location.pathname === "/profile/me" ? "me-2" : "d-none"}
              onClick={() => {
                props.setID(props.id);
                props.rehydrate();
              }}
            >
              <Pen size={20}></Pen>
            </Button>
            <Button
              className={location.pathname === "/profile/me" ? "me-2" : "d-none"}
              variant="danger"
              onClick={async () => {
                if (window.confirm("Sei sicuro di voler eliminare questa esperienza?")) {
                  await deleteExperience(props.API + props.id);
                  props.loadData();
                }
              }}
            >
              <Trash3 size={20}></Trash3>
            </Button>
          </div>
        </div>
        {/* Compagnia */}
        <h6 className="fw-light">{props.company}</h6>

        {/* startDate + endDate */}
        <h6 className=" fw-light text-muted" style={{ fontSize: "0.9rem" }}>
          <span>{props.startDate.slice(0, 7)}</span> -{" "}
          <span>{props.endDate ? props.endDate.slice(0, 7) : "Presente"}</span>{" "}
          <span>
            &bull;{" "}
            {calculateDuration(
              props.startDate.slice(0, 7),
              props.endDate ? props.endDate.slice(0, 7) : null,
            )}
          </span>
        </h6>
        {/* Area */}
        <h6 className=" fw-light text-muted mb-4" style={{ fontSize: "0.9rem" }}>
          {props.area}
        </h6>

        {/* Descrizione */}
        <p className=" text-muted">{props.description}</p>
      </div>
    </div>
  );
};

export default SingleExperience;
