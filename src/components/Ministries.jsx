import React from 'react';
import { Element } from 'react-scroll';

function Ministries() {
  return (
    <Element name="ministries-section" className="section ministries-section">
      <h2>Our Ministries</h2>
      <h3>Youth Ministry</h3>
      <p>We offer youth programs that help young people grow in their faith and have fun together.</p>
      <h3>Women's Ministry</h3>
      <p>Our women's ministry supports women in their walk with Christ and creates a strong community of faith.</p>
      <h3>Men's Ministry</h3>
      <p>Our men's group meets for Bible studies, fellowship, and service opportunities.</p>
      <h3>Outreach</h3>
      <p>We reach out to our local community and the world through various outreach programs and missions.</p>
    </Element>
  );
}

export default Ministries;
