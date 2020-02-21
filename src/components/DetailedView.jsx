import React from "react";

const DetailedView = props => {
  const {
    name,
    _id,
    startingCohort,
    Fundamentals,
    totalTimeAtNorthcoders
  } = props;
  return (
    <>
      {console.dir(props)}
      <ul>
        <h2>Detailed view</h2>
        <li>Student name: {name}</li>
        <li>Student ID: {_id}</li>
        <li>Cohort: {startingCohort}</li>
      </ul>
      <h3>Block history</h3>
      <ul>
        <li>Total time at Northcoders: {totalTimeAtNorthcoders}</li>
        <li>Fundamentals: {Fundamentals}</li>
        <li>Back-end: {props["Back End"]}</li>
        <li>Front-end: {props["Front End"]}</li>
        <li>Project Phase: {props["Project Phase"]}</li>
      </ul>
    </>
  );
};

export default DetailedView;
