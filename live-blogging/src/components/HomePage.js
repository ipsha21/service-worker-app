import React, { Component } from "react";


export default class HomePage extends Component {
  render() {
    const { messages } = this.props;
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
      </div>
    );
  }
}
