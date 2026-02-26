import { useDispatch, useSelector } from "react-redux";
import SingleComment from "./SingleComment";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { addCommentAction } from "../../redux/actions/commentActions";
import { generateComment } from "../../utils/fetch";
import { useState } from "react";

const CommentList = function (props) {
  const dispatch = useDispatch();
  const isLoading = useSelector((currentState) => currentState.comments.isLoading);
  const error = useSelector((currentState) => currentState.comments.error);

  const [text, setText] = useState("");
  const [rate, setRate] = useState(5);
  const [isSaving, setIsSaving] = useState(false);

  const userCanSend = text.trim().length > 0;

  const commentsForThisPost = props.commentsForThisPost;

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!props.postID) return;
    if (!userCanSend || isSaving) return;

    setIsSaving(true);

    const payload = {
      comment: text.trim(),
      rate: Number(rate),
      elementId: props.postID,
    };

    generateComment("POST", payload)
      .then((newComment) => {
        dispatch(addCommentAction(newComment));
        setText("");
        setRate(5);
        setIsSaving(false);
      })
      .catch((err) => {
        alert("Errore: " + err.message);
        setIsSaving(false);
      });
  };

  return (
    <div className="mt-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={1} placeholder="Aggiungi un commento" value={text} onChange={(e) => setText(e.target.value)} disabled={isSaving} />
        </Form.Group>
        <div className=" d-flex justify-content-end">
          <Button type="submit" disabled={!userCanSend || isSaving}>
            {isSaving ? "Invio..." : "Pubblica"}
          </Button>
        </div>
      </Form>

      <p className="text-muted px-2">Commenti degli utenti</p>

      {isLoading && <Spinner className="my-5" animation="grow" />}
      {error && <Alert variant="danger">{error}</Alert>}

      {commentsForThisPost.length === 0 ? (
        <p className="text-muted mb-0">Nessun commento.</p>
      ) : (
        commentsForThisPost.map((comment) => {
          return <SingleComment key={comment._id} comment={comment} />;
        })
      )}
    </div>
  );
};

export default CommentList;
