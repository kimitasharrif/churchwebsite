import React from 'react';
import { Element } from 'react-scroll';
import '../App.css'

function Events() {
  return (
    <Element name="events-section" className="section events-section">
      <h2>Upcoming Events</h2>
      <ul>
        <li>Community Service Day - Oct 15</li>
        <li>Worship Night - Nov 1</li>
        <li>Christmas Service - Dec 25</li>
      </ul>
    </Element>
  );
}

export default Events;
