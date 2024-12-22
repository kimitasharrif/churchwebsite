import React from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/images/churchvie.jpg';
import '../Styles/About.css';

function About() {
  return (
    <div className="about-section">
      {/* Hero Section */}
      <div className="about-hero" style={{ backgroundImage: `url(${home})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            <Link to="/" className="breadcrumb-link">Home</Link> &nbsp;/&nbsp; About Us
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="about-content">
        <h1 className="section-title">Welcome to Our Church</h1>
        <p className="section-description">
          Welcome to All Nations-PEFA Church Kayole B, a vibrant community dedicated to empowering individuals and families through faith, fellowship, and service.
        </p>
        <p className="section-description">
          Nestled in the heart of Kayole, we are committed to nurturing spiritual growth and building strong, resilient families within our community.
        </p>
        <p className="section-description">
          Whether you are seeking a place to connect with others, grow spiritually, or find support during life's challenges, All Nations-PEFA Church offers a variety of programs designed to meet your needs.
        </p>
      </div>

      {/* Mission and Values Section */}
      <div className="about-cards">
        <div className="about-card">
          <h3>Mission Statement</h3>
          <p>To spread the Gospel and serve others with the love of Jesus Christ.</p>
        </div>
        <div className="about-card">
          <h3>Core Values</h3>
          <ul>
            <li>Faith</li>
            <li>Compassion</li>
            <li>Community</li>
            <li>Service</li>
            <li>Integrity</li>
          </ul>
        </div>
        <div className="about-card">
          <h3>Leadership Team</h3>
          <ul>
            <li><strong>Senior Pastor:</strong> Peter Ndambuki</li>
            <li><strong>Associate Pastor:</strong> William Wasonga</li>
            <li><strong>Youth Pastor:</strong> Tom Brown</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
