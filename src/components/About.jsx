import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import home from '../assets/bg/churchvie.jpg';
import '../Styles/About.css'; // Importing the CSS file for About styling

function About() {
  return (
    <div className="about-section">
      {/* Background Image */}
      <div className="about-welcome">
        <img src={home} alt="Welcome about" className="about-logo" />
        
        {/* Overlay for Active Page Text */}
        <div className="hero-overlay">
          <h1 className="hero-title">About Us</h1>
          <p className="hero-subtitle">
            <Link to="/">Home</Link> // About Us
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="about-content">
        <h1>About Our Church</h1>
        <p>
          Welcome to All Nations-PEFA Church Kayole B, a vibrant community dedicated to empowering individuals and families through faith, fellowship, and service. 
          Nestled in the heart of Kayole, we are committed to nurturing spiritual growth and building strong, resilient families within our community. 
          At All Nations-PEFA Church, we believe in creating a welcoming environment where everyone, regardless of their background, can experience the love of Christ and grow in their faith.
        </p>
        <p>
          Our passionate pastors and dedicated leaders work tirelessly to provide engaging worship services, transformative teachings, and meaningful outreach programs that address the needs of our community. 
          We strive to foster a spirit of love, compassion, and unity among our members, encouraging them to share their gifts and talents for the glory of God.
        </p>
        <p>
          Whether you are seeking a place to connect with others, grow spiritually, or find support during life's challenges, All Nations-PEFA Church offers a variety of programs designed to meet your needs. 
          From dynamic youth ministries and empowering women's groups to impactful community service initiatives and inspiring worship experiences, we are here to walk alongside you on your faith journey.
        </p>
      </div>
      
      {/* Cards Section for Mission and Core Values */}
      <div className="about-cards">
        <div className="card">
          <h3>Mission Statement</h3>
          <p>Our mission is to spread the Gospel and to serve others with the love of Jesus Christ.</p>
        </div>
        <div className="card">
          <h3>Core Values</h3>
          <ul>
            <li>Faith</li>
            <li>Compassion</li>
            <li>Community</li>
            <li>Service</li>
            <li>Integrity</li>
          </ul>
        </div>
        <div className="card">
          <h3>Leadership Team</h3>
          <ul>
            <li>Senior Pastor: Peter Ndambuki</li>
            <li>Associate Pastor: William Wasonga</li>
            <li>Youth Pastor: Tom Brown</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
