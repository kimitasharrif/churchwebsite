import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>ALL NATIONS-PEFA CHURCH KAYOLE B</h2>
          <h5>P.O BOX 5790-00200 Nairobi.</h5>
          <h5>VISION:</h5>
          <p>Making Disciples of all nations(Matthew) 28:19</p>
          <h5>MISSION STATEMENT:</h5>
          <p>
           To be a church that effectively and rightly declares the message of 
           the scripture that is socially and spiritually relevant,equipping
            saints to do the work of the ministry.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="contact">Contact</a></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <p><strong>Email:</strong> pefakayoleb@gmail.com.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()}  Made with love by sherrif.com | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
