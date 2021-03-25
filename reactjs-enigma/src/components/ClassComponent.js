import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <p>Contoh ClassComponent ...</p>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default ClassComponent;
