import React from "react";
import Me from "./Me.jpg";
import Mybio from "./mybio";
import Contact from "./contact";
import Personal from "./personal";
import Sample from "./sample";

export default function Header() {
  return (
    <div>
      <div className="shift">
        <img alt="Eniola Ajala" className="circle" src={Me} />
        <h4 className="white-text center-align name" id="goggle">Eniola Ajala</h4>
        <p className="grey-text text-lighten-4 center-align">
          A skilled Front-End web developer with core knowledge in Front-End web
          development languages. Also, equipped with sound communication skills
          to communicate technical issues and solutions to non-teachnical
          individual.
        </p>
      </div>
      <div className="all-bg">
      <div className="bio"></div>
      <div id="myBio">
        <Mybio />
      </div>
      <div id="personalBranding">
        <Personal />
      </div>
      <div className="pad-p"></div>
      <div id="sample">
        <Sample />
      </div>
      <div className="pad-p"></div>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
