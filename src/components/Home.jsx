import React from 'react';
import '../Styles/Home.css';
import home from '../assets/bg/Jesusbg.jpg';
import eventImage1 from '../assets/bg/worshipexperience.jpg';
import eventImage2 from '../assets/bg/dmglaunch.jpg';
import eventImage3 from '../assets/bg/midweekservice.jpg';
import { FaUsers } from 'react-icons/fa';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <img src={home} alt="welcome home" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to ALL NATIONS-PEFA CHURCH KAYOLE B</h1>
          <p className="hero-subtitle">Join us and be a part of a thriving community of faith</p>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="services-section">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Morning Prayers</h3>
            <p>7:30 - 8:00 AM</p>
          </div>
          <div className="service-card">
            <h3>First Service</h3>
            <p>8:30 - 10:00 AM</p>
          </div>
          <div className="service-card">
            <h3>Second Service</h3>
            <p>10:30 - 1:00 PM</p>
          </div>
        </div>
      </div>

      {/* Latest Sunday Services Section */}
      <div className="sunday-services-section">
        <h2 className="section-title">Latest Sunday Services</h2>
        <div className="video-grid">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID1"
            title="Sunday Service 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID2"
            title="Sunday Service 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Events Section */}
      <div className="events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <ul className="events-list">
          <li>Community Service Day - Oct 15</li>
          <li>Worship Night - Nov 1</li>
          <li>Christmas Service - Dec 25</li>
        </ul>

        {/* Event Cards */}
        <div className="event-cards">
          <div className="event-card">
            <img src={eventImage1} alt="Worship Experience" className="event-image" />
            <div className="event-details">
              <h3>Worship Experience</h3>
              <p>Join us for an inspiring evening of worship and fellowship.</p>
            </div>
          </div>
          <div className="event-card">
            <img src={eventImage2} alt="Family Gathering" className="event-image" />
            <div className="event-details">
              <h3>Family Gathering</h3>
              <p>A special gathering for families to grow and connect in faith.</p>
            </div>
          </div>
          <div className="event-card">
            <img src={eventImage3} alt="Youth Group" className="event-image" />
            <div className="event-details">
              <h3>Youth Group</h3>
              <p>Our youth group meets every Friday for an evening of fun and learning.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="membership-section">
        <div className="membership-card">
          <FaUsers className="membership-icon" />
          <h3>Become a Member</h3>
          <p>Join our community and experience spiritual growth, fellowship, and opportunities to serve.</p>
          <button className="join-btn">Join Us</button>
        </div>
      </div>
    </>
  );
}

export default Home;
