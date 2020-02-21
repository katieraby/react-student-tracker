import React, { Component } from "react";
import { Link, Router } from "@reach/router";
import axios from "axios";
import createBlockTally from "../utils";
import DetailedView from "./DetailedView";

class Students extends Component {
  render() {
    console.log(this.props.detailedStudentData);
    return (
      <section className="DataView">
        {this.props.studentData.length ? (
          <>
            <div className="AllData">
              <ul>
                <h2>All Students</h2>
                <h3>Total Students: {this.props.studentData.length}</h3>
                {this.props.studentData.map(student => {
                  return (
                    <li key={student._id}>
                      <Link
                        name={student._id}
                        to={`${student._id}`}
                        onClick={this.handleClick}
                      >
                        {student.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="Details">
              <Router>
                <DetailedView path=":id" {...this.props.detailedStudentData} />
              </Router>
            </div>
          </>
        ) : (
          <>
            <p>Loading...</p>
          </>
        )}
      </section>
    );
  }
  handleClick = event => {
    axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students/${event.target.name}`
      )
      .then(
        ({
          data: {
            student: { blockHistory, _id, name, startingCohort }
          }
        }) => {
          const formattedData = createBlockTally(blockHistory);
          const allData = { ...formattedData, _id, name, startingCohort };
          console.log(allData);
          this.props.detailedStudentUpdate(allData);
        }
      )
      .catch(err => {
        console.dir(err);
      });
  };
}

export default Students;
