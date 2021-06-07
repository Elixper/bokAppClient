// import React, { Component } from "react";
import React from "react";
// import "../styles/Container.css";

export default class ContainerClass extends React.Component {
  // export default class ContainerClass extends Component {
  render() {
    // console.log(this.props);

    return (
      <div className="Container">
        <img
          className="Container__image"
          style={{
            width: 20,
            height: 20,
          }}
          src={this.props.image}
          alt=""
        />
        <h1 className="Container__title">{this.props.name}</h1>
        <p className="Container__description"> {this.props.description}</p>
      </div>
    );
  }
}