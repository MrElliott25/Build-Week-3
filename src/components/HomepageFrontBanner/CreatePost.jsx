import { useState } from "react";
import { Button, Image, Modal, Form } from "react-bootstrap";
import { CardImage, EmojiSmile, CalendarEvent, Gear, Plus, Clock } from "react-bootstrap-icons";

const CreatePost = function (props) {
  const ImagePH = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
  const [text, setText] = useState("");

  const userCanPublish = text.trim().length > 0;

  const handleClose = function () {
    props.onClose();
    setText("");
  };

  const handlePublish = function () {
    handleClose();
  };

  return (
    <Modal show={props.show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton className="border-0">
        <div className="d-flex align-items-center gap-3">
          <Image roundedCircle src={ImagePH} className=" object-fit-cover" style={{ height: "48px" }} />
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-2">
              <p className="mb-0 fw-bold">Nome Utente</p>
            </div>
            <span className="text-muted" style={{ fontSize: "0.8rem" }}>
              Pubblica: Chiunque
            </span>
          </div>
        </div>
      </Modal.Header>

      <Modal.Body className="pt-3">
        <Form.Control
          as="textarea"
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Di cosa vorresti parlare?"
          className="border-0 shadow-none fs-5"
        />
        <div className="d-flex align-items-center gap-3 mt-3">
          <Button variant="light" className="rounded-circle p-2">
            <EmojiSmile size={20} />
          </Button>
          <Button variant="light" className="rounded-circle p-2">
            <CardImage size={20} />
          </Button>
          <Button variant="light" className="rounded-circle p-2">
            <CalendarEvent size={20} />
          </Button>
          <Button variant="light" className="rounded-circle p-2">
            <Gear size={20} />
          </Button>
          <Button variant="light" className="rounded-circle p-2">
            <Plus size={20} />
          </Button>
        </div>
      </Modal.Body>

      <hr style={{ opacity: "0.1" }} />

      <Modal.Footer className="border-0 d-flex justify-content-end align-items-center">
        <div className="px-2">
          <Clock className="text-muted" />
          <Button variant={userCanPublish ? "primary" : "secondary"} disabled={!userCanPublish} className="rounded-pill px-4 ms-2" onClick={handlePublish}>
            Pubblica
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePost;
