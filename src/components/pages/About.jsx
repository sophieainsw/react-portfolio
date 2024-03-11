import React from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import imageSrc from '../images/image.jpg';

function About() {
  return (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
             <Container style={{ padding: "40px", display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
             <Row>
          <Col md={12} style={{padding: "30px"}}>
            <h1 style={{padding: "30px", fontSize: "50px", borderBottom: '2px solid black', paddingBottom: '30px'}}>WELCOME TO MY PORTFOLIO</h1>
          </Col>
        </Row>
          <Row style={{ alignItems: 'center', fontSize: '18px'}}>
            <Col md={8}>
              <p> </p>
              <p >I'm Sophie, a 27-year-old from the city of Leeds. Currently immersed in a 16-week front-end web developer course, I am driven by the exciting prospect of transitioning into a new field of work. Passionate about creating engaging and user-friendly digital experiences, I am embracing the challenges of mastering the intricacies of web development.This portfolio is to showcase some of the projects I have completed during my course to date.</p>
              <p>You can find more details on the Contact and Projects pages.</p>
            </Col>
            <Col md={4}>
              <img src={imageSrc} alt="Portfolio" style={{ height: "250px", borderRadius: "40px"}} />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default About;
