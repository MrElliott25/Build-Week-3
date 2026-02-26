import { Badge } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const SingleComment = function (props) {
  const comment = props.comment;

  const createdDate = comment && comment.updatedAt ? comment.createdAt.slice(0, 10) : "—";

  return (
    <div className="p-2 border-top">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <p className="mb-0 fw-bold" style={{ fontSize: "0.95rem" }}>
            {comment && comment.author ? comment.author : "Anonymous"}
          </p>

          <p className="mb-1 text-muted" style={{ fontSize: "0.8rem" }}>
            {createdDate}
          </p>
        </div>
      </div>

      <p className="mb-0" style={{ fontSize: "0.95rem" }}>
        {comment && comment.comment ? comment.comment : ""}
      </p>
    </div>
  );
};

export default SingleComment;
