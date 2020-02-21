import React, { Component } from "react";
import DetailedView from "./DetailedView";
import { Router, Link } from "@reach/router";
import axios from "axios";
import createBlockTally from "../utils";

class Graduates extends Component {
  render() {
    return (
      <section className="DataView">
        {this.props.graduateData.length ? (
          <>
            <div className="AllData">
              <ul>
                <h2>All Graduates</h2>
                <h3> Total Grads: {this.props.graduateData.length}</h3>
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

            <div className="Details">
              <Router>
                <DetailedView path=":id" {...this.props.detailedGradData} />
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
          this.props.detailedGradUpdate(allData);
        }
      )
      .catch(err => {
        console.dir(err);
      });
  };
}

export default Graduates;
