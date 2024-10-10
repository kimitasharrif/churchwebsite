import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import home from '../assets/bg/dmglaunch.jpg';
import eventImage1 from '../assets/bg/worshipexperience.jpg'; // Add your event images
import eventImage2 from '../assets/bg/dmglaunch.jpg';
import eventImage3 from '../assets/bg/midweekservice.jpg';
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
       {/* Event Cards Section */}
          <div className="row event-cards">
            <div className="col-md-3 card">
              <img src={eventImage1} alt="Event 1" className="card-img" />
              <div className="card-body">
                <h5 className="card-title">Event 1</h5>
                <p className="card-text">Join us for an inspiring evening of worship and fellowship.</p>
              </div>
            </div>
            <div className="col-md-3 card">
              <img src={eventImage2} alt="Event 2" className="card-img" />
              <div className="card-body">
                <h5 className="card-title">Event 2</h5>
                <p className="card-text">A special gathering for families to grow and connect in faith.</p>
              </div>
            </div>
            <div className="col-md-3 card">
              <img src={eventImage3} alt="Event 3" className="card-img" />
              <div className="card-body">
                <h5 className="card-title">Event 3</h5>
                <p className="card-text">Our youth group meets every Friday for an evening of fun and learning.</p>
              </div>
            </div>
          </div>
      </div>
      </div>
    </>
  );
}

export default Events;
