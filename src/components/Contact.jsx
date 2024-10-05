import React, { useState } from 'react';
import { Element } from 'react-scroll';
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
    <Element name="contact-section" className="section contact-section">
      <div className="form-container">
        <h2 className="form-heading">Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="form-input" 
              onChange={handleChange} 
              value={formData.name} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-input" 
              onChange={handleChange} 
              value={formData.email} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              id="message" 
              name="message" 
              className="form-textarea" 
              onChange={handleChange} 
              value={formData.message} 
              required 
            ></textarea>
          </div>

          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </Element>
  );
}

export default Contact;
