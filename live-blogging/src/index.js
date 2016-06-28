import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";

import configureStore from "./store/configureStore";
import HomePage from "./containers/HomePage";
import { newMessage, registerSubscription } from "./actions/blog";

import "bootstrap/dist/css/bootstrap.css";
import "codemirror/lib/codemirror.css";
import "../css/styles.css";


const store = configureStore({
  blog: {
    messages: [{
      date: new Date().toString(),
      text: "App starting up"
    }]
  }
});

// Register the React APP.

render((
  <Provider store={store}>
    <HomePage />
  </Provider>
), document.getElementById("app"));


// Register the Service Worker.

navigator.serviceWorker.onmessage = function(event) {
  console.log("New message received", event.data);
  store.dispatch(newMessage(event.data));
};

navigator.serviceWorker.register('service-worker.js')
  .then(function(registration){
    return registration.pushManager.getSubscription()
      .then(function(subscription) {
        if (subscription) {
          return subscription;
        }
        return registration.pushManager.subscribe({ userVisibleOnly: true });
      });
  }).then(function(subscription){
    console.log(JSON.stringify(subscription.toJSON()));
    store.dispatch(registerSubscription(subscription.toJSON()));
  });
