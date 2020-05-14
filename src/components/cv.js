import React from "react";

export default function Details(props) {
  const { firstname, lastname, number, email, linkedIn } = props;
  return (
    <>
      <div className="row">
        <h3>
          Name: {firstname} {lastname}
        </h3>
        <h3>Phone: {number}</h3>
        <h3>Email: {email}</h3>
        <h3>LinkedIn: {linkedIn}</h3>
      </div>
    </>
  );
}
