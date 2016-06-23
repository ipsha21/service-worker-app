import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import configureStore from "./store/configureStore";
import HomePage from "./containers/HomePage";

import "bootstrap/dist/css/bootstrap.css";
import "codemirror/lib/codemirror.css";
import "../css/styles.css";


const store = configureStore({
  messages: [
    {date: "2016-06-22 18:30:00", text: "Portugal draw Hungary after a really great match!"},
    {date: "2016-06-22 20:30:00", text: "France and Ireland are playing together next Sunday"},
    {date: "2016-06-26 20:32:00", text: "France draw Ireland and won after shoot-outs."},
  ]
});


render((
  <Provider store={store}>
    <HomePage />
  </Provider>
), document.getElementById("app"));
