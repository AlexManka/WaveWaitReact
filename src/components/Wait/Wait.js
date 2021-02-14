import React, { Component } from "react";
import "./Wait.css";
import logo from './../../logo.svg';

class Wait extends Component {
  handleClick = () => {
   this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default Wait;