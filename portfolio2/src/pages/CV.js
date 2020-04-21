import React from "react";

import Details from "./../components/cv";
import Experience from "./../components/experience";
import Education from "./../components/education";

export default function Cv() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 DetailsHeading">
          <h1> Personal Details </h1>
        </div>
      </div>

      <div className="row">
        <Details
          firstname={"Remano"}
          lastname={"Victor"}
          number={40557079}
          email={"remanovictor@icloud.com"}
          linkedIn={"RemanoVictor"}
        />
      </div>

      <div className="row">
        <div className="col-sm-12 DetailsHeading">
          <h1> Experience </h1>
        </div>
      </div>

      <div className="row">
        <Experience
          year={"2016-2018"}
          company={"The Stack"}
          titlelocation={"Mixologist, Cape Town"}
          description={
            "liasing with customers. mixing and designing new cocktail recipes."
          }
        />
      </div>

      <div className="row">
        <Experience
          year={"2014-2016"}
          company={"Sheraton Grand"}
          titlelocation={"Ass. Pool bar manager & mixologist, Dubai"}
          description={
            "Ensure smooth day to day running of pool bar. Drawing up work schedules for staff. Monthly P&L meetings. Guest liason."
          }
        />
      </div>

      <div className="row">
        <Experience
          year={"2009-2014"}
          company={"The Westin"}
          titlelocation={"Bartender, Cape Town"}
          description={"Mixing drinks as well as serving tables"}
        />
      </div>

      <div className="row">
        <div className="col-sm-12 DetailsHeading">
          <h1> Education </h1>
        </div>
      </div>

      <div className="row">
        <Education
          period={"2018-Present"}
          course={"Frontend Development"}
          institutionlocation={"Noroff,Oslo"}
          description={
            "2 year front end evelopment course which covers design,HTML & CSS, Javascript and frameworks like bootstrap,LESS,SASS and React.js"
          }
        />
      </div>

      <div className="row">
        <Education
          period={"2004-2009"}
          course={"High School Course"}
          institutionlocation={"Strandfontein High,Cape Town"}
          description={
            "basic high scool program, Subjects include: English, Afrikaans, Biology, Physics, Geography"
          }
        />
      </div>
    </div>
  );
}
