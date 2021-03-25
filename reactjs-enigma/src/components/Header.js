import React, { Component } from "react";
import "./header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <h4>Header Component</h4>
        <div className="menu">
          <h4>
            <a href="/">Home</a>
          </h4>
          <h4>
            <a href="/">Profile</a>
          </h4>{" "}
          <h4>
            <a href="/">About</a>
          </h4>
        </div>
      </div>
    );
  }
}

export default Header;
