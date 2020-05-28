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
                Born and raised in Cape Town, South Africa, I am a husband, a
                father of twins and slayer of dragons. I started my journey
                working in hospitality which I did for 10+ years. I made the
                switch to Development after noticeing how quickly the world was
                evolving. I have since learned to build web applications from
                the ground up. I am currently developing using languages such as
                Javascript aswell as frameworks like React and React hooks I am
                familiar with design as well as Gulp,Grunt and Agile working
                environments. I consider myself hardworking and goal driven. I
                am constantly striving to write better code, learn best
                practices and deliver a product that I can be proud of. I work
                well in teams as well as individually.
              </p>

              <p>
                I currently speak 3 languages. 2 of which are fluent (English
                and Afrikaans) whilst the third is intermediate (Norwegian). I
                am currently attending Norwegian classes to attain a Norwegian
                language certificate. I enjoy being outdoors and exploring. My
                hobbies are swimming, writing code, reading and mixing drinks.
              </p>
            </div>
          </div>

          <div className="row">
            <h3> Softwares I am familiar with </h3>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png"
                alt="Javascript Logo"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="https://nickroberts.ninja/wp-content/uploads/2017/07/react.jpg"
                alt=" React logo"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="https://findicons.com/files/icons/2779/simple_icons/1024/bootstrap.png"
                alt=" Bootstrap logo"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png"
                alt="HTML Logo"
              />
            </div>
            <div className="col-sm-2">
              <img
                src="https://cdn.nutt.net/wp-content/uploads/2019/12/grunt-logo-png-transparent.png"
                alt="Grunt Logo"
                height="180vh"
              />
            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
