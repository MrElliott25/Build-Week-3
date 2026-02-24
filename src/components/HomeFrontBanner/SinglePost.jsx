import { Button, Container, Image } from "react-bootstrap";
import { ArrowRepeat, ChatText, HandThumbsUp, PersonFillAdd, Send } from "react-bootstrap-icons";

const SinglePost = function () {
  const ImagePH = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
  return (
    <div className=" p-3 rounded border border-black border-opacity-10 mt-5 w-100">
      {/* Strip Utente */}
      <div className=" d-flex gap-3">
        <Image roundedCircle src={ImagePH} style={{ maxHeight: "60px" }} />
        <div className=" d-flex flex-column flex-wrap">
          <h4 className="mb-0">Nome Utente</h4>
          <p className="mb-0 text-muted text-truncate" style={{ fontSize: "0.8rem" }}>
            Bio/Ruolo Utente
          </p>
        </div>
        <div className=" ms-auto">
          <Button variant="light" className=" d-flex gap-2 text-primary fw-bold">
            <PersonFillAdd size={20} /> Collegati
          </Button>
        </div>
      </div>
      {/* Fine Strip Utente */}

      {/* Post Text */}
      <div className=" mt-3 px-2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt officiis sequi praesentium sit odit quia delectus, harum quis excepturi totam!
          Accusantium ipsam commodi omnis vel maxime eaque, mollitia accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla sunt officiis
          sequi praesentium sit odit quia delectus, harum quis excepturi totam! Accusantium ipsam commodi omnis vel maxime eaque, mollitia accusamus!
        </p>
      </div>
      <hr style={{ opacity: "0.1" }} />

      <div className=" d-flex justify-content-evenly">
        <Button variant="light" className=" d-flex flex-column align-items-center">
          <HandThumbsUp />
          <p className=" mb-0"> Consiglia</p>
        </Button>
        <Button variant="light" className=" d-flex flex-column align-items-center">
          <ChatText />
          <p className=" mb-0"> Commenta</p>
        </Button>
        <Button variant="light" className=" d-flex flex-column align-items-center">
          <ArrowRepeat />
          <p className=" mb-0"> Diffondi il post </p>
        </Button>
        <Button variant="light" className=" d-flex flex-column align-items-center">
          <Send />
          <p className=" mb-0">Invia</p>
        </Button>
      </div>
    </div>
  );
};

export default SinglePost;
