import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavTabs from './components/NavTabs';
import Contact from './components/pages/contact';
import Projects from './components/pages/projects';
import { Container, Row, Col } from 'react-bootstrap';
import imageSrc from './components/images/search.png';
import AboutMe from './components/pages/AboutMe';

function App() {

  return (
      <Router>
        <NavTabs />


      <Routes>
         {/* <Route path="/" element={<Home />} /> */}
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />

      </Routes>
      </Router>


  )
}

export default App;
