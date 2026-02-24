import LoginComponent from "./components/LoginComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import ProfilePage from "./components/ProfilePage";
import HomepageFrontBanner from "./components/HomepageFrontBanner/HomepageFrontBanner";
import ProfileLeftSidebarComponent from "./components/ProfileLeftSidebarComponent/ProfileLeftSidebarComponent";
import UniversalMessagingComponent from "./components/UniversalMessagingComponent/UniversalMessagingComponent";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
<<<<<<< Updated upstream
        <ProfilePage />
=======
        <ProfileLeftSidebarComponent />
        <UniversalMessagingComponent />
>>>>>>> Stashed changes
      </PersistGate>
    </Provider>
  );
}

export default App;
