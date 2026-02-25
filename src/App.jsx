import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

// Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

// Componenti
import LoginComponent from "./components/LoginComponent";
import LinkedInNavbar from "./components/LinkedInNavbar";
import ProfileFrontBanner from "./components/ProfileFrontBanner";
import ExperiencesBanner from "./components/ExperiencesBanner";
import HomepageFrontBanner from "./components/HomepageFrontBanner/HomepageFrontBanner";

const PaginaNonRichiesta = ({ titolo }) => (
  <div className="text-center mt-5 p-5 border rounded bg-white shadow-sm">
    <h2 style={{ color: "#0a66c2" }} className="fw-bold">
      {titolo}
    </h2>
    <p className="text-muted mt-3">Funzionalità non richiesta per le specifiche di questa Build Week.</p>
  </div>
);

function App() {
  return (
    // Avvia Redux
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        {/* Avvia Router */}
        <BrowserRouter>
          {/* Navbar fissa */}
          <LinkedInNavbar />

          {/* Margini globali */}
          <div className="container mt-4">
            <Routes>
              {/* Rotta Login */}
              <Route path="/" element={<LoginComponent />} />

              {/* Rotta Profilo  */}
              <Route
                path="/profile"
                element={
                  <div className="row">
                    <div className="col-lg-8">
                      <ProfileFrontBanner />
                      <ExperiencesBanner />
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                }
              />

              {/* IL TAPPABUCHI PER LA HOME  */}
              <Route path="/home" element={<HomepageFrontBanner />} />

              {/* LE PAGINE NON RICHIESTE */}
              <Route path="/network" element={<PaginaNonRichiesta titolo="La tua Rete" />} />
              <Route path="/jobs" element={<PaginaNonRichiesta titolo="Offerte di Lavoro" />} />
              <Route path="/messaging" element={<PaginaNonRichiesta titolo="Messaggistica" />} />
              <Route path="/notifications" element={<PaginaNonRichiesta titolo="Notifiche" />} />

              {/* ROTTA 404 */}
              <Route path="*" element={<h1 className="text-center mt-5 text-danger">404 - Sparisci</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
