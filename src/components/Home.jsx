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
      <div className="homelogo">
        <img src={home} alt="welcome home" className="home-logo" />
      </div>

      {/* Introduction Section */}
      <div className="section home-section">
        <h1>Welcome to ALL NATIONS-PEFA CHURCH KAYOLE B</h1>
        <p>We are so glad you're here. Learn more about us and join our community.</p>
        
        <h2>About Our Church</h2>
        <p>
          Welcome to All Nations-PEFA Church Kayole B, a vibrant community dedicated to empowering individuals and families through faith, fellowship, and service. 
          Nestled in the heart of Kayole, we are committed to nurturing spiritual growth and building strong, resilient families within our community.
        </p>
        <p>
          Whether you are seeking a place to connect with others, grow spiritually, or find support during life's challenges, All Nations-PEFA Church offers 
          a variety of programs designed to meet your needs.
        </p>
        
        <h3>Mission and Vision</h3>
        <p>Our mission is to spread the Gospel and to serve others with the love of Jesus Christ.</p>
        
        <h3>Leadership Team</h3>
        <ul>
          <li>Senior Pastor: Peter Ndambuki</li>
          <li>Associate Pastor: William Wasonga</li>
          <li>Youth Pastor: Tom Brown</li>
        </ul>
      </div>

      {/* Events Section */}
      <div className="events-section">
        <h2>Upcoming Events</h2>
        <ul>
          <li>Community Service Day - Oct 15</li>
          <li>Worship Night - Nov 1</li>
          <li>Christmas Service - Dec 25</li>
        </ul>

        {/* Event Cards */}
        <div className="row event-cards">
          <div className="col-md-3 card">
            <img src={eventImage1} alt="Worship Experience" className="card-img" />
            <div className="card-body">
              <h5 className="card-title">Worship Experience</h5>
              <p className="card-text">Join us for an inspiring evening of worship and fellowship.</p>
            </div>
          </div>
          <div className="col-md-3 card">
            <img src={eventImage2} alt="Family Gathering" className="card-img" />
            <div className="card-body">
              <h5 className="card-title">Family Gathering</h5>
              <p className="card-text">A special gathering for families to grow and connect in faith.</p>
            </div>
          </div>
          <div className="col-md-3 card">
            <img src={eventImage3} alt="Youth Group" className="card-img" />
            <div className="card-body">
              <h5 className="card-title">Youth Group</h5>
              <p className="card-text">Our youth group meets every Friday for an evening of fun and learning.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sermons Section */}
      <div className="sermons-section">
        <h2>Sermons</h2>
        <p>Watch our latest sermons or browse our sermon archive.</p>
        <ul>
          <li><a href="/sermon1">Sermon 1: God's Love</a></li>
          <li><a href="/sermon2">Sermon 2: Faith in Hard Times</a></li>
          <li><a href="/sermon3">Sermon 3: Living with Purpose</a></li>
        </ul>
      </div>
     <div className="membership-section">
          {/* Become a Member Card */}
          <div className="card become-member-card">
            <div className="card-body">
              <h5 className="card-title">Become a Member</h5>
              <p className="card-text">
                Join our community and be a part of something greater. Experience spiritual growth, fellowship, and opportunities to serve.
              </p>
              <button className="btn btn-primary join-btn">
                <FaUsers className="icon" /> Join Us
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home;
