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
                  This single web page was built to be in relation to an agricultural website, after been motivated by a friend. It is the first web page i built!
                </p>
              }
              revealIcon={<Icon></Icon>}
              title="Agric-Site"
            >
              <p>
                <a href="/">View Code</a>
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
                  This project was built with React. It was the first assignment project i did at Pearls Africa. 
                </p>
              }
              revealIcon={<Icon></Icon>}
              title="Count down timer"
            >
              <p>
                <a href="/">View Code</a>
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
              title="React Web app "
            >
              <p>
                <a href="/">View Code</a>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
