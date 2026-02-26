import { Button, Image } from "react-bootstrap";
import { CardImage, PlayBtnFill, CardText } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const NewPostSection = function (props) {
  const currentImg = useSelector((state) => state.user.user.image);
  console.log("SONO CURRENT IMG" + currentImg);

  return (
    <div className=" p-3 rounded border border-black border-opacity-10 w-100 shadow-sm">
      <div className=" d-flex gap-3 align-items-center">
        <Image
          roundedCircle
          src={currentImg}
          style={{
            width: "70px",
            height: "70px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        ></Image>
        <Button
          variant="light"
          className=" rounded-pill border border-1 border-black border-opacity-50 w-100 fw-bold fs-5 py-2 text-start px-4"
          onClick={props.onOpen}
        >
          Crea un post
        </Button>
      </div>

      <div className=" mt-3 px-2 px-md-5 d-flex justify-content-between  align-items-center gap-3">
        <Button
          variant="light"
          className="mb-0 fw-bold d-flex align-items-center gap-1 gap-md-2 flex-fill"
        >
          <PlayBtnFill className=" text-success" size={30} /> Video
        </Button>
        <Button
          variant="light"
          className="mb-0 fw-bold d-flex align-items-center gap-1 gap-md-2 flex-fill"
        >
          <CardImage className=" text-primary" size={30} /> Foto
        </Button>
        <Button
          variant="light"
          className="mb-0 fw-bold d-flex align-items-center gap-1 gap-md-2 flex-fill"
        >
          <CardText className=" text-danger" size={30} /> Scrivi un articolo
        </Button>
      </div>
    </div>
  );
};

export default NewPostSection;
