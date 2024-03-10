import React from 'react';
import { Button, Card } from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <h1 style={{ color: "grey", margin: '10px' }}>Contact Me</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>



        <Card style={{ width: '250px', height: '320px', margin: '10px', position: 'relative' }}>
          <Card.Img src="https://img.icons8.com/ios-filled/50/github.png" alt="github" style={{ width: "120px", height: "120px", margin: 'auto' }} />
          <Card.Body>
            <Card.Title>GitHub</Card.Title>
            <Card.Text>
              sophieainsw
            </Card.Text>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              <a href="https://github.com/sophieainsw/" target="_blank">
                <Button style={{ backgroundColor: 'grey', color: 'white', border: 'none' }}> GitHub </Button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: '320px', height: '320px', margin: '10px', position: 'relative' }}>
          <Card.Img src="https://img.icons8.com/ios/50/contact-card.png" alt="contact-card" style={{ width: "120px", height: "120px", margin: 'auto'  }} />
          <Card.Body>
            <Card.Title>Sophie Ainsworth</Card.Title>
            <Card.Text>
              sophieainsworth3@gmail.com <br />
              +447308145455 <br />
              Leeds, UK
            </Card.Text>
            </Card.Body>
        </Card>

        <Card style={{ width: '250px', height: '320px', margin: '10px', position: 'relative' }}>
          <Card.Img src="https://img.icons8.com/ios-filled/120/linkedin.png" alt="linkedin" style={{ width: "120px", height: "120px", margin: 'auto'  }} />
          <Card.Body>
            <Card.Title>LinkedIn</Card.Title>
            <Card.Text>
              Sophie Ainsworth
            </Card.Text>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              <a href="https://github.com/sophieainsw/" target="_blank">
                <Button style={{ backgroundColor: 'grey', color: 'white', border: 'none' }}> LinkedIn </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}

export default Contact;
