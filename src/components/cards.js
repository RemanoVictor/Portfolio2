import React from "react";

export default function Cards(props) {
  const { title, img, focus, description, link } = props;
  return (
    <div className="card">
      <h3>Project: {title} </h3>
      <img src={img} alt="project preview" />
      <p>Focus: {focus}</p>
      <p>The Goal: {description}</p>
      <a
        href={link}
        className="btn btn-primary"
        target="_blank"
        rel="noopener noreferrer"
      >
        view site
      </a>
    </div>
  );
}
