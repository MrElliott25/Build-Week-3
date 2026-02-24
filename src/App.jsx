import LoginComponent from "./components/LoginComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import ProfileLeftSidebarComponent from "./components/ProfileLeftSidebarComponent/ProfileLeftSidebarComponent";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
<<<<<<< Updated upstream
        <ProfileLeftSidebarComponent />
=======

        <ProfilePage />

        <ProfileLeftSidebarComponent />
        <UniversalMessagingComponent />

>>>>>>> Stashed changes
      </PersistGate>
    </Provider>
  );
}

export default App;
