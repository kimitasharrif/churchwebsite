import React from 'react';
import { Element } from 'react-scroll';
import '../App.css'

function Sermons() {
  return (
    <Element name="sermons-section" className="section sermons-section">
      <h2>Sermons</h2>
      <p>Watch our latest sermons or browse our sermon archive.</p>
      <ul>
        <li><a href="/sermon1">Sermon 1: God's Love</a></li>
        <li><a href="/sermon2">Sermon 2: Faith in Hard Times</a></li>
        <li><a href="/sermon3">Sermon 3: Living with Purpose</a></li>
      </ul>
    </Element>
  );
}

export default Sermons;
