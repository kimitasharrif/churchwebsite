import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css'; // All CSS in App.css
import logo from '../assets/logo/transparent_pefa_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faTiktok, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false); // Close the menu after a link is clicked
  };

  return (
    <header>
      {/* Header Social Section with blue background */}
      <div className="header-social">
        <div className="contact-info">
          <p>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+1234567890">+123 456 7890</a>
            <span style={{ margin: '0 10px' }}></span> {/* Separator */}
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:pefakayoleb@gmail.com">pefakayoleb@gmail.com</a>
          </p>
        </div>

        <div className="social-media-links">
          <a href="https://www.youtube.com/@pkb_church" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
          <a href="https://www.facebook.com/churchpkb/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.tiktok.com/@pkb_church" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} size="2x" />
          </a>
          <a href="https://www.instagram.com/pkb_church/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>

      {/* Header Menu Section with white background */}
      <div className="header-menu">
        <div className="logo-container">
          <img src={logo} alt="Church Logo" className="logo" />
          <h1 className="church-name">ALL NATIONS-PEFA CHURCH KAYOLE B</h1>
        </div>
    

        {/* Hamburger icon for small screens */}
        <FontAwesomeIcon icon={faBars} className="menu-icon" onClick={toggleMenu} />

        <nav>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
            <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
            <li><Link to="/ministries" onClick={closeMenu}>MINISTRIES</Link></li>
            <li><Link to="/events" onClick={closeMenu}>EVENTS</Link></li>
            <li><Link to="/sermons" onClick={closeMenu}>SERMONS</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
            <li><Link to="/giving" className="giving-link" onClick={closeMenu}>GIVING</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
