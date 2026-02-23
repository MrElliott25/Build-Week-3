import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setUserAction } from "../redux/actions/actions";

const LoginComponent = () => {
  const [loginUsernameValue, setUsernameValue] = useState("");
  const [loginEmailValue, setEmailValue] = useState("");
  const dispatch = useDispatch();
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMzViMzBiYzFkZTAwMTU3N2I3YjIiLCJpYXQiOjE3NzE4NDUwNDMsImV4cCI6MTc3MzA1NDY0M30.xDkQhPF99LMH1QQLGZm1CfXdTXEBdv9eNrDMotGM09c";
  const profileAPI = "https://striveschool-api.herokuapp.com/api/profile/";

  const handleLogin = () => {
    fetch(profileAPI, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("Errore nella pesca dei dati");
      })
      .then((data) => {
        const loggedUser = data.find(
          (user) =>
            user.email === loginEmailValue.trim() && user.username === loginUsernameValue.trim(),
        );
        if (loggedUser) {
          dispatch(setUserAction(loggedUser));
          resetForm();
        } else {
          window.alert("Dati errati inseriti! Controlla bene!");
          resetForm();
        }
      })
      .catch((err) => {
        console.log("Errore! -> " + err);
      });
  };

  const resetForm = () => {
    setEmailValue("");
    setUsernameValue("");
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #004182 0%, #ffffff 100%)",
      }}
    >
      <Card
        className="shadow-lg"
        style={{
          width: "100%",
          maxWidth: "400px",
          borderRadius: "15px",
          border: "4px solid #0a66c2",
          overflow: "hidden",
        }}
      >
        <Card.Body className="p-5 bg-white">
          <div className="text-center mb-4">
            <h2 style={{ color: "#0a66c2", fontWeight: "bold" }}>
              Linked
              <span
                style={{
                  backgroundColor: "#0a66c2",
                  color: "#fff",
                  padding: "0 4px",
                  borderRadius: "3px",
                }}
              >
                in
              </span>
            </h2>
            <p className="text-muted mt-2">Accedi alla tua rete professionale</p>
          </div>

          <Form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold" style={{ fontSize: "0.9rem" }}>
                Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci Email"
                style={{ padding: "12px", border: "1px solid #0a66c2" }}
                value={loginEmailValue}
                onChange={(e) => setEmailValue(e.target.value)}
              />
              <Form.Label className="fw-bold" style={{ fontSize: "0.9rem" }}>
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci Username"
                style={{ padding: "12px", border: "1px solid #0a66c2" }}
                value={loginUsernameValue}
                onChange={(e) => setUsernameValue(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" className="w-100 fw-bold mt-2 linkedin-btn">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginComponent;
