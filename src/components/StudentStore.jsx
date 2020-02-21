import React, { Component } from "react";
import axios from "axios";
import Students from "./Students";

class StudentStore extends Component {
  state = { studentData: [], detailedStudentData: [] };

  render() {
    return (
      <Students
        studentData={this.state.studentData}
        detailedStudentData={this.state.detailedStudentData}
        detailedStudentUpdate={this.detailedStudentUpdate}
      />
    );
  }

  componentDidMount() {
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students/")
      .then(({ data: { students } }) => {
        this.setState({ studentData: students });
      });
  }
  detailedStudentUpdate = data => {
    this.setState({ detailedStudentData: data });
  };
}

export default StudentStore;
