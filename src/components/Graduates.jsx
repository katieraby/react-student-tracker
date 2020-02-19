import React, { Component } from "react";
import GraduateDetails from "./GraduateDetails";
import { Router, Link } from "@reach/router";

class Graduates extends Component {
  render() {
    console.log(this.props.detailedGradData);
    return (
      <section className="gradDataView">
        <div className="gradAllData">
          <h2>All graduates</h2>
          <ul>
            <li>
              <Link to={`${this.props.graduateData[0]._id}`}>
                {this.props.graduateData[0].name}
              </Link>
            </li>
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
      </section>
    );
  }
}

export default Graduates;
