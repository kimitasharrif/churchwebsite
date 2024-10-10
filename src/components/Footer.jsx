import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTiktok, faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>ALL NATIONS-PEFA CHURCH KAYOLE B</h2>
          <br />
          <h5>P.O BOX 5790-00200 Nairobi.</h5>
          <h5>VISION:</h5>
          <p>Making Disciples of all nations (Matthew 28:19)</p>
          <br />
          <h5>MISSION STATEMENT:</h5>
          <br />
          <p>
            To be a church that effectively and rightly declares the message of 
            the scripture that is socially and spiritually relevant, equipping
            saints to do the work of the ministry.
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <br />
          <ul>
            <li><a href="/">Home</a></li>
            <br />
            <li><a href="#services">Services</a></li>
            <br />
            <li><a href="/about">About Us</a></li>
            <br />
            <li><a href="contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <br />
          <p><strong>Email:</strong> pefakayoleb@gmail.com</p>
          <br />
          <p><strong>Phone:</strong> +123 456 7890</p>
          <br />
          <p>PEFA/Raster Stage Kayole, Nairobi, Kenya</p>
          <br />
          <h5>follow us in social media:</h5>
          <br /><br />

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
    &copy; {new Date().getFullYear()}  All Rights Reserved              Made with  <div className='love-link'>❤</div> 
     by <a href="https://kimitasharrif.netlify.app/"> sherrif.com </a> 
  </p>
</div>

    </footer>
  );
}

const styles = {
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '300px', // Adjust the width as needed
    margin: '0 auto', // Center horizontally
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
