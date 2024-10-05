import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 Our Church</p>
      <ul>
        <li><Link to="/privacy">Privacy Policy</Link></li>
        <li><Link to="/terms">Terms of Service</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
