import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FoodPartnerRegister = () => {

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const businessName = e.target.businessName.value;
    const contactName = e.target.contactName.value;
    const phone = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const address = e.target.address.value;

    axios.post("http://localhost:3000/api/auth/fpartner/register", {
      name:businessName,
      contactName,
      phone,
      email,
      password,
      address
    }, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        navigate("/create-food"); // Redirect to create food page after successful registration
      })
      .catch(error => {
        console.error("There was an error registering!", error);
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-card" style={{ maxWidth: '700px' }}>
        <div className="auth-header">
          <div className="auth-logo">
            🏪
          </div>
          <h1 className="auth-title">Join as Partner</h1>
          <p className="auth-subtitle">Start your food delivery journey with us</p>
          <span className="auth-type">Food Partner</span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className='form-label' htmlFor="businessName">Business Name</label>
            <input className='form-input' id="businessName" name="businessName" placeholder="Tasty Bites" autoComplete="organization" />
          </div>
          <div className="two-col">
            <div className="form-group">
              <label className='form-label' htmlFor="contactName">Contact Name</label>
              <input className='form-input' id="contactName" name="contactName" placeholder="Jane Doe" autoComplete="name" />
            </div>
            <div className="form-group">
              <label className='form-label' htmlFor="phone">Phone</label>
              <input className='form-input' id="phone" name="phone" placeholder="+1 555 123 4567" autoComplete="tel" />
            </div>
          </div>
            <div className="form-group">
              <label className='form-label' htmlFor="email">Email</label>
              <input className='form-input' id="email" name="email" type="email" placeholder="business@example.com" autoComplete="email" />
            </div>
          <div className="form-group">
            <label className='form-label' htmlFor="password">Password</label>
            <input className='form-input' id="password" name="password" type="password" placeholder="Create password" autoComplete="new-password" />
          </div>
          <div className="form-group">
            <label className='form-label' htmlFor="address">Address</label>
            <input className='form-input' id="address" name="address" placeholder="123 Market Street" autoComplete="street-address" />
            <p className="small-note">Full address helps customers find you faster.</p>
          </div>
          <button className="auth-submit" type="submit">Create Partner Account</button>
        </form>

        <div className="auth-divider">
          <span>Already a partner?</span>
        </div>

        <div className="auth-links">
          <Link to="/food-partner/login" className="auth-link">
            Sign In to Partner Portal
          </Link>
        </div>

        <div className="auth-divider">
          <span>Different role?</span>
        </div>

        <div className="auth-links">
          <Link to="/user/register" className="auth-link">
            Register as Customer
          </Link>
        </div>

        <div className="auth-links" style={{ marginTop: '1rem' }}>
          <Link to="/user/login" className="auth-link auth-link-secondary">
            Already a Customer? Sign in here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
