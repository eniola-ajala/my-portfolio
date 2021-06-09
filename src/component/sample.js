import React from "react";
import one from './one.png'
import three from './three.png'
import two from './two.png'
import {Row, Col, Card, CardTitle, Icon} from 'react-materialize'

export default function Sample() {
  return (
    <div>
      <div className="sample-bg">
          <h3> Some Of My Works</h3>
        <Row className="sample">
          <Col m={4} s={12}>
            <Card
              closeIcon={<Icon>close</Icon>}
              header={
                <CardTitle
                  image={three}
                  reveal
                  waves="light"
                />
              }
              reveal={
                <p>
                  Web app built with React JS. 
                </p>
              }
              revealIcon={<Icon></Icon>}
              title="Movie-App"
            >
              <p>
                <a href="https://github.com/eniola-ajala/Movie-App">View Code</a>
              </p>
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              closeIcon={<Icon> close</Icon>}
              header={
                <CardTitle 
                  image={one}
                  reveal
                  waves="light"
                />
              }
              reveal={
                <p>
                  Count-down timer built with React Js
                </p>
              }
              revealIcon={<Icon></Icon>}
              title="Count down timer"
            >
              <p>
                <a href="https://github.com/eniola-ajala/countdown-timer">View Code</a>
              </p>
            </Card>
          </Col>
          <Col m={4} s={12}>
            <Card
              closeIcon={<Icon> close</Icon>}
              header={
                <CardTitle
                  image={two}
                  reveal
                  waves="light"
                />
              }
              reveal={
                <p>
                  This web app was craeted to understand how firebase works. The authentication was done with Firebase
                </p>
              }
              revealIcon={<Icon></Icon>}
              title="Ennie Tech "
            >
              <p>
                <a href="https://github.com/eniola-ajala/firebase-app">View Code</a>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
