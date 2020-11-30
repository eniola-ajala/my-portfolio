import React from "react";
import { Row, Col, Card, Icon, CardTitle } from "react-materialize";
import OAU from './OAU.jpg'
import PAF from './PAF.jpg'

export default function Mybio() {
  return (
    <div>
      <h3> My Biography</h3>
      <p className="p">
        
        I am Eniola Ajala, an outstanding Front-End web developer. I spend most
        of my time experimenting with HTML, CSS, and JavaScript; dabbling with
        React JS and Bootstrap. <br /> I build websites that delight and inform.
        My works are always done well. I am curious, and i enjoy work that
        challenges me to learn something new and expand my knowledge horizon. I
        do my best to accept changes in my work space, i do my best to stay on
        top of changes in my work space so that i can meet challenges with tools
        well suited to the job at hand. <br /> I have core knowledge of HTML, CSS, Bootstrap, JavaScript and React JS{" "}
      </p>
      
      <div className="pad-p"></div>
      
      <h4 className="edu-head"> Education </h4>
      <div className="edu">
      <Row>
        <Col m={6} s={12}>
        <img
        alt=""
        className="circle1"
        src={OAU}
      />
      <br/>
      <div className="pad-p"></div>
      <h6> Obafemi Awolowo University</h6>
        <p> Department : Agricultural Economics</p>
      <p> Faculty : Agriculture</p>
      <p> Degree : B.Agric</p> 
            
        </Col>
        <Col m={6} s={12}>
        <img 
        alt="Pearl africa"
        className="circle"
        src={PAF}
      />
      <br/>
      <h6> Pearl Africa Foundation</h6>
       <p>Student; Web Development Intermediate </p>
      <p>Duration: October 2020 - Present </p>
      <p> </p> 
      <div className="pad-p"></div>
             
        </Col>
      </Row>
      

      
      
      </div>
      
      
    </div>
  );
}
