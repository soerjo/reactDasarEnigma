import React, { Component } from "react";
import ComponentCount from "./ComponentCount";
import ComponentCountClass from "./ComponentCountClass";

export class BelajarState extends Component {
  constructor(props) {
    console.log("constructor called");
    super();
    //cara membuat state
    this.state = {
      number: 0,
    };

    ///function plus ini akan di gunakan oleh component content
    this.plusHandle = this.plusHandle.bind(this);
    // this.minusHandle = this.minusHandle.bind(this);
  }

  //setiap make setState render() bakal di panggil terus
  plusHandle(angka) {
    this.setState({ ...this.state, number: this.state.number + 1 });
  }

  minusHandle = (angka) => {
    console.log("keteken tombol minus");
    console.log("this.state.number: ", this.state.number);
    if (this.state.number > 0) {
      this.setState((state) => ({
        number: state.number - 1,
      }));
    } else {
      alert("angka ndak bisa di kurangi lagi");
    }
  };

  render() {
    console.log(this.state);
    console.log("render di panggil");
    console.log(this.state.number);
    let { number } = this.state;
    return (
      <div>
        <p>belajar State</p>
        <p>manggil dari destructuring let number = {number}</p>
        <p>manggil langusng dari constructor number = {this.state.number}</p>
        {/*kalo mau manggil handler dengan mengirim parameter pake arrow funtion biar ndak langsung di eksekusi*/}
        <ComponentCount
          angka={number}
          plusHandler={this.plusHandle}
          minusHandler={this.minusHandle}
        />
        <ComponentCountClass
          angka={number}
          plusHandler={this.plusHandle}
          minusHandler={this.minusHandle}
        />
      </div>
    );
  }

  componentDidMount() {
    console.log("did mount called in content");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should called update component");
    if (this.state.number !== nextState.number) {
      console.log("kondisi nilai this.state.number: ", this.state.number);
      console.log("kondisi memenuhi dan nilainya: ", nextState.number);
      return true;
    }
  }

  //   componentDidUpdate() {
  //     console.log("component didupdate panggil");
  //     return alert("berhasil");
  //   }
}

export default BelajarState;
