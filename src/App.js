import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Ministries from './components/Ministries';
import Events from './components/Events';
import Sermons from './components/Sermons';
import Giving from './components/Giving';
import Contact from './components/Contact';
import './App.css'; // All CSS in this file

function App() {
  return (
    <Router>
      <Header /> {/* The navbar will stay fixed on top */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page with scrollable sections */}
        <Route path="/about" element={<About />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/events" element={<Events />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
