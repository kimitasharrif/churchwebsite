import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../App.css'; // Unified styling
import logo from '../assets/logo/transparent_pefa_logo.png';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Church Logo" className="logo" />
        <h1 className="church-name">ALL NATIONS-PEFA CHURCH KAYOLE B</h1>
        <nav>
          <ul className="nav-links">
            {location.pathname === '/' ? (
              <>
                <li>
                  <ScrollLink to="about-section" smooth={true} duration={500}>
                    About Us
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="ministries-section" smooth={true} duration={500}>
                    Ministries
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="events-section" smooth={true} duration={500}>
                    Events
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="sermons-section" smooth={true} duration={500}>
                    Sermons
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contact-section" smooth={true} duration={500}>
                    Contact
                  </ScrollLink>
                </li>
                {/* Add a unique class to the Giving link */}
                <li>
                  <ScrollLink to="giving-section" smooth={true} duration={500} className="giving-link">
                    Giving
                  </ScrollLink>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/ministries">Ministries</Link></li>
                <li><Link to="/events">Events</Link></li>
                <li><Link to="/sermons">Sermons</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/giving" className="giving-link">Giving</Link></li> {/* Unique class */}
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
