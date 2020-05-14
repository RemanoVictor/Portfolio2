import React from "react";

import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

import Nav from "./components/nav";
import Footer from "./components/footer";

export default function App(props) {
  return (
    <div className="App">
      <Nav />
      <div className="row">
        <div className="overlay"></div>
      </div>
      <div className="[ container-fluid ]">{props.children}</div>
      <Footer />
    </div>
  );
}
