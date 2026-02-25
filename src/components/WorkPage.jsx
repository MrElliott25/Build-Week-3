import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import Carousel from "react-bootstrap/Carousel";
import "./WorkPage.css";
import {
  ArrowLeftCircleFill,
  ArrowRightCircleFill,
  X,
} from "react-bootstrap-icons";

const WorkPage = function () {
  const [categoria, setCategoria] = useState("candidatura semplice");

  const [data, setData] = useState({});
  const URL = "https://strive-benchmark.herokuapp.com/api/jobs";
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTlkYzZkNGI1NTgyMDAwMTU4YzM0NDYiLCJpYXQiOjE3NzE5NDc3MzIsImV4cCI6MTc3MzE1NzMzMn0.aEODpXiz7ht7RC-mDhwkOwwG6ecpXfZRdXooHLoEs4I";
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(URL, {
          headers: {
            Authorization: token,
          },
        });
        if (!response.ok) {
          throw new Error("errore nel recupero dati");
        }
        const dato = await response.json();
        console.log("dati arrivati", dato);
        setData(dato);
      } catch (err) {
        console.log("errore", err);
      }
    };
    fetchData();
  }, []);
  //   console.log("data", data.data);
  console.log("data", data.data);

  //per il caroseelo
  const [slideCarosello, setSlideCarosello] = useState(0);

  const seleziono = (selezionato) => {
    setSlideCarosello(selezionato);
  };

  const prossimaSlide = () => {
    setSlideCarosello(slideCarosello === 2 ? 0 : slideCarosello + 1);
  };

  const passataSlide = () => {
    setSlideCarosello(slideCarosello === 0 ? 2 : slideCarosello - 1);
  };

  return (
    <>
      <Container>
        {/* principali offerte di lavoro  */}
        <div className="mb-3 ">
          <h3 className="m-0">Le principali offerte di lavoro per te</h3>
          <p className=" m-0 mb-4 text-secondary">
            in base al tuo profilo,alle tue preferenza e ad attività come
            candidature, richieste e salvataggi
          </p>
          {data?.data?.slice(1, 4).map((res) => (
            <a href={res.url} key={res._id}>
              {" "}
              <div className="d-flex justify-content-between ">
                <div>
                  <h5 className="m-0 text-primary">{res.title}</h5>
                  <p className="m-0 mb-3">
                    {res.company_name} • {res.candidate_required_location}
                  </p>
                </div>
                <div>
                  <X size={30} className="me-3" />
                </div>
              </div>
              <hr />
            </a>
          ))}
          <button
            type="button"
            className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
            <h5 className="mb-0">
              Mostra tutto <ArrowRight />
            </h5>
          </button>
        </div>

        <div className="mb-3">
          <Row>
            <div className="d-flex justify-content-between">
              <Col xs={6}>
                <div>
                  <h3 className="m-0">
                    Esplora le aziende che assumono per le tue competenze
                  </h3>
                  <p className="text-secondary m-0">Promossa</p>
                </div>
              </Col>
              {/* bottoni del carosello */}
              <Col xs={6} className="text-end">
                {" "}
                <div>
                  <button onClick={passataSlide} className="border-0 bg-white">
                    <ArrowLeftCircleFill size={30} />
                  </button>
                  <button onClick={prossimaSlide} className="border-0 bg-white">
                    <ArrowRightCircleFill size={30} />
                  </button>
                </div>
              </Col>
            </div>
          </Row>
          {/* CAFROSSELO */}
          <Carousel
            data-bs-theme="dark"
            controls={false}
            indicators={false}
            activeIndex={slideCarosello}
            onSelect={seleziono}>
            <Carousel.Item className="text-center">
              <Row className="justify"></Row>
              <div className="d-flex">
                {data?.data?.slice(1802, 1804).map((res) => (
                  <a href={res.url} key={res._id}>
                    {" "}
                    <div className=" border border-dark-subtle p-3 mx-2 my-2">
                      <h5>{res.title}</h5>
                      <p>
                        {res.company_name} • {res.candidate_required_location} •{" "}
                        {res.salary}
                      </p>
                      <section>
                        <div
                          className="text-bg-light mx-2 p-1"
                          // dangerouslySetInnerHTML è come un innerhtml il substring invece serve per dirli quanti caratteri mostrare
                          dangerouslySetInnerHTML={{
                            __html: res.description.substring(0, 200) + "...",
                          }}></div>
                      </section>
                    </div>
                  </a>
                ))}
              </div>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <div className="d-flex">
                {data?.data?.slice(1802, 1804).map((res) => (
                  <a href={res.url} key={res._id}>
                    {" "}
                    <div className=" border border-dark-subtle p-3 mx-2 my-2">
                      <h5>{res.title}</h5>
                      <p>
                        {res.company_name} • {res.candidate_required_location} •{" "}
                        {res.salary}
                      </p>
                      <section>
                        <div
                          className="text-bg-light mx-2 p-1"
                          // dangerouslySetInnerHTML è come un innerhtml il substring invece serve per dirli quanti caratteri mostrare
                          dangerouslySetInnerHTML={{
                            __html: res.description.substring(0, 200) + "...",
                          }}></div>
                      </section>
                    </div>
                  </a>
                ))}
              </div>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <div className="d-flex">
                {data?.data?.slice(1802, 1804).map((res) => (
                  <a href={res.url} key={res._id}>
                    {" "}
                    <div className=" border border-dark-subtle p-3 mx-2 my-2">
                      <h5>{res.title}</h5>
                      <p>
                        {res.company_name} • {res.candidate_required_location} •{" "}
                        {res.salary}
                      </p>
                      <section>
                        <div
                          className="text-bg-light mx-2 p-1"
                          // dangerouslySetInnerHTML è come un innerhtml il substring invece serve per dirli quanti caratteri mostrare
                          dangerouslySetInnerHTML={{
                            __html: res.description.substring(0, 200) + "...",
                          }}></div>
                      </section>
                    </div>
                  </a>
                ))}
              </div>
            </Carousel.Item>
          </Carousel>
          {/* FINE CAROSELLO */}
        </div>
        <div>
          <h3 className="m-0 mb-2 mt-2">Esplora le categorie di offerta</h3>
          <Row>
            <Col xs="auto" sm="auto" md="auto" className="p-0">
              <button
                type="button"
                className={` py-2 glow-btn me-3 bg-bianco mb-2 ${categoria === "candidatura semplice" ? "bg-selezionato" : "bg-non-selezionato"}`}
                onClick={() => setCategoria("candidatura semplice")}>
                <img
                  src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAGP4rUyqs0gcQHyq-AxUoT9SVg.png"
                  alt="#"
                  style={{ width: 25 }}
                  className="me-2"
                />
                <h4 className="d-none d-sm-inline">candidatura semplice</h4>
              </button>
            </Col>

            <Col xs="auto" sm="auto" md="auto" className="p-0">
              <button
                type="button"
                className={` py-2 glow-btn me-3 bg-bianco mb-2 ${categoria === "retail" ? "bg-selezionato" : "bg-non-selezionato"}`}
                onClick={() => setCategoria("retail")}>
                <img
                  src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAI8FibGTSwgpRxCSMjxJ6gotbQ.png"
                  alt="#"
                  style={{ width: 25 }}
                  className="me-2"
                />
                <h4 className="d-none d-sm-inline">retail</h4>
              </button>
            </Col>

            <Col xs="auto" sm="auto" md="auto" className="p-0">
              <button
                type="button"
                className={` py-2 glow-btn me-3 bg-bianco mb-2 ${categoria === "governo" ? "bg-selezionato" : "bg-non-selezionato"}`}
                onClick={() => setCategoria("governo")}>
                <img
                  src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAGAKLI2IJDgISPusRsTv_gTgdw.png"
                  alt="#"
                  style={{ width: 25 }}
                  className="me-2"
                />
                <h4 className="d-none d-sm-inline">governo</h4>
              </button>
            </Col>

            <Col xs="auto" sm="auto" md="auto" className="p-0">
              <button
                type="button"
                className={` py-2 glow-btn me-3 bg-bianco mb-2 ${categoria === "altro" ? "bg-selezionato" : "bg-non-selezionato"}`}
                onClick={() => setCategoria("altro")}>
                <img
                  src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAI5SAN5C18a0RQqGDuQefxjN0Q.png"
                  alt="#"
                  style={{ width: 25 }}
                  className="me-2"
                />
                <h4 className="d-none d-sm-inline">altro</h4>
              </button>
            </Col>
          </Row>
          <div>
            {/* per candidatura semplice */}
            {categoria === "candidatura semplice" && (
              <div>
                {data?.data?.slice(10, 12).map((res) => (
                  <a href={res.url} key={res._id}>
                    {" "}
                    <div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5 className="m-0 text-primary">{res.title}</h5>
                          <p className="m-0 mb-3">
                            {res.company_name} •{" "}
                            {res.candidate_required_location}
                          </p>
                        </div>
                        <div>
                          {" "}
                          <X size={30} className="me-3" />
                        </div>
                      </div>
                    </div>
                    <hr />
                  </a>
                ))}
                <button
                  type="button"
                  className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
                  <h5 className="mb-0">
                    Mostra tutto <ArrowRight />
                  </h5>
                </button>
              </div>
            )}
            {/* per retail */}
            {categoria === "retail" && (
              <div>
                {" "}
                {data?.data?.slice(20, 22).map((res) => (
                  <a href={res.url} key={res._id}>
                    {" "}
                    <div className="d-flex justify-content-between">
                      {" "}
                      <div>
                        <h5 className="m-0 text-primary">{res.title}</h5>
                        <p className="m-0 mb-3">
                          {res.company_name} • {res.candidate_required_location}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <X size={30} className="me-3" />
                      </div>
                    </div>
                    <hr />
                  </a>
                ))}
                <button
                  type="button"
                  className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
                  <h5 className="mb-0">
                    Mostra tutto <ArrowRight />
                  </h5>
                </button>
              </div>
            )}
            {/* per governo */}
            {categoria === "governo" && (
              <div>
                {" "}
                {data?.data?.slice(100, 102).map((res) => (
                  <a href={res.url} key={res._id}>
                    {" "}
                    <div className="d-flex justify-content-between">
                      {" "}
                      <div>
                        <h5 className="m-0 text-primary">{res.title}</h5>
                        <p className="m-0 mb-3">
                          {res.company_name} • {res.candidate_required_location}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <X size={30} className="me-3" />
                      </div>
                    </div>
                    <hr />
                  </a>
                ))}
                <button
                  type="button"
                  className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
                  <h5 className="mb-0">
                    Mostra tutto <ArrowRight />
                  </h5>
                </button>
              </div>
            )}
            {/* per altro */}
            {categoria === "altro" && (
              <div className="per-bottoni">
                {" "}
                <Row>
                  <Col xs={12} sm={4}>
                    <button
                      type="button"
                      className="py-3 glow-btn w-100 text-start ps-4 m-1 bg-bianco rounded">
                      <img
                        src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAHj3_481n-vLT6evvxCMG5d7FA.png"
                        alt="#"
                        style={{ width: "30px" }}
                      />{" "}
                      IT
                    </button>
                  </Col>
                  <Col xs={12} sm={4}>
                    <button
                      type="button"
                      className="py-3 glow-btn w-100 text-start ps-4 m-1 bg-bianco rounded">
                      <img
                        src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAALxe-13i08oISNC0LL0E8rOjbQ.png"
                        alt="#"
                        style={{ width: "30px" }}
                      />{" "}
                      Ibrido
                    </button>
                  </Col>
                  <Col xs={12} sm={4}>
                    <button
                      type="button"
                      className="py-3 glow-btn w-100 text-start ps-4 m-1 bg-bianco rounded">
                      <img
                        src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAMjG8APRYp3UQiKGJ2V0tTioaA.png"
                        alt="#"
                        style={{ width: "30px" }}
                      />{" "}
                      Part time
                    </button>
                  </Col>
                  <Col xs={12} sm={4}>
                    <button
                      type="button"
                      className="py-3 glow-btn w-100 text-start ps-4 m-1 bg-bianco rounded">
                      <img
                        src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAACmG4H52GI2ESsex3aFZtqIX4g.png"
                        alt="#"
                        style={{ width: "30px" }}
                      />{" "}
                      Risorse umane
                    </button>
                  </Col>
                  <Col xs={12} sm={4}>
                    <button
                      type="button"
                      className=" py-3 glow-btn w-100 text-start ps-4 m-1 bg-bianco rounded">
                      <img
                        src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAHXcii7CMsZHRx2iKLSkZfEc2g.png"
                        alt="#"
                        style={{ width: "30px" }}
                      />{" "}
                      Alberghiero
                    </button>
                  </Col>
                  <Col xs={12} sm={4}>
                    <button
                      type="button"
                      className=" py-3 glow-btn w-100 text-start ps-4 m-1 bg-bianco rounded">
                      <img
                        src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAALXOZ_PEtcJLSEqdUt9ZET7yeA.png"
                        alt="#"
                        style={{ width: "30px" }}
                      />{" "}
                      Industria manifetturiera
                    </button>
                  </Col>
                  <Col xs={12} sm={4}>
                    <button
                      type="button"
                      className=" py-3 glow-btn w-100 text-start ps-4 m-1 bg-bianco rounded">
                      <img
                        src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAHf1zzQvjnhUT2iWPR8DpLQGug.png"
                        alt="#"
                        style={{ width: "30px" }}
                      />{" "}
                      sanità
                    </button>
                  </Col>
                  <Col xs={12} sm={4}>
                    <button
                      type="button"
                      className=" py-3 glow-btn w-100 text-start ps-4 m-1 bg-bianco rounded">
                      <img
                        src="https://media.licdn.com/media/AAYAAgQJAAgAAQAAAAAAAGNJsOlMWB2JQiytJ2RarhhsXQ.png"
                        alt="#"
                        style={{ width: "30px" }}
                      />{" "}
                      Impatto sociale
                    </button>
                  </Col>
                  <Col xs={12} sm={4}>
                    <button
                      type="button"
                      className=" py-3 glow-btn w-100 text-start ps-4 m-1 bg-bianco rounded">
                      <img
                        src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAAH4mGmKaarHCScSOYLNJ_DS6zw.png"
                        alt="#"
                        style={{ width: "30px" }}
                      />{" "}
                      Formazione
                    </button>
                  </Col>
                </Row>
                <button
                  type="button"
                  className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
                  <h5 className="mb-0">
                    Mostra tutto <ArrowRight />
                  </h5>
                </button>
              </div>
            )}
          </div>
        </div>
        {/* altre offerte di lavoro */}
        <div>
          <h3 className="m-0">Altre offerte di lavoro per te</h3>
          <p className="text-secondary m-0 mb-4">
            In base al tuo profilo, alle tue preferenze e ad attività come
            candidature, ricerche e salvataggi
          </p>

          {data?.data?.slice(500, 520).map((res) => (
            <a href={res.url} key={res._id}>
              {" "}
              <div className="d-flex justify-content-between">
                <div>
                  <h5 className="m-0 text-primary">{res.title}</h5>
                  <p className="m-0 mb-3">
                    {res.company_name} • {res.candidate_required_location}
                  </p>
                </div>
                <div>
                  {" "}
                  <X size={30} className="me-3" />
                </div>
              </div>
              <hr />
            </a>
          ))}
          <button
            type="button"
            className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
            <h5 className="mb-0">
              Mostra tutto <ArrowRight />
            </h5>
          </button>
        </div>
      </Container>
    </>
  );
};

export default WorkPage;
