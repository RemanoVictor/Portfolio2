import React from "react";
// import { Link } from "react-router-dom";

export default function Cards(props) {
  const { title, img, focus, year } = props;
  return (
    <div className="card">
      <h3>Project: {title} </h3>
      <img src={img} alt="project1" className="[ CardImg ]" />
      <p>Focus: {focus}</p>
      <p>Year: {year}</p>
      {/* <Link to={`/CardSpecific/${id}`} className="btn btn-primary">
        Read More
      </Link> */}
    </div>
  );
}
