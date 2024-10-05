import React, { useState } from 'react';
import { Element } from 'react-scroll';

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
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange} value={formData.name} />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} value={formData.email} />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" onChange={handleChange} value={formData.message}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </Element>
  );
}

export default Contact;
