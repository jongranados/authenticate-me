import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./context/Modal";

import { Provider as ReactProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../src/store";

import { restoreCSRF, csrfFetch } from "./store/csrf";

import * as sessionActions from "../src/store/sessionSlice";

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();

  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
}

function Root() {
  return (
    <ReactProvider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </ReactProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
