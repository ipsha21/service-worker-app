import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import HomePage from "./containers/HomePage";

import "bootstrap/dist/css/bootstrap.css";
import "codemirror/lib/codemirror.css";
import "../css/styles.css";


const store = configureStore();


render((
  <Provider store={store}>
    <HomePage />
  </Provider>
), document.getElementById("app"));
