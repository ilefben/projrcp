import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import {thunk} from "redux-thunk"; // Corrected import
import reducers from "./reducers";
import App from "./App";
import "./index.css";
import { createRoot } from "react-dom/client";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
