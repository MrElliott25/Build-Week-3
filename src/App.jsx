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
import SidebarComponent from "./components/SidebarComponent/SidebarComponent";

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

              {/* Rotta Profilo */}
              <Route
                path="/profile"
                element={
                  <div className="row">
                    {/* Colonna principale (sinistra) */}
                    <div className="col-lg-8">
                      <ProfileFrontBanner />
                      <ExperiencesBanner />
                    </div>

                    {/* Sidebar (destra) */}
                    <div className="col-lg-4">
                      <SidebarComponent />
                    </div>
                  </div>
                }
              />

              {/* Rotta 404 */}
              <Route path="*" element={<h1 className="text-center mt-5 text-danger">404 - Sparisci</h1>} />
            </Routes>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
