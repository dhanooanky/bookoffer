

import React, { useState } from 'react';
import './Form.css';;

const Form = ({ formData, setFormData, onSubmit }) => {
  const [errors, setErrors] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', phoneNumber: '', email: '' };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    // Phone number validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
      valid = false;
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number. Please enter a 10-digit number.';
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address. Please enter a valid email.';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (

    <div>
        <div className='ani'>
        <h1>Book Donation</h1>
        </div>
      <form onSubmit={handleSubmit}>
        <div>
        
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.name}</span>
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.phoneNumber}</span>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <span style={{ color: 'red' }}>{errors.email}</span>
        </div>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Form;