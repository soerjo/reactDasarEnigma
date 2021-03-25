import React, { Component } from "react";
import "./Form.css";

export class Form extends Component {
  render() {
    return (
      <div className="createAccount">
        <div className="paper">
          <h2>Create Account</h2>
          <form className="form" noValidate>
            <div className="namaLengkap">
              <div className="potong">
                <label>First Name</label>
                <input
                  className="input"
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name*"
                />
              </div>
              <div className="potong">
                <label>Last Name</label>
                <input
                  className="input"
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name*"
                />
              </div>
            </div>
            <div className="potong">
              <label>Email</label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                placeholder="Email*"
              />
            </div>
            <div className="potong">
              <label>Password</label>
              <input
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Password*"
              />
            </div>
            <div className="potong">
              <button className="submit">Sign In</button>
              <a href="/">Don't have an account? Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
