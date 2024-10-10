import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import home from '../assets/bg/mountain.jpg';
import '../App.css'

function Events() {
  return (
    <>
      <div className="events-section">
        {/* Background Image */}
        <div className="eventslogo">
          <img src={home} alt="welcome events" className="events-logo" />
        </div>
        
        {/* Overlay for Active Page Text */}
        <div className="overlay">
          <h1>Up Comming Events</h1>
          <p>
            <Link to="/">Home</Link> // Up Comming Events
          </p>
        </div>

        {/* Main Content Section */}
        <div className="section about-content">
      <h2>Upcoming Events</h2>
      <ul>
        <li>Community Service Day - Oct 15</li>
        <li>Worship Night - Nov 1</li>
        <li>Christmas Service - Dec 25</li>
      </ul>
      </div>
      </div>
    </>
  );
}

export default Events;
