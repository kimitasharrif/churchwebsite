import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTiktok, faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <h2>ALL NATIONS-PEFA CHURCH KAYOLE B</h2>
          <h5>P.O BOX 5790-00200 Nairobi.</h5>
          <h5>VISION:</h5>
          <p>Making Disciples of all nations (Matthew 28:19)</p>
          <h5>MISSION STATEMENT:</h5>
          <p className='min'>
            To be a church that effectively and rightly declares the message of 
            the scripture that is socially and spiritually relevant, equipping
            saints to do the work of the ministry.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact Form Section */}
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <p><strong>Email:</strong> pefakayoleb@gmail.com</p>
          <p><strong>Phone:</strong> +123 456 7890</p>
          <p>PEFA/Raster Stage Kayole, Nairobi, Kenya</p>
          <h5>Follow us on social media:</h5>
          <div className="social-media-links" style={styles.iconContainer}>
            <a href="https://www.youtube.com/@pkb_church" target="_blank" rel="noopener noreferrer" style={styles.youtube}>
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.tiktok.com/@pkb_church" target="_blank" rel="noopener noreferrer" style={styles.tiktok}>
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
            <a href="https://www.instagram.com/pkb_church/" target="_blank" rel="noopener noreferrer" style={styles.instagram}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://wa.me/your-phonenumber" target="_blank" rel="noopener noreferrer" style={styles.whatsapp}>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            </a>
            <a href="https://www.facebook.com/churchpkb/" target="_blank" rel="noopener noreferrer" style={styles.facebook}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} All Rights Reserved | Made with <span className="love-link">❤</span> by <a href="/">sherrif.com</a>
        </p>
      </div>
    </footer>
  );
}

const styles = {
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '300px',
    margin: '0 auto',
  },
  youtube: {
    color: '#FF0000',
  },
  tiktok: {
    color: '#010101',
  },
  instagram: {
    color: '#E4405F',
  },
  whatsapp: {
    color: '#25D366',
  },
  facebook: {
    color: '#1877F2',
  },
};

export default Footer;
