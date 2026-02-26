import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Pencil, Check2, X, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { modifyComment } from "../../utils/fetch";
import { modifyCommentAction } from "../../redux/actions/commentActions";
import { deleteComment } from "../../utils/fetch";
import { deleteCommentAction } from "../../redux/actions/commentActions";

const SingleComment = function (props) {
  const dispatch = useDispatch();

  const userEmail = useSelector((state) => state.user.user.email);

  const isMyComment = props.comment.author === userEmail;

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(props.comment.comment || "");
  const [rate, setRate] = useState(props.comment.rate || 5);
  const [isSaving, setIsSaving] = useState(false);

  const comment = props.comment;
  const createdDate = comment && comment.createdAt ? comment.createdAt.slice(0, 10) : "—";

  const openEdit = function () {
    setText(props.comment.comment || "");
    setRate(props.comment.rate || 5);
    setIsEditing(true);
  };

  const closeEdit = function () {
    setIsEditing(false);
    setIsSaving(false);
    setText(props.comment.comment || "");
    setRate(props.comment.rate || 5);
  };

  const UserCanSave = text.trim().length > 0;

  const handleSave = function () {
    if (!isMyComment) return;
    if (!UserCanSave || isSaving) return;

    setIsSaving(true);

    const payload = {
      comment: text.trim(),
      rate: Number(rate),
      elementId: props.comment.elementId,
    };

    modifyComment(props.comment._id, payload)
      .then((editedComment) => {
        dispatch(modifyCommentAction(editedComment));
        setIsSaving(false);
        setIsEditing(false);
      })
      .catch((err) => {
        alert("Errore: " + err.message);
        setIsSaving(false);
      });
  };

  const handleDelete = function () {
    if (!isMyComment) return;

    deleteComment(props.comment._id)
      .then(() => {
        dispatch(deleteCommentAction(props.comment._id));
      })
      .catch((err) => {
        alert("Errore: " + err.message);
      });
  };

  return (
    <div className="py-2 border-top">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <p className="mb-0 fw-bold" style={{ fontSize: "0.95rem" }}>
            {props.comment.author}
          </p>
          <p className="mb-2 text-muted" style={{ fontSize: "0.8rem" }}>
            {createdDate}
          </p>
        </div>

        {isMyComment && (
          <div className="d-flex gap-2">
            {!isEditing ? (
              <Button variant="light" size="sm" className="p-1" onClick={openEdit}>
                <Pencil />
              </Button>
            ) : (
              <>
                <Button variant="light" size="sm" className="p-1" onClick={handleSave} disabled={!UserCanSave || isSaving}>
                  <Check2 />
                </Button>
                <Button variant="light" size="sm" className="p-1" onClick={closeEdit} disabled={isSaving}>
                  <X />
                </Button>
              </>
            )}

            {isMyComment && (
              <Button variant="light" size="sm" className="p-1" onClick={handleDelete}>
                <Trash />
              </Button>
            )}
          </div>
        )}
      </div>

      {!isEditing ? (
        <p className="mb-0" style={{ fontSize: "0.95rem" }}>
          {props.comment.comment}
        </p>
      ) : (
        <div>
          <Form.Control className="mb-2" type="text" value={text} onChange={(e) => setText(e.target.value)} disabled={isSaving} />
          {isSaving && <p className="text-muted mt-2 mb-0">Salvando...</p>}
        </div>
      )}
    </div>
  );
};

export default SingleComment;
