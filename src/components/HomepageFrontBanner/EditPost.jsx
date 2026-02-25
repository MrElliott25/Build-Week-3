import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { modifyPostAction } from "../../redux/actions/postsActions";
import { modifyPost } from "../../utils/postsFetch";
import { Button, Image, Modal, Form } from "react-bootstrap";
import { CardImage, EmojiSmile, CalendarEvent, Gear, Plus, Clock } from "react-bootstrap-icons";

const EditPost = function (props) {
  const dispatch = useDispatch();
  const ImagePH = "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png";
  const [text, setText] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (props.show && props.post) {
      setText(props.post.text || "");
    }
  }, [props.show, props.post]);

  const userCanPublish = text.trim().length > 0;

  const handleClose = function () {
    props.onClose();
    setText("");
    setIsSaving(false);
  };

  const handlePublish = function () {
    if (!props.post || !props.post._id) return;
    if (!userCanPublish || isSaving) return;

    setIsSaving(true);

    const payload = {
      text: text.trim(),
    };

    modifyPost(props.postsAPI, props.post._id, payload)
      .then((newPost) => {
        dispatch(modifyPostAction(newPost));
        handleClose();
      })
      .catch((err) => {
        alert("Errore:" + err.message);
        setIsSaving(false);
      });
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
          placeholder="Modifica il post..."
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
          <Button
            variant={userCanPublish ? "primary" : "secondary"}
            disabled={!userCanPublish || isSaving}
            className="rounded-pill px-4 ms-2"
            onClick={handlePublish}
          >
            {isSaving ? "Salvando..." : "Salva"}
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPost;
