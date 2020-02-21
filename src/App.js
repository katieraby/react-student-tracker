import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import GradStore from "./components/GradStore";
import StudentStore from "./components/StudentStore";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Router>
          <GradStore path="/graduates/*" />
          <StudentStore path="/students/*" />
        </Router>
      </div>
    );
  }
}

export default App;
