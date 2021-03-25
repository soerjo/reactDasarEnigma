import React, { Component } from "react";
import ComponentList from "./ComponentList";

export class ListNama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { nama: "Suryo", umur: 24, alamat: "Jakarta" },
        { nama: "Soerjo", umur: 25, alamat: "Tangerang Selatan" },
        { nama: "Hastomo", umur: 25, alamat: "Tangerang Selatan" },
        { nama: "Tomo", umur: 23, alamat: "jakarta" },
      ],
      tamplate: {
        nama: "",
        umur: 0,
        alamat: "",
      },
    };
  }
  render() {
    const { persons, tamplate } = this.state;

    return (
      <div>
        berikut list nama:
        {persons.map((orang, index) => (
          <ComponentList
            key={index}
            nama={orang.nama}
            umur={orang.umur}
            alamat={orang.alamat}
          />
        ))}
      </div>
    );
  }
}

export default ListNama;
