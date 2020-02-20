import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import GradStore from "./components/GradStore";
import StudentStore from "./components/StudentStore";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <StudentStore />
        <GradStore />
      </div>
    );
  }
}

export default App;
