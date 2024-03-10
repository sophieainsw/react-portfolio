import React from 'react';
import { Button, Card } from 'react-bootstrap';

function AboutMe() {
  return (
    <div>
             <Container>
          <Row>
            <Col md={8}>
              <h1>Welcome to My Portfolio</h1>
              <p>This is some additional information about me and my projects.</p>
              <p>You can find more details on the Contact and Projects pages.</p>
            </Col>
            <Col md={4}>
              <img src={imageSrc} alt="Portfolio" style={{ maxWidth: '100%' }} />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default AboutMe;
