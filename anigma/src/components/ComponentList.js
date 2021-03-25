import React, { Component } from "react";

export class ComponentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: "",
      umur: 0,
      alamat: "",
    };
  }
  render() {
    const { nama, umur, alamat } = this.state;
    return (
      <div>
        - Nama: {nama} | Umur: {umur} | Alamat: {alamat}
        {console.log(nama)}
      </div>
    );
  }
}

export default ComponentList;
