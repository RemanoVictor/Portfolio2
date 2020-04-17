import React from "react";

import myimage from "./../media/me.svg";

export default function About() {
  return (
    <>
      <div className="container about">
        <div className="row about__welcome">
          <div className="[ col-sm-12 ]">
            <h2> A bit about me </h2>
          </div>
        </div>
        <div className="[ about__content ]">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <img src={myimage} alt="self portrait" />
            </div>
            <div className="col-sm-4"></div>
          </div>

          <div className="row">
            <div className="col-sm-12 about__description">
              <p>
                Born and raised in Cape Town, South Africa, I am a father of
                twins and slayer of dragons. I started my journey working in
                hospitality which I did for 10+ years, across 2 countries and
                several hotels and spas. I moved to Norway with my family to
                pursue a higher education and a change in career.
              </p>
              <p>
                I currently speak 3 languages. 2 of which are fluent (English
                and Afrikaans) whilst the third is intermediate (Norwegian). I
                enjoy being outdoors and exploring. My hobbies are swimming,
                reading and mixing drinks. I am a social being and can do really
                well in groups as well as indivually.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-3"></div>
            <div className="col-sm-2">
              <img src="" />
            </div>
            <div className="col-sm-2"></div>
            <div className="col-sm-2"></div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
