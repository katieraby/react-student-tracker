import React, { Component } from "react";

class GraduateDetails extends Component {
  render() {
    return (
      <>
        <ul>
          <h2>Detailed view</h2>
          <li>Student name: {this.props.detailedGradData.name}</li>
          <li>Student ID: {this.props.detailedGradData._id}</li>
          <li>Cohort: {this.props.detailedGradData.startingCohort}</li>
        </ul>
        <h3>Block history</h3>
        <ul>
          <li>
            Total time at Northcoders:{" "}
            {this.props.detailedGradData.totalTimeAtNorthcoders}
          </li>
          <li>Fundamentals: {this.props.detailedGradData.Fundamentals}</li>
          <li>Back-end: {this.props.detailedGradData["Back End"]}</li>
          <li>Front-end: {this.props.detailedGradData["Front End"]}</li>
          <li>Project Phase: {this.props.detailedGradData["Project Phase"]}</li>
        </ul>
      </>
    );
  }
}

export default GraduateDetails;
