import React from 'react';
import { Element } from 'react-scroll';

function About() {
  return (
    <Element name="about-section" className="section about-section">
      <h2>About Our Church</h2>
      <p>Our church is a place of worship, fellowship, and outreach. We believe in bringing the love of Christ to our community and the world.</p>
      <h3>Mission and Vision</h3>
      <p>Our mission is to spread the Gospel and to serve others with the love of Jesus Christ.</p>
      <h3>Leadership Team</h3>
      <ul>
        <li>Senior Pastor: Peter Ndambuki</li>
        <li>Associate Pastor William Wasonga</li>
        <li>Youth Pastor Tom Brown</li>
      </ul>
    </Element>
  );
}

export default About;