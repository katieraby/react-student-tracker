import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Router } from "@reach/router";
import Graduates from "./components/Graduates";
import HomePage from "./components/HomePage";

class App extends Component {
  state = {
    graduateData: []
  };

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Router>
          <HomePage path="/" />
          <Graduates path="/graduates" />
        </Router>
      </div>
    );
  }

  componentDidMount() {}
}

export default App;
