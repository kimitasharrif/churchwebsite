import React from 'react';
import About from './About';        // Importing About section
import Ministries from './Ministries'; // Importing Ministries section
import Contact from './Contact';    // Importing Contact section
import Events from './Events';      // Import the Events section
import Sermons from './Sermons';    // Import the Sermons section
import Giving from './Giving';      // Import the Giving section
import '../App.css'; // Unified styling
import Footer from './Footer';

function Home() {
  return (
    <div>
         {/* Section: Home */}
      <div className="section home-section">
        <h1>Welcome to ALL NATIONS-PEFA CHURCH KAYOLE B</h1>
        <p>We are so glad you're here. Learn more about us and join our community.</p>
      </div>
      <About />        {/* About Section */}
      <Ministries />   {/* Ministries Section */}
      <Events />       {/* Events Section */}
      <Sermons />      {/* Sermons Section */}
      <Giving />       {/* Giving Section */}
      <Contact />      {/* Contact Section */}
      <Footer/>
    </div>
  );
}

export default Home;
