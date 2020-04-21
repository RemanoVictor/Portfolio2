import React from "react";

import Logo from "./../media/logo3.svg";
import exam1 from "./../media/projectExam1.svg";
import Cards from "./../components/cards";

export default function Portfolio2() {
  return (
    <div>
      <div className="container-fluid landingPage">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8 landingPage__logo">
            <img src={Logo} alt="company logo" />
          </div>
          <div className="col-sm-2"></div>
        </div>
        <div className="row">
          <div className="col-sm-5"></div>
          <div className="col-sm-2 landingPage__button">
            <button className="callToAction">Enquire</button>
          </div>
          <div className="col-sm-5"></div>
        </div>
      </div>

      <div className="container projectContainer">
        <div className="row">
          <div className="col-sm-5"></div>
          <div className="col-sm-5">
            <h2>Projects</h2>
          </div>
          <div className="col-sm-2"></div>
        </div>

        <div className="row cardContainer">
          <div className="col-sm-6">
            <Cards
              title={"project1"}
              img={exam1}
              focus={"HMTL&CSS"}
              year={2016}
            />
          </div>
          <div className="col-sm-6">
            <Cards
              title={"project2"}
              img={"https:via.placeholder.com/150/"}
              focus={"HMTL&CSS"}
              year={2016}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <Cards
              title={"project3"}
              img={"https:via.placeholder.com/150/"}
              focus={"HMTL&CSS"}
              year={2016}
            />
          </div>
          <div className="col-sm-6">
            <Cards
              title={"project4"}
              img={"https:via.placeholder.com/150/"}
              focus={"HMTL&CSS"}
              year={2016}
            />
          </div>
        </div>

        <div className="row"></div>
      </div>
    </div>
  );
}
