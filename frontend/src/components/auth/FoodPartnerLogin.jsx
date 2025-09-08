import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log('Food Partner login data:', formData);
    }, 2000);
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

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Business Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="form-input"
              placeholder="Enter your business email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="auth-links">
            <Link to="/food-partner/forgot-password" className="auth-link auth-link-secondary">
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="auth-submit"
            disabled={isLoading}
          >
            {isLoading && <span className="auth-loading"></span>}
            {isLoading ? 'Signing In...' : 'Access Dashboard'}
          </button>
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
