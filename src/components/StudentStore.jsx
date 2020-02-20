import React, { Component } from "react";
import axios from "axios";
import { Router } from "@reach/router";
import Students from "./Students";

class StudentStore extends Component {
  state = { studentData: [] };

  render() {
    console.log(this.state.studentData);

    return (
      <Router>
        <Students path="/students" />
      </Router>
    );
  }

  componentDidMount() {
    axios
      .get("https://nc-student-tracker.herokuapp.com/api/students/")
      .then(({ data: { students } }) => {
        this.setState({ studentData: students });
      });
  }
}

export default StudentStore;
