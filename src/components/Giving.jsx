import React from 'react';
import { Element } from 'react-scroll';

function Giving() {
  return (
    <Element name="giving-section" className="section giving-section">
      <h2>Online Giving</h2>
      <p>Your generosity helps our church serve the community and spread the Gospel. Thank you for your support.</p>
      <button onClick={() => alert('Donation portal coming soon!')}>Give Now</button>
    </Element>
  );
}

export default Giving;
