import '../Styles/Home.css';
import home from '../assets/images/Jesusbg.jpg';
import eventImage1 from '../assets/images/worshipexperience.jpg';
import eventImage2 from '../assets/images/dmglaunch.jpg';
import eventImage3 from '../assets/images/midweekservice.jpg';
import HomeCarousel from './HomeCarousel';
import React, { useEffect, useState } from 'react';
import { FaUsers,FaWhatsapp,  FaLevelUpAlt} from 'react-icons/fa';



function Home() {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const [buttonText, setButtonText] = useState('How may I help you?');
 // WhatsApp Business Number
  const whatsappNumber = '+1234567890'; // Replace with your company's WhatsApp number
// 1234567890
  // Text options for the floating button
  const buttonTexts = [
    'How may I help you?',
    'Need assistance?',
    'Hello! How can I assist?',
    'Looking for help?',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setButtonText((prevText) => {
        const currentIndex = buttonTexts.indexOf(prevText);
        const nextIndex = (currentIndex + 1) % buttonTexts.length;
        return buttonTexts[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [buttonTexts]);

  const handleButtonClick = () => {
    const message = encodeURIComponent('Hi! I need assistance.');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank'); // Opens the WhatsApp chat in a new tab
  };
   // Scroll to Top Functionality
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide scroll button on scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
          {/* Scroll to Top Button */}
      {showScrollTopButton && (
        <button className="scroll-top-btn" onClick={handleScrollTop}>
          <FaLevelUpAlt />
        </button>
      )}
      {/* Floating WhatsApp Button */}
      <div id="floating-button" onClick={handleButtonClick}>
        <span id="button-icon">
          <FaWhatsapp />
        </span>
        <span id="button-text">{buttonText}</span>
      </div>

      <HomeCarousel/>

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
            src="https://www.youtube.com/embed/akFrR4Dbw_w?si=EctZysd-u8M9CbMT"
            title="Sunday Service 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/hLNNeyBoJWc?si=hNzG_6xCXuZv4PiH"
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
