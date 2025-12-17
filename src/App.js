// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header" style={{ padding: '20px', backgroundColor: '#282c34', color: 'white' }}>
          <h1>Vamsi Kadiyam Portfolio</h1>
          <nav style={{ marginTop: '10px' }}>
            <Link to="/" style={{ margin: '0 10px', color: 'white' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 10px', color: 'white' }}>About</Link>
            <Link to="/projects" style={{ margin: '0 10px', color: 'white' }}>Projects</Link>
            <Link to="/skills" style={{ margin: '0 10px', color: 'white' }}>Skills</Link>
            <Link to="/contact" style={{ margin: '0 10px', color: 'white' }}>Contact</Link>
          </nav>
        </header>

        <main style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
