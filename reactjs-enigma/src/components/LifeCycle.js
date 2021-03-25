import React, { Component } from "react";

export class LifeCycle extends Component {
  constructor() {
    super();
    console.log("constructor called");
  }
  componentWillMount() {
    console.log("will mount called content");
  }
  render() {
    console.log("render callse in content");
    return (
      <div>
        <p>belajar life Cycle</p>
      </div>
    );
  }
  componentDidMount() {
    console.log("did mount called in content");
  }
}

export default LifeCycle;
