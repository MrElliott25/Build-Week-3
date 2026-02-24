import LoginComponent from "./components/LoginComponent";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeRightSidebar from "./components/HomeRightSidebar";
import ProfileFrontBanner from "./components/ProfileFrontBanner";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <LoginComponent />
        {/* <Container>
          <Row>
            <Col lg="8">
              <ProfileFrontBanner />
            </Col>
            <Col lg="4">
              <HomeRightSidebar />
            </Col>
          </Row>
        </Container> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
