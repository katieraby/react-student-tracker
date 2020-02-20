import React, { Component } from "react";
import GraduateDetails from "./GraduateDetails";
import { Router, Link } from "@reach/router";
import axios from "axios";
import createBlockTally from "../utils";

class Graduates extends Component {
  render() {
    return (
      <section className="gradDataView">
        {this.props.graduateData.length ? (
          <>
            <div className="gradAllData">
              <ul>
                <h2>All Graduates</h2>
                {this.props.graduateData.map(grad => {
                  return (
                    <li key={grad._id}>
                      <Link
                        name={grad._id}
                        to={`${grad._id}`}
                        onClick={this.handleClick}
                      >
                        {grad.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="gradDetails">
              <Router>
                <GraduateDetails
                  path=":id"
                  detailedGradData={this.props.detailedGradData}
                />
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
          this.props.detailedGradUpdate(allData);
        }
      )
      .catch(err => {
        console.dir(err);
      });
  };
}

export default Graduates;
