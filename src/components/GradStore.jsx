import React, { Component } from "react";
import Graduates from "./Graduates";
import axios from "axios";

class GradStore extends Component {
  state = {
    graduateData: [],
    detailedGradData: {}
  };

  render() {
    return (
      <Graduates
        graduateData={this.state.graduateData}
        detailedGradData={this.state.detailedGradData}
        detailedGradUpdate={this.detailedGradUpdate}
      />
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
