import React from 'react';
import { Button, Card, Container, Col, Row } from 'react-bootstrap';
import '../../App.css';
import imageSrc from '../images/search.png';
import image1 from '../images/search.png';
import image2 from '../images/weather.png';
import image3 from '../images/sched.png';
import image4 from '../images/boot.png';
import image5 from '../images/pass.png';
import image6 from '../images/quiz.png';

function Projects() {
  return (
    <div>
      <h1 style={{ color: "grey", margin: '10px' }}>My Projects</h1>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Card style={{ width: '350px', margin: '10px', position: 'relative' }}>
          <Card.Img src={image1} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>Travel App</Card.Title>
            <Card.Text>
              This was a group project designed as our first project in the course. It is a responsive travel app which allows the user to input a city and find hotels. The user can also see ameneites and attractions close to the hotels.
            </Card.Text>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              <a href="https://adam-deb.github.io/project-1/" target="_blank">
                <Button style={{ backgroundColor: 'grey', color: 'white', border: 'none' }}> Open Project </Button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: '350px', margin: '10px', position: 'relative' }}>
          <Card.Img src={image2} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              This weather dashboard allows the user to search for a city and it returns the current weather in that city as well as the weather over the next 5 days.
            </Card.Text>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              <a href="https://sophieainsw.github.io/weather-dashboard/" target="_blank">
                <Button style={{ backgroundColor: 'grey', color: 'white', border: 'none' }}> Open Project </Button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: '350px', margin: '10px', position: 'relative' }}>
          <Card.Img src={image3} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>Work Day Scheduler</Card.Title>
            <Card.Text>
              This is a calendar app I created as an assignment which allows a user to save events for each hour of the day. The app presents timeblocks for standard business hours which are color coded for past, present and future.
            </Card.Text>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              <a href="https://sophieainsw.github.io/work-day-scheduler/" target="_blank">
                <Button style={{ backgroundColor: 'grey', color: 'white', border: 'none' }}> Open Project </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <Card style={{ width: '350px', margin: '10px', position: 'relative' }}>
          <Card.Img src={image5} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <Card.Text>
              This is an application that can be used to generate a random password. The password is created using criteria a user selects.
            </Card.Text>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              <a href="https://sophieainsw.github.io/password-challenge/" target="_blank">
                <Button style={{ backgroundColor: 'grey', color: 'white', border: 'none' }}> Open Project </Button>
              </a>
            </div>
          </Card.Body>
        </Card>


        <Card style={{ width: '350px', margin: '10px', position: 'relative' }}>
          <Card.Img src={image4} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>Bootstrap Portfolio</Card.Title>
            <Card.Text>
              This is a portfolio page I created to show my knowledge of bootstrap. This included projects I had completed until that part of the course.
            </Card.Text>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              <a href="https://sophieainsw.github.io/bootstrap-portfolio/" target="_blank">
                <Button style={{ backgroundColor: 'grey', color: 'white', border: 'none' }}> Open Project </Button>
              </a>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: '350px', margin: '10px', position: 'relative' }}>
          <Card.Img src={image6} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>Code Quiz</Card.Title>
            <Card.Text>
              This is a timed quiz created using JavaScript. If a questions is answered incorrectly 15 seconds are taken off the clock and the scores are saved into local storage so you can view highscores.
            </Card.Text>
            <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
              <a href="https://sophieainsw.github.io/codequiz/" target="_blank">
                <Button style={{ backgroundColor: 'grey', color: 'white', border: 'none' }}> Open Project </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
}

export default Projects;
