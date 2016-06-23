import React, { Component } from "react";


export default class HomePage extends Component {
  render() {
    const {} = this.props;
    return (
      <div className="container">
        <div className="page-header">
          <h1>Live Blog</h1>
          <p className="lead">Push notification based live blog.</p>
        </div>
      </div>
    );
  }
}
