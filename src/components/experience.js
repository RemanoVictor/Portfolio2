import React from "react";

export default function Experience(props) {
  const { year, company, titlelocation, description } = props;
  return (
    <div className="row">
      <h3>Period: {year}</h3>
      <h3>Company: {company}</h3>
      <h3>Title & Location : {titlelocation}</h3>
      <h3>Description: {description}</h3>
    </div>
  );
}
