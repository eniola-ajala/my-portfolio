import React from "react";
import { Row, Col, CollectionItem, Collection, Icon } from "react-materialize";
import Me from "./Me.jpg";
import Mybio from "./mybio";
import Contact from "./contact";
import Personal from "./personal";
import Sample from "./sample";
import CustomNav from "./sidenav";

export default function Header() {
  return (
    <div>
      <div className="#1976d2 blue darken-2 shift">
        <img alt="Eniola Ajala" className="circle" src={Me} />

        <h4 class="white-text">Eniola Ajala</h4>

        <p class="grey-text text-lighten-4">
          A skilled Front-End web developer with core knowledge in Front-End web
          development languages. Also, equipped with sound communication skills
          to communicate technical issues and solutions to non-teachnical
          individual.{" "}
        </p>
        
      </div>
      <div className="bot"></div>
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

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
