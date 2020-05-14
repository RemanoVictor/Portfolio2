import React from "react";
import { Link } from "react-router-dom";

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
            <Link className="callToAction btn" to="/contact">
              Enquire
            </Link>
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
              description={
                "The goal was to use HTML and CSS to create a website for an icecream parlour that had an online order page."
              }
              link="http://remanovictor.com/HTML%26CSS_MA4/HTML&CSS_MA4.html"
            />
          </div>
          <div className="col-sm-6">
            <Cards
              title={"Javascript CA"}
              img={exam1}
              focus={"Javascript"}
              description={
                "The goal was to use javascript to create a boardgame that consisted of traps as well as to manipulate data recieved from an API"
              }
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
              description={
                "I needed to create a website that displayed cards containing information extracted from an API call. The website had to be built using react however and needed to have a page and a functional contact page."
              }
              link="https://dreamy-perlman-efe9dd.netlify.app"
            />
          </div>
          <div className="col-sm-6">
            <Cards
              title={"React hooks CA"}
              img={reactCA}
              focus={"React Hooks"}
              description={
                "I neeed to create a websited that displayed information extracted from an API. The site needed a functional contact page, Login and needed to be built using React hooks."
              }
              link="https://laughing-haibt-c14250.netlify.app/"
            />
          </div>
        </div>

        <div className="row"></div>
      </div>
    </div>
  );
}
