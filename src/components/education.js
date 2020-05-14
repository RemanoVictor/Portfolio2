import React from "react";

export default function Education(props) {
  const { period, course, institutionlocation, description } = props;
  return (
    <div className="row">
      <h3>Period: {period}</h3>
      <h3>Course: {course}</h3>
      <h3>institution: {institutionlocation}</h3>
      <h3>Description: {description}</h3>
    </div>
  );
}
