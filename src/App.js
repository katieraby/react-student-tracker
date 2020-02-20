import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import GradStore from "./components/GradStore";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <GradStore />
      </div>
    );
  }
}

export default App;
