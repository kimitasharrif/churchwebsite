import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import home from '../assets/images/mountain.jpg'; 
import '../Styles/Giving.css';  // Assuming this is your CSS file

const Giving = () => {
  const [formData, setFormData] = useState({
    givingTowards: 'Tithe/Offering',
    firstName: '',
    lastName: '',
    mobile: '',
    email: '',
    address: '',
    zipPostal: '',
    townCity: '',
    country: 'Kenya',
    currency: 'KES',
    amount: '',
  });

  const [showReview, setShowReview] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowReview(true);
  };

  const handleEdit = () => {
    setShowReview(false);
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    console.log('Final submission:', formData);
    alert('Thank you for your generosity!');
  };

  return (
    <div className="giving-section">
      <div className="welcome-hero">
        <div className="contactlogo">
          <img src={home} alt="welcome contact" className="contact-logo" />
        </div>

        <div className="overlay">
          <h1>Give</h1>
          <p><Link to="/">Home</Link> // Giving Page</p>
        </div>
      </div>

      <div className="giving-form">
        {showReview ? (
          <div>
            <h2>Review Your Information</h2>
            <p><strong>You are giving towards:</strong> {formData.givingTowards}</p>
            <p><strong>First Name:</strong> {formData.firstName}</p>
            <p><strong>Last Name:</strong> {formData.lastName}</p>
            <p><strong>Mobile:</strong> {formData.mobile}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>Zip/Postal Code:</strong> {formData.zipPostal}</p>
            <p><strong>Town/City:</strong> {formData.townCity}</p>
            <p><strong>Country:</strong> {formData.country}</p>
            <p><strong>Currency:</strong> {formData.currency}</p>
            <p><strong>Amount:</strong> {formData.amount}</p>
<button className="button-space" onClick={handleEdit}>Edit</button>
<button className="button-space" onClick={handleFinalSubmit}>Submit</button>

          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h2>Giving</h2>
            <p>* Marked items are mandatory</p>

            <div className="form-group">
              <label htmlFor="givingTowards">You are giving towards: *</label>
              <select
                id="givingTowards"
                name="givingTowards"
                value={formData.givingTowards}
                onChange={handleChange}
              >
                <option value="Tithe/Offering">Tithe/Offering</option>
                <option value="Logos Scholarship Fund">Logos Scholarship Fund</option>
                <option value="Church Fund Raising">Church Fund Raising</option>
                <option value="Pastors day Pledge">Pastors day Pledge</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="firstName">First Name: </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastName">Last Name: </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile: </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address: </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <label htmlFor="zipPostal">Zip/Postal Code: </label>
              <input
                type="text"
                id="zipPostal"
                name="zipPostal"
                value={formData.zipPostal}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="townCity">Town/City: </label>
              <input
                type="text"
                id="townCity"
                name="townCity"
                value={formData.townCity}
                onChange={handleChange}
                required
              />
              <label htmlFor="country">Country: </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              >
                <option value="Kenya">Kenya</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="currency">Currency: </label>
              <select
                id="currency"
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                required
              >
                <option value="KES">KES</option>
              </select>

              <label htmlFor="amount">Amount: </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Continue</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Giving;
