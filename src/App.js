import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Ministries from './components/Ministries';
import Events from './components/Events';
import Contact from './components/Contact';
import Sermons from './components/Sermons';
import Giving from './components/Giving';
import './styles.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/giving" element={<Giving />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
