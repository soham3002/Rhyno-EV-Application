import React, { useState } from 'react';
import './PreBook.css';

const PreBook = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleModel: '',
    deliveryDate: '',
    additionalInfo: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and payment gateway integration here
    setFormSubmitted(true);
    // Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicleModel: '',
      deliveryDate: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="prebook-container">
      <div className="prebook-header">
        <h1>Pre-book Your Rhyno EV</h1>
        <p>Please fill out the form below to pre-book your vehicle.</p>
      </div>
      <form className="prebook-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="vehicleModel">Vehicle Model:</label>
        <select
          id="vehicleModel"
          name="vehicleModel"
          value={formData.vehicleModel}
          onChange={handleChange}
          required
        >
          <option value="">Select a model</option>
          <option value="SE03 Lite">SE03 Lite</option>
          <option value="SE03">SE03</option>
          <option value="SE03 Max">SE03 Max</option>
        </select>

        <label htmlFor="deliveryDate">Preferred Delivery Date:</label>
        <input
          type="date"
          id="deliveryDate"
          name="deliveryDate"
          value={formData.deliveryDate}
          onChange={handleChange}
          required
        />

        <label htmlFor="additionalInfo">Additional Information:</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
      {formSubmitted && <p>Thank you for your pre-booking! We will contact you soon.</p>}
      
      {/* Placeholder for payment gateway integration */}
      <div className="payment-info">
        <h3>Payment Information</h3>
        <p>Payment gateway integration will be implemented here.</p>
      </div>
    </div>
  );
};

export default PreBook;
