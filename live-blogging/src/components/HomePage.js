import React, { Component } from "react";


export default class HomePage extends Component {
  render() {
    const { messages, subscription } = this.props;
    return (
      <div className="container">
        <div className="page-header">
          <h1>Live Blog</h1>
          <p className="lead">Push notification based live blog.</p>
          <ul>
            { messages.map(message => {
                return <li><strong>{message.date}</strong> {message.text}</li>;
            }) }
          </ul>
        </div>
        <h5>Run <a href="https://github.com/ipsha21/service-worker-app/tree/master/server">this script</a> to add a new message to the live blog:</h5>
        <pre>.venv/bin/python send-notif.py '{JSON.stringify(subscription)}'</pre>
      </div>
    );
  }
}
