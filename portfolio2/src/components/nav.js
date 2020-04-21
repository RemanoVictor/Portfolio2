import React from "react";
import { Link } from "react-router-dom";

import Logo from "./../media/logo3.svg";

export default function Nav() {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <img src={Logo} alt="" width="100%" />
          </div>
          <div className="col-sm-8">
            <ul className="nav navbar-nav">
              <li>
                <Link className="active" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/CV">CV</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
