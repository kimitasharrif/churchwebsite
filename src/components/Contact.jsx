import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/bg/mountain.jpg'; 
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Icons
import '../Styles/Contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    console.log(formData);
    // Add your form submission logic here
  };

  return (
    <>
      <div className="contact-section">
        {/* Background Image */}
        <div className="contact-logo-container">
          <img src={home} alt="welcome contact" className="contact-logo" />
          {/* Overlay for Active Page Text */}
          <div className="overlay">
            <h1>Contact Us</h1>
            <p>
              <Link to="/">Home</Link> // Contact Page
            </p>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="contact-content">
          <div className="contact-container">
            {/* Left Side - Contact Details */}
            <div className="contact-details">
              <h2 className="details-heading">Contact Details</h2>
              <div className="detail-item">
                <FaMapMarkerAlt className="icon" />
                <div className="detail-info">
                  <p className="detail-title">Location</p>
                  <p className="detail-text">123 Church Street, Nairobi, Kenya</p>
                </div>
              </div>
              <div className="detail-item">
                <FaPhoneAlt className="icon" />
                <div className="detail-info">
                  <p className="detail-title">Phone</p>
                  <p className="detail-text">+254 700 123456</p>
                </div>
              </div>
              <div className="detail-item">
                <FaEnvelope className="icon" />
                <div className="detail-info">
                  <p className="detail-title">Email</p>
                  <p className="detail-text">info@church.org</p>
                </div>
              </div>
              <div className="working-hours">
                <p><strong>Main Services:</strong> Sun, 7 AM - 1 PM</p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="form-container">
              <h2 className="form-heading">Get In Touch</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    placeholder="Your Name" 
                    onChange={handleChange} 
                    value={formData.name} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    placeholder="Enter your E-mail" 
                    onChange={handleChange} 
                    value={formData.email} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    className="form-input" 
                    placeholder="Your Subject" 
                    onChange={handleChange} 
                    value={formData.subject} 
                    required 
                  />
                </div>

                <div className="form-group">
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-textarea" 
                    placeholder="Your Comment Write Here..." 
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
      </div>
    </>
  );
}

export default Contact;
