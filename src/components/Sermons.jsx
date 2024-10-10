import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import home from '../assets/bg/mountain.jpg';
import '../App.css'

function Sermons() {
  return (
    <>
      <div className="sermons-section">
        {/* Background Image */}
        <div className="sermonslogo">
          <img src={home} alt="welcome sermons" className="sermons-logo" />
        </div>
        
        {/* Overlay for Active Page Text */}
        <div className="overlay">
          <h1>Sermons</h1>
          <p>
            <Link to="/">Home</Link> // Sermons
          </p>
        </div>

        {/* Main Content Section */}
        <div className="section sermon-content">
      <h2>Sermons</h2>
      <p>Watch our latest sermons or browse our sermon archive.</p>
      <ul>
        <li><a href="/sermon1">Sermon 1: God's Love</a></li>
        <li><a href="/sermon2">Sermon 2: Faith in Hard Times</a></li>
        <li><a href="/sermon3">Sermon 3: Living with Purpose</a></li>
      </ul>
      </div>
      </div>
    </>
  );
}

export default Sermons;
