import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Ministries from './components/Ministries';
import Giving from './components/Giving';
import Contact from './components/Contact';
// import './App.css'; 
// import './index.css'
import './utils.css'
// import '/modern-normalize.css'
import Footer from './components/Footer';

function App() {
  return (
 <Router>
      <div className="containerguvu"> {/* Container wrapping header and routes */}
        <Header /> {/* The navbar will stay fixed on top */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page with scrollable sections */}
            <Route path="/about" element={<About />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/giving" element={<Giving />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
