import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

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
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div>
              <h3 className="m-0">Le principali offerte di lavoro per te</h3>
              <p className="text-secondary m-0 mb-4">
                in base al tuo profilo,alle tue preferenza e ad attività come
                candidature, richieste e salvataggi
              </p>
              <div className="d-flex">
                {" "}
                <img
                  src="https://media.licdn.com/dms/image/v2/C560BAQE65U97Uspanw/company-logo_100_100/company-logo_100_100/0/1631392452541?e=1773273600&v=beta&t=1or1T92vO5aDwvd1S9Z_27WA2mwQ89rXXP6678SntKk"
                  alt="JavaScript"
                  style={{ width: "50px", height: "50px" }}
                  className="me-3 "
                />
                <div>
                  {" "}
                  <h6>
                    COLLABORATORE DI CENTRO ODONTOIATRICO IN STAGE - PESCHIERA
                    BORROMEO (MI)
                  </h6>
                  <p>blalbalbalbalbalblab</p>
                  <hr />
                </div>
              </div>
              <button
                type="button"
                className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
                <h5 className="mb-0">
                  Mostra tutto <ArrowRight />
                </h5>
              </button>

              {/* {data?.data?.map((res) => (
                <div key={res._id}>
                  <h5 className="m-0">{res.title}</h5>
                  <p className="m-0 mb-3">
                    {res.company_name} {res.candidate_required_location}
                  </p>
                </div>
              ))} */}
            </div>
            <div>
              <h3 className="m-0">
                Esplora le aziende che assumono per le tue competenze
              </h3>
              <p className="text-secondary m-0">Promossa</p>
            </div>
            <div>
              <h3 className="m-0">Esplora le categorie di offerta</h3>
              <button
                type="button"
                className="border-0 py-2 glow-btn m-1 bg-bianco mb-2 "
                onClick={() => setCategoria("candidatura semplice")}>
                <h5 className="m-0">candidatura semplice</h5>
              </button>
              <button
                type="button"
                className="border-0 py-2 glow-btn m-1 bg-bianco mb-2 "
                onClick={() => setCategoria("retail")}>
                <h5 className="m-0">retail</h5>
              </button>
              <button
                type="button"
                className="border-0 py-2 glow-btn m-1 bg-bianco mb-2 "
                onClick={() => setCategoria("governo")}>
                <h5 className="m-0">governo</h5>
              </button>
              <button
                type="button"
                className="border-0 py-2 glow-btn m-1 bg-bianco mb-2 "
                onClick={() => setCategoria("altro")}>
                <h5 className="m-0">altro</h5>
              </button>
              <div>
                {/* per candidatura semplice */}
                {categoria === "candidatura semplice" && (
                  <div>
                    {" "}
                    <h3>ciao</h3>
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
                    <h3>retail</h3>
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
                    <h3>governo</h3>
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
                  <div>
                    {" "}
                    <h3>altro</h3>
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
              <p className="text-secondary m-0">
                In base al tuo profilo, alle tue preferenze e ad attività come
                candidature, ricerche e salvataggi
              </p>
              <button
                type="button"
                className="w-100 border-0 py-2 glow-btn m-1 bg-bianco mb-2 ">
                <h5 className="mb-0">
                  Mostra tutto <ArrowRight />
                </h5>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WorkPage;
