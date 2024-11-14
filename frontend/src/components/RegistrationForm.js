// frontend/src/components/RegistrationForm.js
import React, { useState } from 'react';
import registrationService from '../services/registrationService';
import '../styles/RegistrationForm.css';

const RegistrationForm = ({ addUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date_of_birth: '',
    phone_number: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone_number)) {
      alert('Phone number must be exactly 10 digits.');
      return;
    }

    try {
      const response = await registrationService.create(formData);
      addUser(response.data); // Add new user to the list immediately
      setFormData({ name: '', email: '', date_of_birth: '', phone_number: '' });
      alert('Registration successful!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Error registering user. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="date"
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Phone Number (10 digits)"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
