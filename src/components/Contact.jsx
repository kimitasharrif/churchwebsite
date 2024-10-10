import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import home from '../assets/bg/mountain.jpg';
import '../App.css';  // Import your updated styles

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for handling form submission
    console.log(formData);
  };

  return (
     <>
      <div className="contact-section">
        {/* Background Image */}
        <div className="contactlogo">
          <img src={home} alt="welcome contact" className="contact-logo" />
        </div>
        
        {/* Overlay for Active Page Text */}
        <div className="overlay">
          <h1>Contact Us</h1>
          <p>
            <Link to="/">Home</Link> // Contact Us
          </p>
        </div>

        {/* Main Content Section */}
        <div className="section contact-content">
      <div className="form-container">
        <h2 className="form-heading">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            {/* <label htmlFor="name" className="form-label">Name</label> */}
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-input" 
              placeholder="Your Name" // Added placeholder
              onChange={handleChange} 
              value={formData.name} 
              required 
            />
          </div>

          <div className="form-group">
            {/* <label htmlFor="email" className="form-label">Email</label> */}
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-input" 
              placeholder="Enter your E-mail" // Added placeholder
              onChange={handleChange} 
              value={formData.email} 
              required 
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="email" className="form-label">Email</label> */}
            <input 
              type="text" 
              id="subject" 
              name="text" 
              className="form-input" 
              placeholder="Your Subject" // Added placeholder
              onChange={handleChange} 
              value={formData.subject} 
              required 
            />
          </div>


          <div className="form-group">
            {/* <label htmlFor="message" className="form-label">Message</label> */}
            <textarea 
              id="message" 
              name="message" 
              className="form-textarea" 
              placeholder="Your Comment Write Here..." // Added placeholder
              onChange={handleChange} 
              value={formData.message} 
              required 
            ></textarea>
          </div>

          <button type="submit" className="form-button">SEND MESSAGE</button>
        </form>
      </div>
      </div>
      </div>
      </>
  );
}

export default Contact;
