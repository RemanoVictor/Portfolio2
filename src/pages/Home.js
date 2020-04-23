import React from "react";

import Logo from "./../media/logo3.svg";
import reactCA from "./../media/reactCA.svg";
import exam1 from "./../media/projectExam1.svg";
import nicecream from "./../media/nicecream.svg";
import ricknmorty from "./../media/reactma3.svg";
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
              title={"HTML & CSS MA"}
              img={nicecream}
              focus={"HMTL&CSS"}
              year={2018}
              link="http://remanovictor.com/HTML%26CSS_MA4/HTML&CSS_MA4.html"
            />
          </div>
          <div className="col-sm-6">
            <Cards
              title={"Javascript CA"}
              img={exam1}
              focus={"Javascript"}
              year={2018}
              link="https://gameofscones.netlify.app/index.html"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <Cards
              title={"React MA"}
              img={ricknmorty}
              focus={"React"}
              year={2019}
              link="https://dreamy-perlman-efe9dd.netlify.app"
            />
          </div>
          <div className="col-sm-6">
            <Cards
              title={"React hooks CA"}
              img={reactCA}
              focus={"React Hooks"}
              year={2016}
              link="https://laughing-haibt-c14250.netlify.app/"
            />
          </div>
        </div>

        <div className="row"></div>
      </div>
    </div>
  );
}
