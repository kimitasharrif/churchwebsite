import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import home from '../assets/bg/mountain.jpg';
import '../App.css'

function Giving() {
  return (
     <>
      <div className="giving-section">
        {/* Background Image */}
        <div className="givinglogo">
          <img src={home} alt="welcome giving" className="giving-logo" />
        </div>
        
        {/* Overlay for Active Page Text */}
        <div className="overlay">
          <h1>Giving</h1>
          <p>
            <Link to="/">Home</Link> // Giving
          </p>
        </div>

        {/* Main Content Section */}
        <div className="section giving-content">
      <h2>Online Giving</h2>
      <p>Your generosity helps our church serve the community and spread the Gospel. Thank you for your support.</p>
      <button onClick={() => alert('Donation portal coming soon!')}>Give Now</button>
      </div>
      </div>
    </>
  );
}

export default Giving;
