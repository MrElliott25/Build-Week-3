import LoginComponent from "./components/LoginComponent";
import TestComponent from "./components/TestComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import ProfileLeftSidebarComponent from "./components/ProfileLeftSidebarComponent/ProfileLeftSidebarComponent";

TestComponent;

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <ProfileLeftSidebarComponent />
        <LoginComponent />
      </PersistGate>
    </Provider>
  );
}

export default App;
