import LoginComponent from "./components/LoginComponent";
import "./assets/css/style.css";
import { Provider } from "react-redux";
import { persistedStore, store } from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistedStore}>
        <LoginComponent />
      </PersistGate>
    </Provider>
  );
}

export default App;
