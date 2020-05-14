import React from "react";

import Logo from "./../media/logo3.svg";

export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row">
        <div className="col-sm-2">
          <img src={Logo} alt="company logo" width="100%" />
        </div>
        <div className="col-sm-4"></div>
        <div className="col-sm-4"></div>
        <div className="col-sm-2">
          <h6> designed and built by Remano Victor </h6>
        </div>
      </div>
    </div>
  );
}
