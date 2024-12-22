import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import home from '../assets/images/churchview.jpg';
import '../App.css'

function Ministries() {
  return (
     <>
      <div className="ministries-section">
        <h2>Our Ministries</h2>
        {/* Main Content Section */}
        <div className="section ministries-content">
      
      <h3>Youth Ministry</h3>
      <p>We offer youth programs that help young people grow in their faith and have fun together.</p>
      <h3>Women's Ministry</h3>
      <p>Our women's ministry supports women in their walk with Christ and creates a strong community of faith.</p>
      <h3>Men's Ministry</h3>
      <p>Our men's group meets for Bible studies, fellowship, and service opportunities.</p>
      <h3>Outreach</h3>
      <p>We reach out to our local community and the world through various outreach programs and missions.</p>
    ,</div>
    </div>
    </>
  );
}

export default Ministries;
