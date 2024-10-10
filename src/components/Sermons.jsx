import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/bg/Jesusbg.jpg';
import eventImage1 from '../assets/bg/worshipexperience.jpg'; // Add your event images
import eventImage2 from '../assets/bg/dmglaunch.jpg';
import eventImage3 from '../assets/bg/midweekservice.jpg';
import '../App.css';

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

export default Sermons;
