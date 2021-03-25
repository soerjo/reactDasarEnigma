import React, { Component } from "react";

export class ComponentCountClass extends Component {
  constructor(props) {
    super(props);
    console.log("constructor child", props);
    this.state = {
      angka: props.angka,
      plus: props.plusHandler,
      minus: props.minusHandler,
    };
  }

  render() {
    let { angka, plusHandler, minusHandler } = this.props;
    console.log("isi dari props class", this.props);
    console.log(this.state);
    return (
      <div>
        <h3>{this.state.angka}</h3>
        <button onClick={() => plusHandler(2)}>+</button>
        <span>{angka}</span>
        <button onClick={() => minusHandler(2)}>-</button>
      </div>
    );
  }
}

export default ComponentCountClass;
