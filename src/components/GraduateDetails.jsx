import React, { Component } from "react";

class GraduateDetails extends Component {
  render() {
    return (
      <>
        <h2>Detailed view</h2>
        <ul>
          <li>Student name: {this.props.detailedGradData.student.name}</li>
          <li>Student ID: {this.props.detailedGradData.student._id}</li>
          <li>Cohort: {this.props.detailedGradData.student.startingCohort}</li>
        </ul>
        <p>Block history:</p>
        <ul>
          <li></li>
        </ul>
      </>
    );
  }
}

export default GraduateDetails;
