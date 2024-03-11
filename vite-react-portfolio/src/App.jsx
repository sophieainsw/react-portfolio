import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import NavTabs from './components/NavTabs';
import Contact from './components/pages/contact';
import Projects from './components/pages/projects';
import About from './components/pages/About';

function App() {

  return (
    <div className="app-container">
      <Router>
        <NavTabs />

      <main>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<Projects />} />

      </Routes>
      </main>
      </Router>
      </div>

  )
}

export default App;
