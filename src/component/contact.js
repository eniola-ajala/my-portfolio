import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faWhatsapp,
  
} from "@fortawesome/free-brands-svg-icons";
import "materialize-css";
import { Chip, Icon, Row, Col } from "react-materialize";
import Me from "./Me.jpg";
import Talk from './talktome'

export default function Contact() {
  return (
    <div>
      <div>
        <h3> Contact Me</h3>
        <div>
          <footer class="page-footer white">
            <div class="">
              <div class="row">
                <div class="col l12 s12">
                  <Chip
                    close={false}
                    closeIcon={<Icon className="close"></Icon>}
                    options={null}
                  >
                    <img alt="Contact" className="responsive-img" src={Me} />
                    Eniola Ajala
                    
                  </Chip>
                  <div className="talk-to-me black-text center-align"> Hire Me <Talk/> </div>
                  <Row>
                    <Col m={6} s={12}>
                      <p class="black-text text-lighten-4"> Email Address</p>
                      <p class="black-text text-lighten-4"> Home Address</p>
                    </Col>
                    <Col m={6} s={12}>
                      <p>
                        <a class="black-text text-lighten-3" href="mailto: ajalaeniola454@gmail.com" target="_blank" >
                          ajalaeniola454@gmail.com
                        </a>
                      </p>
                      <p>
                        
                        <a class="black-text text-lighten-3" href="#!">
                          No 7 Shagari village, Akure, Ondo State
                        </a>
                      </p>
                      
                    </Col>
                  </Row>
                  
                  <div className="social-container">
                    <a href="https://twitter.com/@Eniola65575802/" target="_blank" rel="noreferrer" className="twitter social">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.linkedin.com/in/eniola-ajala-1a37a4189" target="_blank" rel="noreferrer" className="linkedin social">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="https://github.com/eniola-ajala" target="_blank" rel="noreferrer" className="github social">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=2347061570287" target="_blank" rel="noreferrer" className="whatsapp social">
                      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
