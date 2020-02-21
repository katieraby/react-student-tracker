import React, { Component } from "react";

class v extends Component {
  render() {
    return (
      <>
        <ul>
          <h2>Detailed view</h2>
          <li>Student name: {this.props.detailedStudentData.name}</li>
          <li>Student ID: {this.props.detailedStudentData._id}</li>
          <li>Cohort: {this.props.detailedStudentData.startingCohort}</li>
        </ul>
        <h3>Block history</h3>
        <ul>
          <li>
            Total time at Northcoders:{" "}
            {this.props.detailedStudentData.totalTimeAtNorthcoders}
          </li>
          <li>Fundamentals: {this.props.detailedStudentData.Fundamentals}</li>
          <li>Back-end: {this.props.detailedStudentData["Back End"]}</li>
          <li>Front-end: {this.props.detailedStudentData["Front End"]}</li>
          <li>
            Project Phase: {this.props.detailedStudentData["Project Phase"]}
          </li>
        </ul>
      </>
    );
  }
}

export default StudentDetails;
