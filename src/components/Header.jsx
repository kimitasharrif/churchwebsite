import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/ministries">Ministries</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/sermons">Sermons</Link></li>
          <li><Link to="/giving">Giving</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
