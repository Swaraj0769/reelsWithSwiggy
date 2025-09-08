import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FoodPartnerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e. target.password.value;

    const response = await axios.post('http://localhost:3000/api/auth/fpartner/login',{
      email,
      password
    },{ withCredentials: true });

    console.log(response.data);
    
    navigator('/create-food')
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            🏪
          </div>
          <h1 className="auth-title">Partner Portal</h1>
          <p className="auth-subtitle">Access your restaurant dashboard</p>
          <span className="auth-type">Food Partner</span>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className='form-label' htmlFor="email">Email</label>
            <input className='form-input' id="email" name="email" type="email" placeholder="business@example.com" autoComplete="email" />
          </div>
          <div className="form-group">
            <label className='form-label' htmlFor="password">Password</label>
            <input className='form-input' id="password" name="password" type="password" placeholder="Password" autoComplete="current-password" />
          </div>
          <button className="auth-submit" type="submit">Sign In</button>
        </form>

        <div className="auth-divider">
          <span>New to our platform?</span>
        </div>

        <div className="auth-links">
          <Link to="/food-partner/register" className="auth-link">
            Register as Food Partner
          </Link>
        </div>

        <div className="auth-divider">
          <span>Different role?</span>
        </div>

        <div className="auth-links">
          <Link to="/user/login" className="auth-link">
            Sign in as Customer
          </Link>
        </div>

        <div className="auth-links" style={{ marginTop: '1rem' }}>
          <Link to="/user/register" className="auth-link auth-link-secondary">
            New Customer? Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
