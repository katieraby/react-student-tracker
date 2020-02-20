import React, { Component } from "react";
import { Router } from "@reach/router";
import Graduates from "./Graduates";
import HomePage from "./HomePage";
import axios from "axios";

class GradStore extends Component {
  state = {
    graduateData: [],
    detailedGradData: {}
  };

  render() {
    return (
      <Router>
        <HomePage path="/" />
        <Graduates
          path="/graduates/*"
          graduateData={this.state.graduateData}
          detailedGradData={this.state.detailedGradData}
          detailedGradUpdate={this.detailedGradUpdate}
        />
      </Router>
    );
  }

  componentDidMount() {
    axios
      .get(
        "http://nc-student-tracker.herokuapp.com/api/students?graduated=true"
      )
      .then(({ data: { students } }) => {
        this.setState({ graduateData: students });
      });
  }

  detailedGradUpdate = data => {
    this.setState({ detailedGradData: data });
  };
}

export default GradStore;
