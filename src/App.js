import React, { Component } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Router } from "@reach/router";
import Graduates from "./components/Graduates";
import HomePage from "./components/HomePage";

class App extends Component {
  state = {
    graduateData: [
      {
        _id: "5e1f28609150090a4e7239fc",
        name: "Deonte Nikolaus",
        startingCohort: 3,
        currentBlock: "grad"
      }
    ],
    detailedGradData: {
      student: {
        blockHistory: [
          {
            _id: "5e1f285f9150090a4e7239e3",
            number: 1,
            name: "Fundamentals",
            slug: "fun"
          },
          {
            _id: "5e1f285f9150090a4e7239e3",
            number: 1,
            name: "Fundamentals",
            slug: "fun"
          },
          {
            _id: "5e1f28609150090a4e7239e4",
            number: 2,
            name: "Back End",
            slug: "be"
          },
          {
            _id: "5e1f28609150090a4e7239e5",
            number: 3,
            name: "Front End",
            slug: "fe"
          },
          {
            _id: "5e1f28609150090a4e7239e6",
            number: 4,
            name: "Project Phase",
            slug: "proj"
          },
          {
            _id: "5e1f28609150090a4e7239e7",
            number: 5,
            name: "Graduated",
            slug: "grad"
          }
        ],
        _id: "5e1f28609150090a4e7239fc",
        name: "Deonte Nikolaus",
        startingCohort: 3,
        __v: 0
      }
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Nav />
        <Router>
          <HomePage path="/" />
          <Graduates
            path="/graduates/*"
            graduateData={this.state.graduateData}
            detailedGradData={this.state.detailedGradData}
          />
        </Router>
      </div>
    );
  }

  componentDidMount() {}
}

export default App;
